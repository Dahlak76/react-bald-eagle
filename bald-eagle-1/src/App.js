import './App.css';

const todoList = [
  {
    id: 1,
    title: 'study',
  },
  {
    id: 2,
    title: 'sleep',
  },
  {
    id: 3,
    title: 'eat',
  },
];

function App() {
  return (
    <div>
      <hid>to do list</hid>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li> 
         ))}                             
      </ul>
    </div>
  );
}

export default App;
