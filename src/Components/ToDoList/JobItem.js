import React, {useState} from "react";

import JobItemDetail from './JobItemDetail'

const JobItem = (props) => {

    const [isChecked, setIsChecked] = useState(false);

    const [showDetail, setShowDetail] = useState(false);

    const handleCheckBoxChange = () => {
        setIsChecked(!isChecked);
    }

    const handleButtonOnClick = (e) => {
        props.onDelete(props.job) 
    }

    const handleSetShowDetail = () => {
        setShowDetail(!showDetail);
    }
    console.log('called in JobItem', props.job)

    return (
        <li className='JobItem' onClick={handleSetShowDetail}>
            <div className='JobItem-Title'>
                <input
                    className='item-checkbox'
                    type='checkbox'
                    onChange={handleCheckBoxChange}
                />
                <p 
                    className='item-text'
                    style={{'textDecoration': isChecked ? 'line-through' : 'none'}}
                >
                    {props.job.title}
                </p>
                <button 
                    className='item-delete-button'
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