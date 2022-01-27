import React, {useState, useEffect, useContext} from 'react';
import { createContext } from 'react';

import { StoreProvider } from './store';
import UndoneJobsList from './UndoneJobsList';
import DoneJobsList from './DoneJobsList';
import JobInput from './JobInput';

import './ToDoList.scss';

const ToDoList = () => {

    useEffect(() => {
        document.title = 'To-do List';
    })

    console.log('rerendered')

    return (
        <StoreProvider>
            <div className='ToDoList'>
                <JobInput />
                <UndoneJobsList />
                <DoneJobsList />
            </div>
        </StoreProvider>
    )
}

export default ToDoList;