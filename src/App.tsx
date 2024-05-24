import  {ChangeEvent, useState} from 'react';
import './App.css'
import './Task.css'

const App = () => {
  const [task,setTask] = useState('');
  const [todos, setTodos] = useState([
    {id: '1', text: 'Приготовить завтрак '},
    {id: '2', text: 'Отвезти сына в садик '},
    {id: '3', text: 'Поехать по делам '},
  ]);

  const addTask = (newTask: string) => {
    if (newTask.trim() !== '') {
      const newTodo = {id: Date.now().toString(), text: newTask};
      setTodos([...todos, newTodo]);
      setTask('');
    }
  };

  const deleteTask = (id: string) => {
    const updatedTodos = todos.filter(todo => todo.id ! == id);
    setTodos(updatedTodos)
  };

  const penChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const penAdd = () => {
    addTask(task);
  }

  return (
    <>
      <h1>ToDo List</h1>
      <ul className='todos'>
        {todos.map(todo =>(
          <li className='task' key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => deleteTask(todo.id)}>
              <img src='https://cdn-icons-png.freepik.com/512/3221/3221803.png' alt='Delete'/>
            </button>
          </li>
        ))}
      </ul>
      <input type='text' value={task} onChange={penChange} placeholder={'Ведите задачу'}/>
      <button className='button' onClick={penAdd}>Add</button>
    </>
  );
};

export default App;
