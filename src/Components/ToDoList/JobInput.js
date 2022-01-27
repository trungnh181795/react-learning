import { useRef } from 'react';

import { useStore } from './store'
import {
    setInputTask,
    addTask
} from './store/actions';


const JobInput = () => {

    const titleInputRef = useRef();

    const [state, dispatch] = useStore();

    const inputTask = state.inputTask;

    const handleInputChange = (e) => {
        let inputValue = e.target.value;
        let inputName = e.target.name;
        dispatch(setInputTask({
            inputValue,
            inputName
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(inputTask));
        titleInputRef.current.focus();
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
                                value={inputTask.title}
                                onChange={handleInputChange}
                                ref={titleInputRef}
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
                                value={inputTask.detail}
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
                                value={inputTask.day}  
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
                                value={inputTask.time}      
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