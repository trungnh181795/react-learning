import React from 'react';
import JobItem from './JobItem';

const UndoneJobsList = (props) => {

    const undoneTasks = [...props.jobs].filter((task) => task.isDone === false)

    const handleDelete = (job) => {
        props.clearJobDone(job);
        console.log(job)
    }

    const handleJobDone = (jobId, e) => {
        props.handleJobDone(jobId, e)
    }
    
    return (
        <ul className='JobsList mb-2'>
            <div className="JobsHeader">Tasks:</div>
            {undoneTasks.length > 0 ? undoneTasks.map((job) => 
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