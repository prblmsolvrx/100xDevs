//Update the last app to allow user to update the title of the first Header with a new title
// Importing necessary React features (memo for memoization, useState for state management)
import React, { memo, useState } from "react";

// Defining the main App component
function App() {
  // Initializing state using the 'useState' hook to store the first title
  const [firstTitle, setFirstTitle] = useState("my name is harkirat");

  // Function to change the first title when the button is clicked
  function changeTitle() {
    const newRandomTitle = "My name is " + Math.random();
    console.log("New random title:", newRandomTitle); // Debugging: Log the new title
    setFirstTitle(newRandomTitle); // Updating the first title using Math.random()
  }

  // Rendering JSX content
  return (
    <div>
      {/* Button triggering the 'changeTitle' function on click */}
      <button onClick={changeTitle}>Click me to change the title</button>
      
      {/* Rendering the Header component with the first title */}
      <Header title={firstTitle} />
      
      {/* Additional instances of the Header component with different titles */}
      <br />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
    </div>
  );
}

// Defining a memoized functional component 'Header' that receives 'title' as a prop
const Header = memo(function ({ title }) {
  // Rendering JSX content for the Header
  return <div>
    {title}
  </div>
})

// Exporting the 'App' component as the default export of this module
export default App;
