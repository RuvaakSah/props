const Task = ({ task, deleteTask, toggleComplete }) => {
  return (
    <li style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      marginBottom: '10px',
      listStyle: 'none' 
    }}>
      {/* Aplicamos el estilo en línea con un ternario para tachar el texto */}
      <span 
        onClick={() => toggleComplete(task.id)}
        style={{ 
          textDecoration: task.completed ? 'line-through' : 'none', 
          cursor: 'pointer' 
        }}
      >
        {task.text}
      </span>
      
      {/* Botón para borrar la tarea */}
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </li>
  );
};

export default Task;