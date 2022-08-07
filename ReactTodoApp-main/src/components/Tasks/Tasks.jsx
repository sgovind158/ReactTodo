import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task"
import emptyIcon from "../../assets/empty.svg"

const Tasks = ({tasks,handleUpdateTask,handleRemoveTask}) => {
  // console.log(tasks,"my arr")
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
        
        {tasks.length >0 ? (<ul data-cy="tasks" className={`${styles.tasks}`}>
        {/* Task List */}
     {tasks.map((task)=>(
         <Task key={task.id}  task = {task} handleUpdateTask={handleUpdateTask} handleRemoveTask={handleRemoveTask}/>
     ))}
     </ul>):(
      <div data-cy="tasks-empty" className="styles.empty">
        {/* Show when No Tasks are present */}
        <img src={emptyIcon} alt="empty data" />
        
      
      <div>
        <b>Empty List</b>
      </div>
      <div> Please Add new task</div>
      </div>)}   

    </>
  );
};

export default Tasks;
