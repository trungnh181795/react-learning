import React, {useState} from "react";

import JobItemDetail from './JobItemDetail'

const JobItem = (props) => {

    const [showDetail, setShowDetail] = useState(false);

    const handleCheckBoxChange = () => {
        console.log('this ID is passed from JobItem:', props.job.id)
        props.onDone(props.job.id)
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