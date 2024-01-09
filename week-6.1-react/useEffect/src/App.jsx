/*Create an app that polls the sum server
Gets the current set of TODOs
Renders it on screen*/
/*server-link- https://sum-server.100xdevs.com/todos

Solution
https://gist.github.com/hkirat/e10da900663a6f7a155c8505daae894f

*/
// Importing necessary hooks from the 'react' library
import React, { useEffect, useState } from "react";

// Defining the main App component
function App() {
  // Initializing state using the 'useState' hook to store todos
  const [todos, setTodos] = useState([]);

  // Using the 'useEffect' hook to perform side effect (data fetching) when the component mounts
  useEffect(() => {
    // Fetching data from the specified API endpoint
    fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res) => {
        // Parsing the response as JSON
        const json = await res.json();
        // Updating the 'todos' state with the fetched data
        setTodos(json.todos);
      })
  }, []) // Empty dependency array ensures the effect runs only once after the initial render

  // Rendering JSX content
  return (
    <div>
      {/* Mapping through the 'todos' array and rendering a 'Todo' component for each todo */}
      {todos.map(({ title, description }) => <Todo title={title} description={description} />)}
    </div>
  )
}

// Defining a functional component 'Todo' that receives title and description as props
function Todo({ title, description }) {
  // Rendering JSX content for a single Todo
  return <div>
    <h2>
      {title}
    </h2>
    <h5>
      {description}
    </h5>
  </div>
}

// Exporting the 'App' component as the default export of this module
export default App;
