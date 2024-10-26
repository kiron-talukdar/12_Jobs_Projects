import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../Utility/localStorage';
const JobDetails = () => {

   

    const jobs=useLoaderData();
    
    const{id}=useParams();
    const idInt=parseInt(id);
    const job =jobs.find(job=>job.id===idInt);
    // console.log(job);

    const handleApplyJob=()=>{
        saveJobApplication(idInt)
        toast("You have applied Successfully!");
    }

    return (
        <div className=''>
            {/* <h2>JOb Details of: {id} </h2> */}
            <div className='grid md:grid-cols-4 gap-4 leading-8 my-24'>
                <div className=' md:col-span-3'>
                    <p className=''> <span className='font-bold' >Job Description:</span> { job.job_description}</p>
                    <p className='mt-6' > <span className='font-bold'> Job Responsibility:</span>
                        { job.job_responsibility}
                    </p>

                    <p className='mt-6 font-bold'>Educational Requirements:</p>
                    <span className='mt-4'>{job.educational_requirements}</span>
                    <p className='mt-6 font-bold'>Experiences:</p>
                    <span className='mt-4'>{job.experiences}</span>
                </div>

                <div className='border p-4 rounded-lg bg-[image:linear-gradient(90deg,_rgba(126,144,254,0.10)_0%,_rgba(152,115,255,0.10)_100%)]'>
                    <div>
                        <h2 className='font-bold'>Job Details:</h2>
                        <hr className='my-6' />
                        <h2><span className='font-bold'>Salary :</span> {job.salary}</h2>
                        <h2 className='font-bold'>Job Title : <span>{job.job_title}</span> </h2>
                    </div>
                   
                    <div>
                        <h2 className='font-bold mt-8'>Contact Information: </h2>
                        <hr className='my-6' />
                        <p><span className='font-bold'>Phone :</span> {job.contact_information.phone}</p>
                        <p><span className='font-bold'>Email :</span> {job.contact_information.email}</p>
                        <p><span className='font-bold'>Address :</span> {job.contact_information.address}</p>
                    </div>
                 
                    <button onClick={handleApplyJob} className='btn btn-primary mt-6 w-full'>Apply Now</button>
                </div>

            </div>
            <ToastContainer />

        </div>
    );
};

export default JobDetails;