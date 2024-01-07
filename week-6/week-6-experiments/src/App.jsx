//Update the last app to allow user to update the title of the first Header with a new title
import React, { memo, useState } from "react";

function App() {
  const [firstTitle, setFirstTitle] = useState("my name is harkirat");

  function changeTitle() {
    setFirstTitle("My name is " + Math.random());//updating fn()
  }

  return (
    <div>
      <button onClick={changeTitle}>Click me to change the title</button>
      <Header title={firstTitle} />
      <br />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
    </div>
  );
}

const Header = memo(function ({title}) {
  return <div>
    {title}
  </div>
})

export default App;
