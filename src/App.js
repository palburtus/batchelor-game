import React from "react";
import BatchelorGame from './components/batchelorGame';
import Standings from './components/standings';
import {Nav, Tabs, Tab} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';



function App() {  
  return (
    <div className="App">
      <nav className="navbar">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Batchelor Fantasy League</span>
        </div>
      </nav>

      <div className="container">
        <Tabs>
          <Tab eventKey="picks" title="Picks">
            <BatchelorGame/>
          </Tab>
          <Tab eventKey="standings" title="Standings">
            <h2>Current Standings</h2>
            <Standings/>
          </Tab>
        </Tabs>
      </div>
            
    </div>
  );
}

export default App;
