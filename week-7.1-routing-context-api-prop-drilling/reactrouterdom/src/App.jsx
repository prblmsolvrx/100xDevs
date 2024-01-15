//client side routing in react
//Suspense API,asynchronous component fetching 
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/landing" element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  
  return (
    <div>
      <button
        onClick={() => {
          navigate('/landing');
        }}
      >
        Landing Page
      </button>

      <button
        onClick={() => {
          navigate('/dashboard');
        }}
      >
        Dashboard
      </button>
    </div>
  );
}

export default App;
