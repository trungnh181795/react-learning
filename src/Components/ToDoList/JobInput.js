import React, {useState} from "react";

const JobInput = (props) => {

    const [inputJob, setInputJob] = useState({
        title: '',
        detail: '',
        day: '',
        time: '',
        isChecked: false,
        createdAt: ''
    });

    console.log(inputJob)

    const handleInputChange = (e) => {
        let inputValue = e.target.value;
        let inputName = e.target.name;
        setInputJob((prev) => {
            let currentInputJob = {...prev};
            currentInputJob[inputName] = inputValue;
            return currentInputJob
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputJob((prev) => {
            let currentInputJob = {...prev};
            console.log('currentInputJob',currentInputJob)
            currentInputJob.createdAt = new Date().toString();

            return currentInputJob
        })
        props.submitNewJob(inputJob)
    }

    return (
        <div className="JobInput">
            <form className="job-input-form" onSubmit={handleSubmit}>
                <label htmlFor="Title">Title</label>
                <input 
                    type="text" 
                    id="Title" 
                    name="title" 
                    value={inputJob.title}
                    onChange={handleInputChange}
                /><br/>
                <label htmlFor="Detail">Detail</label>
                <input 
                    type="text" 
                    id="Detail" 
                    name="detail" 
                    onChange={handleInputChange}
                /><br/>
                <label htmlFor="Day">Day</label>
                <input 
                    type="date" 
                    id="Day" 
                    name="day"       
                    onChange={handleInputChange}        
                /><br/>
                <label htmlFor="Time">Time</label>
                <input 
                    type="time" 
                    id="Time" 
                    name="time"        
                    onChange={handleInputChange}
                /><br/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )   
}

export default JobInput;