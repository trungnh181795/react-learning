import React, {useState} from "react";


const JobInput = (props) => {

    const [inputJob, setInputJob] = useState({
        id: '',
        title: '',
        detail: '',
        day: '',
        time: '',
        isDone: false,
        createdAt: {
            createdDay: '',
            createdTime: ''
        }
    });

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
        let {id, createdAt: {createdDay, createdTime},...keys} = inputJob;
        createdDay = new Date().toLocaleDateString();
        createdTime = new Date().toLocaleTimeString();
        id = Math.random().toString();

        props.submitNewJob({id, ...keys, createdAt: {createdDay, createdTime}})
        setInputJob({
            id: '',
            title: '',
            detail: '',
            day: '',
            time: '',
            isDone: false,
            createdAt: {
                createdDay: '',
                createdTime: ''
            }
        })
    }

    return (
        <div className="JobInput mb-2">
            <div className="container-fluid">
                <div className="job-input-header">Insert a new job</div>
                <form className="job-input-form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-12">
                            <label 
                                className="form-label custom-label"
                                htmlFor="Title"
                            >
                                Title
                            </label>
                            <input 
                                className="form-control"
                                type="text" 
                                id="Title" 
                                name="title" 
                                value={inputJob.title}
                                onChange={handleInputChange}
                                required
                            /><br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label 
                                className="form-label custom-label"
                                htmlFor="Detail"                              
                            >
                                Detail
                            </label>
                            <textarea 
                                className="form-control"
                                type="text" 
                                id="Detail" 
                                name="detail" 
                                value={inputJob.detail}
                                style={{resize: 'none'}}
                                onChange={handleInputChange} 
                            /><br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6"> 
                            <label 
                                className="form-label custom-label"
                                htmlFor="Day"
                            >
                                Remind me on a day
                            </label>
                            <input 
                                className="form-control"
                                type="date" 
                                id="Day" 
                                name="day"  
                                value={inputJob.day}  
                                onChange={handleInputChange}       
                            /><br/>
                        </div>
                        <div className="col-6">
                            <label 
                                className="form-label custom-label"
                                htmlFor="Time"
                            >
                                Alarm
                            </label>
                            <input 
                                className="form-control"
                                type="time" 
                                id="Time" 
                                name="time"  
                                value={inputJob.time}      
                                onChange={handleInputChange}
                            /><br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-grid">
                            <button 
                                className="btn btn-primary"
                                type="submit"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </div>               
        </div>
    )   
}

export default JobInput;