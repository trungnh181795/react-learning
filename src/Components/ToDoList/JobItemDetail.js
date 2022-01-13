import React, {useState} from "react";

const JobItemDetail = (props) => {
    const {detail, createdAt: {createdDay, createdTime},...keys} = props.job;

    return (
        <div className="JobItem-Detail">
            <p>{detail}</p>
            <p>{createdDay}</p>
            <p>{createdTime}</p>
        </div>
    )
}

export default JobItemDetail;