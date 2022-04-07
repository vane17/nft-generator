import React from 'react';
import {ListLayers} from './ListLayers/index.js'
import {ListItem} from './ListItem/index.js'

import './layers.css'

const list = [
  {text:'cortar cebolla', completed: false},
  {text:'cortar Flase', completed: false},
];




function Layers() {
  const onClickButton = () => {
    alert('aqui se habre modal')
  }




  return (
    <div className="layers">
      
      <div className="collection-title"><strong >Paso 1.</strong> Añade tus capas </div>

      <ListLayers>
        {list.map(list =>(
          <ListItem key={list.text} text={list.text}/>
        ))}
      </ListLayers>

      <div className="layers__button" onClick={()=> onClickButton()}> 
        <p>+</p>
        <p className="layers__button--p">Agregar Capa</p>
      </div>
    </div>
    
  );
}

export {Layers};