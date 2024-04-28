import { useEffect, useState } from 'react';

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [latestMessages,setLatestMessages]=useState("");
  useEffect(()=>{
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => {
      console.log('Connection established');
      socket.send('Hello Server!');
    }
    socket.onmessage = (message) => {
      console.log('Message received:', message.data);
      setLatestMessages(message.data)
    }
    setSocket(socket);
    return () => socket.close();
   },[])

    if(!socket){
      return (
        <>
          Connecting to Socket Server...
        </>
      )
    }

    return (
      <div>
        <label htmlFor="input">Enter Text</label>
        <input type="text" id="input" />
        <button onClick={() => { socket.send("Hello World") }}>Send</button>
        {latestMessages}
      </div>
    );
}

export default App
