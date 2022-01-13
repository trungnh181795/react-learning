import React, {useState} from "react";

const JobInput = (props) => {

    const [inputJob, setInputJob] = useState({
        title: '',
        detail: '',
        day: '',
        time: '',
        isChecked: false,
        createdAt: {
            createdDay: '',
            createdTime: ''
        }
    });


    // const [title, setTitle] = useState('');
    // const [detail, setDetail] = useState('');
    // const [day, setDay] = useState('');
    // const [time, setTime] = useState('');


    const handleInputChange = (e) => {
        let inputValue = e.target.value;
        let inputName = e.target.name;
        setInputJob((prev) => {
            let currentInputJob = {...prev};
            currentInputJob[inputName] = inputValue;
            return currentInputJob
        })
    }

    // const changeTitleHandler = (e) => {
    //     setTitle(e.target.value)
    // }
    // const changeDetailHandler = (e) => {
    //     setDetail(e.target.value)
    // }
    // const changeDayHandler = (e) => {
    //     setDay(e.target.value)
    // }
    // const changeTimeHandler = (e) => {
    //     setTime(e.target.value)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        let {createdAt: {createdDay, createdTime},...keys} = inputJob;
        createdDay = new Date().toDateString();
        createdTime = new Date().toLocaleDateString();
        props.submitNewJob({...keys, createdAt: {createdDay, createdTime}})


        // props.submitNewJob({title, detail, day, time, createdAt: {
        //     createdDay: new Date().toDateString(),
        //     createdTime: new Date().toLocaleDateString()
        // }})
        
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
                    // value={title}
                    onChange={handleInputChange}
                    // onChange={changeTitleHandler}
                /><br/>
                <label htmlFor="Detail">Detail</label>
                <input 
                    type="text" 
                    id="Detail" 
                    name="detail" 
                    // value={detail}
                    // onChange={handleInputChange}
                    // onChange={changeDetailHandler}
                /><br/>
                <label htmlFor="Day">Day</label>
                <input 
                    type="date" 
                    id="Day" 
                    name="day"  
                    value={inputJob.day}
                    // value={day}     
                    onChange={handleInputChange}
                    // onChange={changeDayHandler}        
                /><br/>
                <label htmlFor="Time">Time</label>
                <input 
                    type="time" 
                    id="Time" 
                    name="time"  
                    value={inputJob.time}
                    // value={time}      
                    onChange={handleInputChange}
                    // onChange={changeTimeHandler}
                /><br/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )   
}

export default JobInput;