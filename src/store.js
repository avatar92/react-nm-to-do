import {createStore as store} from "redux";
import reducers from "./reducer";

const myStore = store(reducers);


export default myStore;