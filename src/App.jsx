import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import { Taskinput } from './Components/TaskInput/TaskInput'
import { TasksList } from './Components/TasksList/TasksList'
import { useEffect, useState } from 'react'

function App() {

  

  const [tasks,setTasks] = useState(()=>{
    const savedTasks = localStorage.getItem("tasks")

    if (savedTasks){
      return JSON.parse(savedTasks)
    }
    else
      return []

  }) 

  const [newTask, setNewTask] = useState("")

   const handleInputChange = (event)=>{
    setNewTask (event.target.value)
  }

  //use Effect

  useEffect(() => {localStorage.setItem("tasks", JSON.stringify(tasks));}, [tasks]);

    const addTask = ()=>{
    if (newTask.trim() !==""){
      setTasks (t => [...t, newTask])
      setNewTask("")
    }
  }

  

    const deleteTask = (index)=>{
      setTasks (filteredTask =>filteredTask.filter(( _, i ) => i !== index))
    }

    const handleEnterPress = (event)=>{
      if (event.key == "Enter") addTask()
    }

    

  return (

    <>

    <div className='container'>

      <Header/>
      <Taskinput 
      inputChange = {handleInputChange}
      addTask = {addTask}
      newTask = {newTask}
      onKeyDown = {handleEnterPress}
      />
      <TasksList
      tasks = {tasks}
      deleteTask = {deleteTask}
      />
      <Footer/>

    </div>

    </>
  )
}

export default App
