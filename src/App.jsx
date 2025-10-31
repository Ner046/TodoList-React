import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Taskinput } from './Components/TaskInput/TaskInput';
import { TasksList } from './Components/TasksList/TasksList';
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks(t => [
        ...t, { id: crypto.randomUUID(), text: newTask.trim()}
      ]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(t => t.filter(task => task.id !== id));
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") addTask();
  };

  return (
    <div className='container'>
      <Header />
      <Taskinput
        inputChange={handleInputChange}
        addTask={addTask}
        newTask={newTask}
        onKeyDown={handleEnterPress}
      />
      <TasksList
        tasks={tasks}
        deleteTask={deleteTask}
      />
      <Footer />
    </div>
  );
}

export default App;