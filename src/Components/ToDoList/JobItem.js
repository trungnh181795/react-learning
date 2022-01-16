import React, {useState} from "react";

import JobItemDetail from './JobItemDetail'

const JobItem = (props) => {

    const [task, setTask] = useState(props.job)

    const [showDetail, setShowDetail] = useState(false);

    const handleCheckBoxChange = () => {
        setTask((prev) => {
            let currentTask = {...prev};
            currentTask.isDone = !currentTask.isDone;

            return currentTask
        })
        
    }

    const handleButtonOnClick = (e) => {
        props.onDelete(task) 
    }

    const handleSetShowDetail = (e) => {
        setShowDetail(!showDetail);
        console.log(e.target)
    }
    console.log('called in JobItem', task)

    return (
        <li className='JobItem'>
            <div className='JobItem-Title'>
                <button 
                    className="item-dropdown me-2"
                    onClick={(e) => handleSetShowDetail(e)}
                >
                    <i className="arrow-down"></i>
                </button>
                <input
                    className='item-checkbox me-2'
                    type='checkbox'
                    checked={task.isDone}
                    onChange={handleCheckBoxChange}
                />
                <div 
                    className='item-text me-2'
                    style={{'textDecoration': task.isDone ? 'line-through' : 'none'}}
                >
                    {task.title}
                </div>
                <button 
                    className='btn btn-danger item-delete-button'
                    type="button"
                    onClick={handleButtonOnClick}
                >
                    Delete
                </button>
            </div>
            {showDetail && <JobItemDetail job={task} />}
        </li>
    )

}

export default JobItem;