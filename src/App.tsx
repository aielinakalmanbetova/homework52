import  {ChangeEvent, useState} from 'react';
import './App.css'
import './Task.css'

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const App = () => {
  const [task,setTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([
    {id: '1', text: 'Приготовить завтрак ', completed: false},
    {id: '2', text: 'Отвезти сына в садик ', completed: false},
    {id: '3', text: 'Поехать по делам ', completed: false},
  ]);

  const addTask = () => {
    if (task.trim() !== '') {
      const newTask: Task = {id: Date.now().toString(), text: task, completed: false};
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id ! == id);
    setTasks(updatedTasks)
  };

  const toggleTaskCompletion = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? {...task, completed: !task.completed} : task
    );
    setTasks(updatedTasks);
  }

  const penChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const penAdd = () => {
    addTask();
  };

  return (
    <>
      <h1>ToDo List</h1>
      <ul className='todos'>
        {tasks.map((task) =>(
          <li className={`task ${task.completed ? 'completed' : ''}`} key={task.id}>
            <input type='checkbox' checked={task.completed} onChange={() => toggleTaskCompletion(task.id)}/>
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>
              <img className='img' src="https://cdn-icons-png.freepik.com/512/3221/3221803.png" alt="Delete"/>
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input
        type='text'
        value={task}
        onChange={penChange}
        placeholder={'Ведите задачу'}/>
      </div>
      <button className="button" onClick={penAdd}>Add</button>
    </>
  );
};

export default App;
