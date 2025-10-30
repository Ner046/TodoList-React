import styles from './TaskInput.module.css'

export const Taskinput = ({addTask,inputChange, newTask, onKeyDown}) => {
  return (
    <section className= {styles.section}>

      <h2 className={styles.enterTask}>Enter the task...</h2>
      <div className= {styles.flex}>
        <input type="text" id="tname" placeholder="Task..." value={newTask} className={styles.textInput} onChange={inputChange} onKeyDown={onKeyDown}/>
        <button onClick={addTask} className={styles.button}>➡</button>
      </div>
      </section>
  )
}
