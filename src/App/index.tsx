import React from 'react';
import { Outlet } from 'react-router-dom';
import './style.css';

function App() {
  return (
    <>
    <header className="App-header">
      <h1>Users</h1>
    </header>
    <div className="container-md pt-4">
      <Outlet />
    </div>
    </>
  );
}

export default App;
