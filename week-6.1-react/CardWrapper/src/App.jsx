import React from 'react';
import './App.css';

function App() {
  return (
    <div>
    <CardWrapper>
      Hi there
    </CardWrapper>
    <CardWrapper>
    hey
  </CardWrapper>
    </div>
  );
}

//Main thing
function CardWrapper({ children }) {
  return (
    <div style={{ border: "2px solid black" }}>
      {children}
    </div>
  );
}
//Main thing
export default App;
