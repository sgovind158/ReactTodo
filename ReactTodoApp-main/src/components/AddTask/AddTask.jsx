import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";

const AddTask = ({addTask}) => {
  const  [newTask,setNewTask] = useState("")
 
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div  className={styles.addTask}>
      <input data-cy="add-task-input" type="text" 
      value={newTask} 
      onChange = {({target})=>setNewTask(target.value)} />
      <button data-cy="add-task-button"  onClick={()=>{
addTask(newTask)
setNewTask("")
      }}  >Add</button>
    </div>
  );
};

export default AddTask;
