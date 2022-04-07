import React from 'react';


function ListLayers(props) {
   
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}
  
  export {ListLayers};