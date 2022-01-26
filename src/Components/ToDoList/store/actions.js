import { 
    SET_INPUT_TASK, 
    ADD_TASK, 
    DELETE_TASK, 
    CHANGE_TASK_STATUS 
} from './constants'

export const setInputTask = payload => {
    return {
        type: SET_INPUT_TASK,
        payload: payload
    }
}

export const addTask = payload => {
    return {
        type: ADD_TASK,
        payload: payload
    }
}

export const deleteTask = payload => {
    return {
        type: DELETE_TASK,
        payload: payload
    }
}

export const changeTaskStatus = payload => {
    return {
        type: CHANGE_TASK_STATUS,
        payload: payload
    }
}