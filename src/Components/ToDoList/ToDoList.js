import React, {useState, useEffect} from 'react';

import UndoneJobsList from './UndoneJobsList';
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


    console.log(jobs)

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

    

    return (
        <div className='ToDoList'>

            <JobInput submitNewJob={createNewJob}/>
            <UndoneJobsList 
                jobs={jobs}
                clearJobDone={removeJobFromList}
            />
        </div>
    )
}

export default ToDoList;