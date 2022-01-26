import React, {useState, useEffect} from "react";
import {Routes, Route} from 'react-router-dom';

import { StoreProvider } from "../../ToDoList/store";
import Calculator from '../../Calculator';
import ToDoList from '../../ToDoList';
import Clock from '../../Clock';
import UseEffect from '../../UseEffect';
import ToDoAppReducer from '../../ToDoAppReducer';
import './Content.scss';


const Content = () => {



    return (
        <StoreProvider> 
            <div className='Content'>
                <Routes>
                    <Route path="/" element={<Clock />} />
                    <Route path="/clock" element={<Clock />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/todolist" element={<ToDoList />} />
                    <Route path="/use-effect" element={<UseEffect />} />
                    <Route path="/reducer" element={<ToDoAppReducer />} />
                </Routes>
            </div>
        </StoreProvider>
    )
}

export default Content;