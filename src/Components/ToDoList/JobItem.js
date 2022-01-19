import React, {useState} from "react";

import JobItemDetail from './JobItemDetail'

const JobItem = (props) => {

    const [showDetail, setShowDetail] = useState(false);
    const [isChecked, setIsChecked] = useState(props.job.isDone);

    const handleCheckBoxChange = (e) => {
        console.log('this ID is passed from JobItem:', props.job.id)
        setIsChecked(!isChecked)
        props.onDone(props.job.id, e)
    }

    const handleButtonOnClick = (e) => {
        props.onDelete(props.job) 
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
                    checked={isChecked}
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
                    onClick={handleButtonOnClick}
                >
                    Delete
                </button>
            </div>
            {showDetail && <JobItemDetail job={props.job} />}
        </li>
    )

}

export default JobItem;