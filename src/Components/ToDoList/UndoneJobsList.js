import React from 'react';
import JobItem from './JobItem';

const UndoneJobsList = (props) => {

    const handleDelete = (job) => {
        props.clearJobDone(job);
        console.log(job)
    }

    const handleJobDone = (jobId) => {
        props.handleJobDone(jobId)
    }
    
    return (
        <ul className='JobsList mb-2'>
            <div className="JobsHeader">Tasks:</div>
            {props.jobs.length > 0 ? props.jobs.map((job) => 
                <JobItem 
                    job={job} 
                    key={job.id}
                    onDelete={handleDelete}
                    onDone={handleJobDone}
                />
            ) : <p>There's nothing to show yet!</p>}
        </ul>
    )

}

export default UndoneJobsList;