import React, { useState } from "react";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={count}>
      <div>
        <Count />
      </div>
    </CountContext.Provider>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  // Access count from context
  const count = React.useContext(CountContext);

  return <div>{count}</div>;
}

function Buttons() {
  // Access setCount from context
  const setCount = React.useContext(CountContext);

  return (
    <div>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
