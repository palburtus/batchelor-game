import React from "react";
import BatchelorGame from './batchelorGame';
import logo from './logo.svg';
import './App.css';



function App() {  
  return (
    <div className="App">
      <nav class="navbar">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Batchelor Fantasy League</span>
        </div>
      </nav>
      <BatchelorGame/>
    </div>
  );
}

export default App;
