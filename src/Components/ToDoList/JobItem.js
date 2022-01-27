import React, { useState } from "react";

import { useStore } from './store';
import {
    deleteTask,
    changeTaskStatus
} from './store/actions';
import JobItemDetail from './JobItemDetail';

const JobItem = (props) => {

    const [showDetail, setShowDetail] = useState(false);
    const [state, dispatch] = useStore();


    const handleCheckBoxChange = (e) => {
        let isChecked = e.target.checked;
        let taskId = props.task.id;
        dispatch(changeTaskStatus({
            taskId,
            isChecked
        }));
    }

    const handleDelele = () => {
        dispatch(deleteTask(props.task.id));
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
                    checked={props.task.isDone}
                    onChange={handleCheckBoxChange}
                />
                <div 
                    className='item-text me-2'
                    style={{'textDecoration': props.task.isDone ? 'line-through' : 'none'}}
                >
                    {props.task.title}
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