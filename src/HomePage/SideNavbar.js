import React from 'react';
import './SideNavbar.css';
import { DiSizzlejs } from "react-icons/di";
import {FaHome,FaHistory, FaDatabase } from 'react-icons/fa';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from './Home';
  import History from './History';
  import Data from './Data';

export default function SideNavbar() {
        return ( 
            <Router>
            <div className = "sidenavbar">
              <nav className = "Navbar">
                <ul className = "Nav"> 
                <div className="nav"> 
                  <Link to="/"> <span><DiSizzlejs/> </span></Link>
                  <li className="nav-list">
                    <Link to="/"><span className="Fa"><FaHome/> </span> Home</Link>
                  </li>
                  <li className="nav-list">
                    <Link to="/History"> <span className="Fa"> <FaHistory/>   </span>History</Link>
                  </li>
                  <li className="nav-list">
                    <Link to="/Data"><span className="Fa"> <FaDatabase/></span> Data</Link>
                  </li>
                  </div>
                </ul>
              </nav>
              </div>
              
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/History">
                  <History />
                </Route>
                <Route path="/Data">
                  <Data />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
          </Router>
        );
      }
      
    //    function Home() {
    //     return <h2>Home</h2>;
    //    }
      
    //    function History() {
    //      return <h2>History</h2>;
    //  }
      
    //    function History() {
    //      return <h2>History</h2>;
    //  }
    