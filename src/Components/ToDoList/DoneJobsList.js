import React from "react";
import JobItem from "./JobItem";

const DoneJobsList = (props) => {
    const tasks = props.jobs;
    const doneTasks = tasks.filter((task, index) => task.isDone === true )

    const handleDelete = (job) => {
        props.clearJobDone(job);
        console.log(job)
    }

    
    return (
        <ul className='JobsList'>
            <div className="JobsHeader">Done Task:</div>
            {tasks.length ? tasks.map((job, index) => 
                <JobItem 
                    job={job} 
                    key={index}
                    onDelete={handleDelete}
                />
            ) : <p>There's nothing to show yet!</p>}
        </ul>
    )

}

export default DoneJobsList;