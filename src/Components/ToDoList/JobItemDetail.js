import React, {useState} from "react";

const JobItemDetail = (props) => {
    const {detail, createdAt: {createdDay, createdTime},...keys} = props.job;

    return (
        <div className="JobItemDetail">
            <textarea
                className="detail-text form-control my-2"
                value={detail}
                style={{resize: 'none'}}
                readOnly
            />
            <div className="detail-time">Created on {createdDay} at {createdTime}</div>
        </div>
    )
}

export default JobItemDetail;