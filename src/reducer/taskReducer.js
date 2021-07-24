import {ADD_TASK,REMOVE_TASK} from "../action/const";

const initialeState = [{id:1,task:"shakloutt ihib innik"}]
export const addTaskReducer = (state=initialeState,action) => {
    console.log(action.type);
    switch(action.type){
        case ADD_TASK : 
            return [...state,action.payload];
        case REMOVE_TASK : 
            console.log("hello");
            const tmpArray=[];
            if(state.length === 0) return [];
            for(let i =0;i<state.length;i++){
                if(state[i].id !== action.payload){
                    tmpArray.push(state[i])
                }
            }
            console.log(tmpArray);
            return tmpArray;
        default : 
            return [...state];
    }
}


