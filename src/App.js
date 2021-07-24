import './App.css';
import {useState,useEffect} from "react";
import {connect} from "react-redux";
import {addTask,removeTask} from "./action";
import React from 'react';

const Task = ({id=0,task="",absorbId}) => {
  return (
    <>
      <div style={{display:"flex"}}>
        <div>{task}</div>
        <button onClick={()=> absorbId(id)}>Delete</button>
      </div>
    </>
  );
}

function App({tasks,addTask,removeTask}) {
  const [tsks,setTask] = useState([...tasks]);
  const [newtsk,setNewTask] = useState("");
  useEffect(() => {
    setTask(tasks);
    
  }, [tasks])
  const handleSumbit = (e) => {
    let tmpObj = {};
    if(newtsk === "") {
      alert("EMPTY");
      return ;
    }
    tmpObj = {
      id : Math.random(),
      task : newtsk
    };
    setNewTask("");
    document.getElementById("input").value = "";
    addTask(tmpObj);
  }
  return (
    <div className="App">
      {/* add component */}
      <div>
        <input id="input" type="text" onChange={(e)=>{setNewTask(e.target.value)}} />
        <button onClick={handleSumbit}>Add Task</button>
      </div>

      {/* render list */}
      {tsks.map((task,i)=>{
        return <Task id={task.id} key={i} task={task.task} absorbId={(id)=> removeTask(id)} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {tasks : state.task};
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    addTask: (payload) => dispatch(addTask(payload)),
    removeTask: (payload) => dispatch(removeTask(payload))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
