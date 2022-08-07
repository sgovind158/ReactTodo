import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"
import removeIcon from "../../assets/remove.svg"
import ShowCompleteTask from "../ShowCompleteTask";

const Task = ({task,handleUpdateTask,handleRemoveTask}) => {
  // NOTE: do not delete `data-cy` key value pair
  const toggleTaskStatus = ()=>{
    console.log(task)
    let toggleTask = {
      ...task,
      done: !task.done
    }
    // console.log(toggleTask)
    handleUpdateTask(toggleTask)
  }


  const updateCount = (newCount)=>{
    if(newCount>0){
      let updatedCountTask ={
        ...task,
        count: newCount,
      }
      console.log(updatedCountTask)
      handleUpdateTask(updatedCountTask)
    }
  }

  return (
    <>
    <div>
    <li data-cy="task" className={styles.task} >
      
      <input type="checkbox" data-cy="task-checkbox" checked = {task.done} onChange ={toggleTaskStatus}  style={{ textDecorationLine: 'line-through' }} />
      <div data-cy="task-text"  style={{
      textDecoration: task.done ? 'line-through' : 'none'
    }}>{task.text}</div>
      {/* Counter here */}
      <Counter count = {task.count} updateCount = {updateCount}/>
      <button data-cy="task-remove-button" className={styles.removeButton} ><img src={removeIcon} alt="remove button text" onClick={()=>handleRemoveTask(task.id)} /></button>
    </li>
    </div>
    
    {/* <ShowCompleteTask task = {task} handleUpdateTask={handleUpdateTask} handleRemoveTask={handleRemoveTask}/> */}
   
    </>
  );
};

export default Task;
