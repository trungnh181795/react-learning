import React from "react";
import JobItem from "./JobItem";

const DoneJobsList = (props) => {
   
    const doneTasks = [...props.jobs].filter((task) => task.isDone === true);

    // const handleDelete = (job) => {
    //     props.clearJobDone(job);
    //     console.log(job)
    // }

    // const handleJobDone = (jobId, e) => {
    //     props.handleJobDone(jobId, e)
    // }
    
    return (
        <ul className='JobsList'>
            <div className="JobsHeader">Done Task:</div>
            {doneTasks.length ? doneTasks.map((job, index) => 
                <JobItem 
                    job={job} 
                    key={index}
                    // onDelete={handleDelete}
                    // onDone={handleJobDone}
                />
            ) : <p>No task done!</p>}
        </ul>
    )

}

export default DoneJobsList;