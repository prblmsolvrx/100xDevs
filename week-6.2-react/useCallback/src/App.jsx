import React, { memo, useCallback, useState } from "react";

// App component
const App = () => {
  // State for count
  const [count, setCount] = useState(0);

  // Callback function using useCallback
  const onClick = useCallback(() => {
    console.log("child clicked");
  }, []); // Empty dependency array since there are no dependencies

  // Log when App component renders
  console.log("App component rendered");

  return (
    <div>
      {/* Child component with the onClick callback */}
      <Child onClick={onClick} />

      {/* Button to update count */}
      <button onClick={() => setCount(count + 1)}>
        Click me {count}
      </button>
    </div>
  );
};

// Memoized Child component
const Child = memo(({ onClick }) => {
  // Log when Child component renders
  console.log("child render");

  return (
    <div>
      {/* Button with onClick callback passed from props */}
      <button onClick={onClick}>Button clicked</button>
    </div>
  );
});

// Set display names for components (for better debugging)
App.displayName = "App";
Child.displayName = "Child";

export default App;
