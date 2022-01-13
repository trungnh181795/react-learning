import React, {useState} from "react";


const courses = [
    'HTML',
    'CSS',
    'JS'
]
const TwoWayBinding = () => {

    const handleSubmit = () => {

    }

    const radioList = (
        courses.map((course, index) => 
            <li key={index}>
                <input
                    type='checkbox'
                />
                {course}
            </li>
        )

    )


    return (
        <div className="TwoWayBinding">
            {radioList}
        </div>
    )
}

export default TwoWayBinding;