import React from "react";
import BatchelorGame from './components/batchelorGame';
import Results from './components/results';
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
        <Tabs className="main-tab-nav">
          <Tab eventKey="picks" title="Picks">
            <BatchelorGame/>
          </Tab>
          <Tab eventKey="results" title="Results">
            <Results/>
          </Tab>
        </Tabs>
      </div>
            
    </div>
  );
}

export default App;
