import styles from './TasksList.module.css'

export const TasksList = ({tasks,deleteTask}) => {

  const taskItems = tasks.map((task,i) => 

        <li key={i} className={styles.taskItem}> 
          <button className={styles.button} aria-label = "Delete-Task" onClick={()=> deleteTask(i)} >❌</button> 

          <span>{task}</span>
          
          </li>


    )
 
  return (



    <div className={styles.listContainer}>
      <h2 className={styles.listHeader}>TasksList</h2>

      <ul className={styles.taskItems}>
        {taskItems} 
      </ul>
      </div>
  )
}
