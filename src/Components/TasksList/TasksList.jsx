import styles from './TasksList.module.css';

export const TasksList = ({ tasks, deleteTask }) => {
  const taskItems = tasks.map((task) => 
    <li key={task.id} className={styles.taskItem}>
      <button
        className={styles.button}
        aria-label="Delete-Task"
        onClick={() => deleteTask(task.id)}
      >
        ❌
      </button>
      <span>{task.text}</span>
    </li>
  );

  return (
    <div className={styles.listContainer}>
      <h2 className={styles.listHeader}>TasksList</h2>
      <ul className={styles.taskItems}>
        {taskItems}
      </ul>
    </div>
  );
};