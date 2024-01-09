/*
Write a component that takes a todo id as an input 
And fetches the data for that todo from the given endpoint 
And then renders it 
How would the dependency array change?
https://sum-server.100xdevs.com/todo?id=1
Solution 
https://gist.github.com/hkirat/178abff7b3bc80af5878be7b9a3b7d69

*/
// Importing necessary hooks and axios from the 'react' and 'axios' libraries
/*
Axios is a popular JavaScript library used for making HTTP requests in both
browsers and Node.js environments. It provides a simple and consistent API,
making it easier to perform asynchronous operations, such as data fetching from a server.*/
import axios from "axios";
import { useEffect, useState } from "react";

// Defining the main App component
function App() {
  // Rendering a Todo component with a specific id (in this case, id=1)
  const [selectedId,setselectedId]=useState(1);
  return (
    <div>
      <button onClick={function(){
        setselectedId(1)
      }}>1</button>
      <button onClick={function(){
        setselectedId(2)
      }}>2</button>
      <button onClick={function(){
        setselectedId(3)
      }}>3</button>
      <button onClick={function(){
        setselectedId(4)
      }}>4</button>
     <Todo id={selectedId}></Todo>
      <Todo id={1}></Todo>
    </div>
  );
}

// Todo component definition with prop validation
function Todo({ id }) {
  // State to store the todo data
  const [todo, setTodo] = useState([]);

  // useEffect hook to fetch todo data when the component mounts or 'id' changes
  useEffect(() => {
    // Making an asynchronous GET request to the specified endpoint with the given id
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then((response) => {
        // Updating the state with the fetched todo data
        setTodo(response.data.todo);
      })
      .catch((error) => {
        console.error("Error fetching todo data:", error);
      });
  }, [id]); // Adding 'id' to the dependency array to re-run the effect when 'id' changes

  // Rendering the fetched todo data
  return (
    <div>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}

// Exporting the 'App' component as the default export of this module
export default App;
