import React from 'react';

import './layers.css'



function Layers() {
  return (
    <div className="layers">
      
      <div className="collection-title"><strong >Paso 1.</strong> Añade tus capas </div>

      <div className="layers__button"> 
        <p>+</p>
        <p className="layers__button--p">Agregar Capa</p>
      </div>
    </div>
    
  );
}

export {Layers};