import React from 'react';
import JobItem from './JobItem';

const JobsList = (props) => {

    const handleDelete = (job) => {
        props.clearJobDone(job);
        console.log(job)
    }

    return (
        <ul className='JobsList'>
            {props.jobs.map((job, index) => 
                <JobItem 
                    job={job} 
                    key={index}
                    onDelete={handleDelete}
                />
            )}
        </ul>
    )

}

export default JobsList;