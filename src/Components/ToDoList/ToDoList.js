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

    const changeJobStatus = (jobId, e) => {
        setJobs((prev) => {
            let currentJobs = [...prev];
            console.log(currentJobs)
            
            let statusChangedJob = currentJobs.find((job) => job.id === jobId );
            console.log('before change', statusChangedJob)
            console.log('this is isDone of the job found before change:', statusChangedJob.isDone)

            statusChangedJob.isDone = e.target.checked;
            console.log('after changed', statusChangedJob);
            console.log('this is isDone of the job found after changed:', statusChangedJob.isDone);
            
            console.log('new arr', currentJobs);


            localStorage.setItem('toDoList', JSON.stringify(currentJobs))


            return currentJobs
        })
    }

    console.log('rerendered')
    console.log('all jobs:', jobs)

    return (
        <div className='ToDoList'>

            <JobInput submitNewJob={createNewJob}/>
            <UndoneJobsList 
                jobs={jobs}
                clearJobDone={removeJobFromList}
                handleJobDone={changeJobStatus}
            />
            <DoneJobsList   
                jobs={jobs}
                clearJobDone={removeJobFromList}
                handleJobDone={changeJobStatus}
            />
        </div>
    )
}

export default ToDoList;