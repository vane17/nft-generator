import React from 'react';

import './collection.css'



function Collection() {
  return (
    <div className="collection">
      
      <div className="collection-title"><strong >Paso 2.</strong> Descarga tu colección  <span className="collection-title-span">(Esta es una vista previa)</span> </div>

      <div className="collection__view">
        <div className="view pink">SU VISTA PREVIA SE MOSTRARÁ AQUÍ</div>
        <div className="view green">SU VISTA PREVIA SE MOSTRARÁ AQUÍ</div>
        <div className="view blue">SU VISTA PREVIA SE MOSTRARÁ AQUÍ</div>
      </div>

      <div className="form">
        <div className="form-group">
          <label className="form-group--title">Tamaño*</label>
          <input type="number" placeholder="10000"  className="form-group--input"/>

        </div>

        <div className="form-group">
          <label className="form-group--title">Nombre <span className="placeholder">(Opcional)</span></label>
          <input type="text" placeholder="Nombre de su colección"  className="form-group--input"/>

        </div>

        <div className="form-group">
          <label className="form-group--title">Descripción <span className="placeholder">(Opcional)</span></label>
          <input type="text" placeholder="Descripción de su colección"  className="form-group--input"/>

        </div>

      </div>


      <button className="collection__button">Descargar muestra gratuita</button>
      <button className="collection__button download">Descargar Colección</button>
        
      
    </div>
  );
}

export {Collection};