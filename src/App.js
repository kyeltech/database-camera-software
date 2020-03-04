import React from 'react';
import './App.css';
// import SideNavbar from './HomePage/SideNavbar.js';
// import Drop from './HomePage/Drop';
import videoInput from './HomePage/videoInput'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={} className="App-logo" alt="logo" /> */}
        <p>
         {/* < SideNavbar /> */}
         {/* <Drop /> */}
         <videoInput />
        </p>
      </header>
    </div>
  );
}

export default App;
