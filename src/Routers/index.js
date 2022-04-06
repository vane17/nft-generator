import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import {Home} from '../Home';
import {App} from '../App';
import {Images} from '../Images';


function Routers() {
  return (
    <>
      <Router>
        <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/app" element={<App/>}/>
              <Route exact path="/images" element={<Images/>}/>

        </Routes>
      </Router>
  </>
  );
}

export {Routers};
