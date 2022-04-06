import React from 'react';
import {Header} from './Header/index.js'
import { Footer } from './Footer/index.js';
import {Button} from '../Home/Button/index.js';
import {Layers} from './Layers/index.js';
import {Collection} from './Collection/index.js';
import './app.css'



function App() {
  return (
    <div className="app">
      <Header/>
      
      <div className="steps">
        <Layers/>
        <Collection/>
      </div>
      
      <Footer />
      <Button/>
    </div>
  );
}

export {App};