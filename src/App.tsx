import React, {useState} from 'react';
import './App.css'

const App = () => {
  const [task,setTask] = useState('');
  const [todos, setTodos] = useState([
    {id: '1', text: 'Приготовить завтрак'},
    {id: '2', text: 'Отвезти сына в садик'},
    {id: '3', text: 'Поехать по делам'},
  ]);

  const addTask = () => {
    if (task.trim() !== '') {
      const newTodo = {id: Date.now().toString(), text: task};
      setTodos([...todos, newTodo]);
      setTask('');
    }
  };

  const deleteTask = (id) => {
    const updatedTodos = todos.filter(todo => todo.id ! == id);
    setTodos(updatedTodos)
  };

  return (
    <>
      <h1>TodoList</h1>
      <ul className='todos'>
        {todos.map(todo =>(
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTask(todo.id)}>Удалить</button>
          </li>
          ))}
      </ul>
      <input type='text' value={task} onChange={(e) => setTask(e.target.value)} placeholder={'Ведите задачу'}/>
      <button className='button' onClick={addTask}>Add</button>
    </>
  );
};

export default App;
