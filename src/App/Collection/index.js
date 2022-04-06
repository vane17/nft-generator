import React from 'react';

import './collection.css'



function Collection() {
  return (
    <div className="collection">
      
      <p className="layers__title"><i className="layers__strong">Paso 1.</i> Añade tus capas</p>

      <div className="layers__button"> 
        <p>+</p>
        <p className="layers__button--p">Agregar Capa</p>
      </div>
    </div>
  );
}

export {Collection};