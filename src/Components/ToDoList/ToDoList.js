import React, {useState, useEffect} from 'react';

import UndoneJobsList from './UndoneJobsList';
import DoneJobsList from './DoneJobsList';
import JobInput from './JobInput';

import './ToDoList.scss';

const ToDoList = () => {

    useEffect(() => {
        document.title = 'To-do List';
    })

    const [jobs, setJobs] = useState(() => {
        let jobsList = localStorage.getItem('toDoList');
        let result = JSON.parse(jobsList);
        
        return result ?? []
    });

    // const [doneJobs, setDoneJobs] = useState(() => {
    //     return jobs.filter((job) => job.isDone === true)
    // })

    const createNewJob = (job) => {
        if(job.title !== '') {
            setJobs(prev => {
                let newJobs = [...prev, job];
                localStorage.setItem('toDoList', JSON.stringify(newJobs));
                
                return newJobs
            });
        }
    }

    const removeJobFromList = (job) => {
        console.log(job)
        setJobs((prev) => {
            let currentJobs = [...prev];
            let indexOfJobDone = currentJobs.indexOf(job);
            currentJobs.splice(indexOfJobDone, 1);
            localStorage.setItem('toDoList', JSON.stringify(currentJobs));

            return currentJobs
        })
    }

    const changeJobStatus = (jobId) => {
        setJobs((prev) => {
            let currentJobs = [...prev];
            console.log(currentJobs)
            
            let statusChangedJob = currentJobs.find((job) => job.id === jobId );
            // console.log('before change', statusChangedJob)
            // console.log('this is isDone of the job found befor change:', statusChangedJob.isDone)

            statusChangedJob.isDone = !statusChangedJob.isDone;
            // console.log('after changed', statusChangedJob);
            // console.log('this is isDone of the job found after changed:', statusChangedJob.isDone);
            
            // console.log('new arr', currentJobs);


            localStorage.setItem('toDoList', JSON.stringify(currentJobs))
            // return [...prev].map((e) => {
            //     console.log('before', e.isDone)
            //     e.isDone = !e.isDone;
            //     console.log('after', e.isDone)
            //     return e
            // })

            return currentJobs
        })
    }

    // console.log('rerendered')
    // console.log('all jobs:', jobs)

    return (
        <div className='ToDoList'>

            <JobInput submitNewJob={createNewJob}/>
            <UndoneJobsList 
                jobs={jobs}
                clearJobDone={removeJobFromList}
                handleJobDone={changeJobStatus}
            />
            {/* <DoneJobsList   
                jobs={doneJobs}
                clearJobDone={removeJobFromList}
                handleJobDone={changeJobStatus}
            /> */}
        </div>
    )
}

export default ToDoList;