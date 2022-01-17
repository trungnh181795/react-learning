import React, {useState, useEffect} from "react";
import {Routes, Route} from 'react-router-dom';

import Calculator from '../../Calculator';
import ToDoList from '../../ToDoList';
import Clock from '../../Clock';
import UseEffect from '../../UseEffect';
import './Content.scss';


const Content = () => {



    return (
        <div className='Content'>
            <Routes>
                <Route path="/" element={<Clock />} />
                <Route path="/clock" element={<Clock />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/todolist" element={<ToDoList />} />
                <Route path="/use-effect" element={<UseEffect />} />
            </Routes>
      </div>
    )
}

export default Content;