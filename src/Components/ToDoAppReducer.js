import { useReducer, useRef, useState } from "react";

const initState = {
    inputTask: '',
    tasks: []
}

const SET_INPUT_TASK = 'set_input_task';
const ADD_TASK = 'add_task';
const DELETE_TASK = 'delete_task';

const setInputTask = (payload) => {
    return {
        type: SET_INPUT_TASK,
        payload: payload
    }
}

const addTask = (payload) => {
    return {
        type: ADD_TASK,
        payload: payload
    }
}

const deleteTask = (payload) => {
    console.log('payload', payload)
    return {
        type: DELETE_TASK,
        payload: payload
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case SET_INPUT_TASK:
            return {
                ...state,
                inputTask: action.payload
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case DELETE_TASK:
            const newTasks = [...state.tasks];
            newTasks.splice(action.payload, 1);

            return {
                ...state,
                tasks: newTasks
            }
        default:
            throw new Error('invalid action')
    }
}

const ToDoAppReducer = () => {

    const [state, dispatch] = useReducer(reducer, initState);

    const {inputTask, tasks} = state;

    const inputRef = useRef();

    const handleSubmit = () => {
        dispatch(addTask(inputTask));
        dispatch(setInputTask(''));
        inputRef.current.focus();
    }

    const handleDelete = (index) => {
        console.log(index)
        dispatch(deleteTask(index));
    }

    return (
        <div className="ToDoAppReducer">
            <input 
                className="task-input" 
                ref={inputRef}
                value={inputTask}
                onChange={(e) => dispatch(setInputTask(e.target.value))}
            />
            <button
                className="submit-button"
                onClick={handleSubmit}
            >
                Add
            </button>
            <ul className="Tasks-list">
                {tasks.map((task, index) => 
                    <li className="Tasks-item" key={index}>
                        {task}
                        <button
                            className="delete-icon"
                            onClick={() => handleDelete(index)}
                        >
                            Delete
                        </button> 
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ToDoAppReducer;