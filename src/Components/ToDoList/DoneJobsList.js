import React from "react";
import JobItem from "./JobItem";

const DoneJobsList = (props) => {
    const tasks = props.jobs;
    const doneTasks = tasks.filter((task, index) => task.isDone === true )
    console.log(doneTasks)

    const handleDelete = (job) => {
        props.clearJobDone(job);
        console.log(job)
    }

    
    return (
        <ul className='JobsList'>
            <div className="JobsHeader">Done Task:</div>
            {doneTasks.length ? doneTasks.map((job, index) => 
                <JobItem 
                    job={job} 
                    key={index}
                    onDelete={handleDelete}
                />
            ) : <p>No task done!</p>}
        </ul>
    )

}

export default DoneJobsList;