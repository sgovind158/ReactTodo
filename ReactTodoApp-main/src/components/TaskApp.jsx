import React ,{useState} from "react";

import styles from "./taskApp.module.css";
import TaskHeader from  "../components/TaskHeader/TaskHeader"
import AddTask from "../components/AddTask/AddTask"
import Tasks from "../components/Tasks/Tasks"
import {v4 as uuidv4} from "uuid";
import taskData from "../data/tasks.json"
import ShowCompleteTask from "./ShowCompleteTask";

const TaskApp = () => {
  const [tasks,setTasks] = useState(taskData)
  
  const addTask = (newTask)=>{
   
      let isTaskPresent = tasks.some((task)=> task.text === newTask)
      if(newTask && !isTaskPresent){
        const newTaskObj ={
          id: uuidv4(),
          text:newTask,
          done : false,
          count : 1,

        }
        console.log(newTaskObj)
        setTasks([...tasks,newTaskObj])
      }
  }
  
  

const handleUpdateTask = (updateTask)=>{
  let newTask = tasks.reduce((acc,curr)=>{
    if(curr.id === updateTask.id){
      acc.push(updateTask)
    }else{
      acc.push(curr)
    }
    return acc
  },[])
  
   setTasks([...newTask])
}

const handleRemoveTask = (taskId)=>{
  let newTasks  = tasks.filter((task)=>task.id !== taskId) 
  console.log(newTasks,"delete Task")
  setTasks(newTasks)
}

  return (
   
    <div data-cy="task-app" className={styles.main} >
    <div className={styles.taskApp}>
    <TaskHeader tasks = {tasks} />

   <AddTask addTask={addTask} />

    <Tasks  tasks = {tasks} handleUpdateTask = {handleUpdateTask} handleRemoveTask = {handleRemoveTask} />
   
    </div>
    </div>
    
  );
};

export default TaskApp;
