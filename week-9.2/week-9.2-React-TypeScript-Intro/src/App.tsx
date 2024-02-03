//Assignment #2 - Create a React component that takes todos as an input and renders them

import React from 'react';
import TodoList from './components/TodoList.jsx';
const App: React.FC = () => {
  const todos = [
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Finish homework', completed: true },
    { id: 3, text: 'Read a book', completed: false },
  ];

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;

