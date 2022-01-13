import React, {useState, useEffect} from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date());
  
    useEffect(() => {
      //Always called after rendered
      document.title = 'Clock'

      const timerID = setInterval(
        () => tick(),
        1000
      )
      
      return () => {
        //Before next effect or unmount
        console.log(`${timerID} is removed`)
        clearInterval(timerID)
      }
    }, [])
  
    const tick = () => {
      setDate(new Date());
    }
  
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {date.toLocaleTimeString()}.</h2>
      </div>
      );
  
  }

export default Clock;