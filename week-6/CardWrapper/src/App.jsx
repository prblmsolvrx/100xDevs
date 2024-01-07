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

function CardWrapper({ children }) {
  return (
    <div style={{ border: "2px solid black" }}>
      {children}
    </div>
  );
}

export default App;
