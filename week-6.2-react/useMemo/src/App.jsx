/*If I ask you to create an app that does two things -  
1. Increases a counter by 1 
2. Lets user put a value in an input box (n) and you need 
to show sum from 1-n 
One restriction - everything needs to be inside App
*/


// Importing the useState and useMemo hooks from the "react" library
import { useMemo, useState } from "react";
// Defining a functional component named App
function App() {
  // Initializing state variables: counter with initial value 0 and inputValue with initial value 1
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  // Using useMemo to calculate the sum from 1 to n based on the inputValue
  const sum = useMemo(() => {
    // Initializing a variable 'count' to store the sum
    let count = 0;
    
    // Looping from 1 to inputValue and accumulating the sum
    for (let i = 1; i <= inputValue; i++) {
      count = count + i;
    }

    // Returning the calculated sum
    return count;
  }, [inputValue]); // Dependency array: recalculates only when 'inputValue' changes

  // Rendering the component
  return (
    <div>
      {/* Input field for user to set the 'inputValue' */}
      <input
        onChange={(e) => {
          // Updating 'inputValue' when the input changes
          setInputValue(e.target.value);
        }}
        placeholder={"Find sum from 1 to n"}
      />
      <br />
      {/* Displaying the sum from 1 to 'inputValue' */}
      Sum from 1 to {inputValue} is {sum}
      <br />
      {/* Button to increment the 'counter' state */}
      <button
        onClick={() => {
          // Incrementing 'counter' when the button is clicked
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
/*useMemo:

useMemo is a hook used for memoization in functional components.
It is used to memoize the result of a computation so that the computation is only re-executed if the dependencies (specified in the dependency array) have changed.
It is often used to optimize performance by avoiding unnecessary recalculations.
useMemo takes a function and an array of dependencies and returns the memoized value.*/