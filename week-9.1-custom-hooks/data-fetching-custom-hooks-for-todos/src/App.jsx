// Importing necessary dependencies from React and Axios
import axios from 'axios';
import { useEffect, useState } from 'react';

// Custom hook to fetch todos from the backend every n seconds
function useTodos(n) {
  // State to store the todos and loading status
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Effect hook to run code after component mount and handle cleanup on unmount
  useEffect(() => {
    // Setting up an interval to fetch todos every n seconds
    const intervalId = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          // Updating todos state with data from the backend response
          setTodos(res.data.todos);
          // Setting loading to false when data is successfully fetched
          setLoading(false);
        })
    }, n * 1000);

    // Initial fetch of todos when the component mounts
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        // Updating todos state with data from the backend response
        setTodos(res.data.todos);
        // Setting loading to false when data is successfully fetched
        setLoading(false);
      });

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    }
  }, [n]); // Effect dependency to re-run the effect when n changes

  // Returning the todos and loading state for use in the component
  return { todos, loading };
}

// Main App component
function App() {
  // Using the custom hook useTodos with an interval of 10 seconds
  const { todos, loading } = useTodos(10);

  // Rendering loading message if data is still loading
  if (loading) {
    return <div> loading... </div>;
  }

  // Rendering the Track component for each todo
  return (
    <>
      {todos.map(todo => <Track key={todo.id} todo={todo} />)}
    </>
  );
}

// Track component to display individual todo details
function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

// Exporting the main App component
export default App;
