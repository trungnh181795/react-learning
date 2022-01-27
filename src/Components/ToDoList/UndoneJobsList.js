import React from 'react';

import JobItem from './JobItem';
import { useStore } from './store';

const UndoneJobsList = () => {

    const [state, dispatch] = useStore();
    console.log(state)

    const { tasks, inputTask } = state;

    const undoneTasks = tasks.filter((task) => task.isDone === false)

    return (
        <ul className='JobsList mb-2'>
            <div className="JobsHeader">Tasks:</div>
            {undoneTasks.length > 0 ? undoneTasks.map((task) => 
                <JobItem 
                    task={task} 
                    key={task.id}
                />
            ) : <p>There's nothing to show yet!</p>}
        </ul>
    )

}

export default UndoneJobsList;