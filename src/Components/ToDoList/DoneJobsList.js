import React from "react";

import { useStore } from './store';
import JobItem from "./JobItem";

const DoneJobsList = () => {
    
    const [state, dispatch] = useStore();
    
    const { tasks, inputTask } = state;

    const doneTasks = tasks.filter((task) => task.isDone === true);
    
    return (
        <ul className='JobsList'>
            <div className="JobsHeader">Done Task:</div>
            {doneTasks.length ? doneTasks.map((task) => 
                <JobItem 
                    task={task} 
                    key={task.id}
                />
            ) : <p>No task done!</p>}
        </ul>
    )

}

export default DoneJobsList;