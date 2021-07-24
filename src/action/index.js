import {ADD_TASK,REMOVE_TASK} from "./const";


export const addTask = (payload={}) => {
    return {type : ADD_TASK,payload}
};


export const removeTask = (id=0) => {
    return {type : REMOVE_TASK,payload : id};
} 