/*Lets create a simple todo app that renders 3 todos
1. Create a Todo component that accepts title, description as input
2. Initialise a state array that has 3 todos
3. Iterate over the array to render all the TODOs
4. A button in the top level App component to add a new TODO */

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import the v4 function as uuidv4
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "go to gym today"
    },
    {
      id: 2,
      title: "eat food",
      description: "eat food"
    },
    {
      id: 3,
      title: "go to class",
      description: "go to class"
    }
  ])

  function addTodo() {
    setTodos([...todos, {
      id: uuidv4(), // Use uuidv4 to generate a unique ID
      title: Math.random(),
      description: Math.random()
    }]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {
        todos.map((todo) => 
        {
           return <Todo key={todo.id} title={todo.title} description={todo.description} />
        }
        )
      }
    </div>
  )
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  )
}

export default App;
