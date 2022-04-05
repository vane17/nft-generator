import React from 'react';
import {Header} from './Header/index.js'
import { Footer } from './Footer/index.js';
import {Button} from '../Home/Button/index.js';
import './app.css'



function App() {
  return (
    <div className="app">
      <Header/>
      como estas
      <Footer />
      <Button/>
    </div>
  );
}

export {App};