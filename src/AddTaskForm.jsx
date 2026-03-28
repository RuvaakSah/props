import { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      addTask(inputValue); // Ejecutamos la función que recibimos por props
      setInputValue("");    // Limpiamos el input
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        value={inputValue} 
        placeholder="Escribe una tarea..." 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddTaskForm;