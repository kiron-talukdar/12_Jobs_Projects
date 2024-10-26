import React from 'react';
import { IoLocation } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
    const { id,logo, job_title, company_name, job_type, remote_or_onsite, salary,location, experiences } = job;


    return (

        <div>
            <div class="card bg-base-100 shadow-xl p-6 " >
                <figure>
                    <img className='w-48 h-16 left'
                        src={logo}
                        alt="Shoes" />
                </figure>

                <div class="card-body">
                    <h2 class="card-title" className='text-left text-2xl font-bold'>  {job_title}  </h2>
                    <h2 class="card-title" className='text-left font-normal mt-2'> {company_name} </h2>
                    <div class="card-actions flex justify-start mt-4">
                        <button className=' flex items-center  px-5 py-2 font-extrabold border rounded-md '>{remote_or_onsite}</button>
                        <button className=' flex items-center px-5 py-2 font-extrabold border rounded-md '> {job_type}</button>
                    </div>
                    <div class="card-actions flex justify-start mt-4">
                        <button className=' flex items-center  px-5 py-2 font-extrabold border rounded-md '><IoLocation />{location}</button>
                        <button className=' flex items-center px-5 py-2 font-extrabold border rounded-md '> <RiMoneyDollarCircleFill /> Salary: {salary}</button>
                    </div>

                    <div class="card-actions" className='mt-7'>
                        <Link to={`/job/${id}`}>
                            <button className='btn btn-info'>View Details</button>
                        </Link>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Job;