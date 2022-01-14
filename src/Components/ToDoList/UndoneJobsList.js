import React from 'react';
import JobItem from './JobItem';

const UndoneJobsList = (props) => {
    const tasks = [...props.jobs];

    const handleDelete = (job) => {
        props.clearJobDone(job);
        console.log(job)
    }

    
    return (
        <ul className='JobsList'>
            <div className="JobsHeader">Task:</div>
            {tasks.length > 0 ? tasks.map((job, index) => 
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