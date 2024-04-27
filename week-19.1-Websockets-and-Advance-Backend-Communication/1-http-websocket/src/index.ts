//websocket code using http
// Importing the required modules: 'http' for creating an HTTP server and 'ws' for WebSocket functionality

import http from 'http';
import WebSocket, { WebSocketServer } from 'ws';
// Creating an HTTP server
const server = http.createServer(function(request: any, response: any) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.end("hi there"); // Sending a simple response to any incoming HTTP request
});
// Creating a WebSocket server and passing the HTTP server instance to it
const wss = new WebSocketServer({ server });
// Event listener for WebSocket connections
wss.on('connection', function connection(socket) {
  // Event listener for WebSocket errors
  socket.on('error', (err)=>console.error(err));
  
  // Event listener for WebSocket messages
  socket.on('message', function message(data, isBinary) {
    // Broadcasting the received message to all connected WebSocket clients
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary }); // Sending the message to the client
      }
    });
  });
  // Sending an initial message to the connected WebSocket client
  socket.send('Hello! Message From Server!!');
});
// Starting the HTTP server and listening on port 8080
server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});




//websocket code using express

/*
import express from 'express'
import { WebSocketServer } from 'ws'

const app = express()
const httpServer = app.listen(8080)

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  ws.send('Hello! Message From Server!!');
});

*/