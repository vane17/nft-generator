import React from 'react';

import './layers.css'



function Layers() {
  return (
    <div className="layers">
      <p className="layers__title"><p className="layers__strong">Paso 1.</p> Añade tus capas</p>

      <div className="layers__button"> 
        <p>+</p>
        <p className="layers__button--p">Agregar Capa</p>
      </div>
    </div>
    
  );
}

export {Layers};