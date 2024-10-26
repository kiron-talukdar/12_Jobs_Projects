import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../Utility/localStorage';

const AppliedJobs = () => {

    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                jobsApplied.push(job)
            }
            setAppliedJobs(jobsApplied);
            // const jobsApplied=jobs.filter(job=> storedJobIds.includes(job.id))
            console.log(jobsApplied)

        }
    }, [])

    return (
        <div>
            <h2>JOb i applied {appliedJobs.length}</h2>
            <ul>
                {
                    appliedJobs.map(job=> <li key={job.id}><span>{job.job_title} {job.company_name} {job.remote_or_onsite}</span></li>)
                }
            </ul>

            <details class="dropdown">
                <summary class="btn m-1">All</summary>
                <ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a>Remote</a></li>
                    <li><a>onsite</a></li>
                </ul>
            </details>
        </div>
    );
};

export default AppliedJobs;