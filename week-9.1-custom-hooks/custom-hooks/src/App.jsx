import { React, useEffect, useState } from 'react';
function App1() {
  return (
    <>
      <MyFunctionalBasedComponent/>
      <MyClassedBasedComponent/>
      <LifecycleEventsComponent/>
    </>
  )
}
function MyFunctionalBasedComponent() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

class MyClassedBasedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setRender(r => !r);
    }, 5000)
  }, []);

  return (
    <>
      {render ? <LifecycleEventsComponent /> : <div></div>}
    </>
  )
}

{/*Lifecycle Events*/}
function LifecycleEventsComponent() {
  useEffect(() => {
    console.error("component mounted");{/*Then this gets executed when there is a change in dependency array*/}

    return () => {
      console.log("component unmounted");{/*First this gets executed when there is a change in dependency array*/}
    };
  }, []);

  return <div>
    From inside my component
  </div>
}


export default App
