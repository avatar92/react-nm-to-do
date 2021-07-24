import {addTaskReducer as task} from "./taskReducer";
import {combineReducers} from "redux";


const reducers = combineReducers({task});

export default reducers;
