import './App.css'
import { useState } from 'react';
import Task from './Task.jsx';         
import AddTaskForm from './AddTaskForm.jsx'; 

const App = () => {
  // Estado inicial proporcionado por el ejercicio
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  // Función para añadir tareas
  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length + 1, // Contabilizamos elementos y sumamos 1
      text: taskText,       // Valor que viene del input de AddTaskForm
      completed: false      // Por defecto en false
    };
    // Mantenemos las anteriores y añadimos la nueva
    setTasks([...tasks, newTask]);
  };

  // Función para eliminar tareas (usando filter)
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Función para cambiar el estado de completado (tachar/destachar)
  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Lista de Tareas</h1>
      
      {/* Pasamos la función addTask como prop */}
      <AddTaskForm addTask={addTask} />

      <ul style={{ padding: 0 }}>
        {tasks.map(task => (
          /* Pasamos id como key, la tarea, y las funciones de borrado y completado */
          <Task 
            key={task.id} 
            task={task} 
            deleteTask={deleteTask} 
            toggleComplete={toggleComplete} 
          />
        ))}
      </ul>
    </div>
  );
};

export default App;