import React, {useState} from "react";

const JobItemDetail = (props) => {
    const {detail, createdAt,...keys} = props.job;

    console.log('detail',detail)
    console.log('createdAt', createdAt)

    return (
        <div className="JobItem-Detail">
            <p>{detail}</p>
            <p>{createdAt}</p>
        </div>
    )
}

export default JobItemDetail;