import React, { useState, useContext } from "react";

import JobItemDetail from './JobItemDetail';
import { ToDoListContext } from './ToDoList';

const JobItem = (props) => {

    const [showDetail, setShowDetail] = useState(false);
    // const [isChecked, setIsChecked] = useState(props.job.isDone);

    const { changeJobStatus, removeJobFromList } = useContext(ToDoListContext);

    const handleCheckBoxChange = (e) => {
        // setIsChecked(!isChecked)
        changeJobStatus(props.job.id, e)
    }

    const handleDelele = () => {
        removeJobFromList(props.job);
    }

    const handleSetShowDetail = (e) => {
        setShowDetail(!showDetail);
    }

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
                    checked={props.job.isDone}
                    onChange={handleCheckBoxChange}
                />
                <div 
                    className='item-text me-2'
                    style={{'textDecoration': props.job.isDone ? 'line-through' : 'none'}}
                >
                    {props.job.title}
                </div>
                <button 
                    className='btn btn-danger item-delete-button'
                    type="button"
                    onClick={handleDelele}
                >
                    Delete
                </button>
            </div>
            {showDetail && <JobItemDetail job={props.job} />}
        </li>
    )

}

export default JobItem;