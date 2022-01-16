import React from 'react';
import JobItem from './JobItem';

const UndoneJobsList = (props) => {
    const tasks = [...props.jobs];
    const unDoneTasks = tasks.filter((task, index) => task.isDone === false);
    console.log('undone',unDoneTasks)

    const handleDelete = (job) => {
        props.clearJobDone(job);
        console.log(job)
    }

    
    return (
        <ul className='JobsList mb-2'>
            <div className="JobsHeader">Task:</div>
            {unDoneTasks.length > 0 ? unDoneTasks.map((job, index) => 
                <JobItem 
                    job={job} 
                    key={index}
                    onDelete={handleDelete}
                />
            ) : <p>There's nothing to show yet!</p>}
        </ul>
    )

}

export default UndoneJobsList;