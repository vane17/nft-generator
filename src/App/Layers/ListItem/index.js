import React from 'react';
import './ListItem.css';

function ListItem(props) {

    const onDelete = () => {
        alert('borraste' + props.text)
    }

   
    return (
        <div className="list__item-layer">

            <div className="list__name">
                <div className="list__name-text">
                    <span className="list__name-layer">Capa:</span>
                    <p className="list-text">{props.text}</p>
                </div>
                <div className="icons">
                <span className="material-icons-outlined edit">edit</span>
                <span className="material-icons-outlined delete" onClick={onDelete}>delete</span>
                </div>
                
            </div>

            <div className="list__information">
                <div className="list__rareza">Rareza de la capa: 100%</div>
                <div className="list__total">Total de imagenes: 1 </div>
            </div>

        </div>
    );
}
  
  export {ListItem};