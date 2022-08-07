import React from 'react'
import styles from "../components/Task/task.module.css"
import Counter from './Counter/Counter'
import removeIcon from "../assets/remove.svg"

const ShowCompleteTask = ({task ,handleRemoveTask,handleUpdateTask}) => {

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
    <div>
        <ul>
        <li data-cy="task" className={styles.task} >
      
      <input type="checkbox" data-cy="task-checkbox" checked = {task.done} onChange ={toggleTaskStatus}  style={{ textDecorationLine: 'line-through' }} />
      <div data-cy="task-text"  style={{
      textDecoration: task.done ? 'line-through' : 'none'
    }}>{task.text}</div>
      {/* Counter here */}
      <Counter count = {task.count} updateCount = {updateCount}/>
      <button data-cy="task-remove-button" className={styles.removeButton} ><img src={removeIcon} alt="remove button text" onClick={()=>handleRemoveTask(task.id)} /></button>
    </li>
        </ul>
      
    </div>
  )
}

export default ShowCompleteTask
