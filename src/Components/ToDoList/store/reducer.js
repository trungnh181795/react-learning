import {
    SET_INPUT_TASK,
    ADD_TASK,
    DELETE_TASK,
    CHANGE_TASK_STATUS
} from './constants';

const localTasks = localStorage.getItem('toDoList');


const initState = {
    tasks: JSON.parse(localTasks) ?? [] ,
    inputTask: {
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
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_INPUT_TASK: 
            let input = {...state.inputTask};
            input[action.payload.inputName] = action.payload.inputValue;

            return {
                ...state,
                inputTask: input
            }
        case ADD_TASK: 
            let {id, createdAt: {createdDay, createdTime},...keys} = action.payload;
            createdDay = new Date().toLocaleDateString();
            createdTime = new Date().toLocaleTimeString();
            id = Math.random().toString();
            let newTasks = [
                ...state.tasks,
                {id, ...keys, createdAt: {createdDay, createdTime}}
            ]

            localStorage.setItem('toDoList', JSON.stringify(newTasks));
            
            return {
                ...state,
                tasks: newTasks
            }
        case DELETE_TASK:
            let handledDeleteTasks = [...state.tasks];
            handledDeleteTasks.splice(action.payload, 1);
            localStorage.setItem('toDoList', JSON.stringify(handledDeleteTasks));
            return {
                ...state,
                tasks: handledDeleteTasks
            }
        case CHANGE_TASK_STATUS:
            let updatedTasks = [...state.tasks];
            let targetedTask = updatedTasks.find((task) => task.id === action.payload.taskId);
            targetedTask.isDone = action.payload.isChecked;
            localStorage.setItem('toDoList', JSON.stringify(updatedTasks));

            return {
                ...state,
                tasks: updatedTasks
            }
        default:
            throw new Error('invalid action')
    }
}

export { initState };
export default reducer;

