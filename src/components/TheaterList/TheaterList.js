import React from 'react';
import Theater from '../Theaters/Theater'

function TheaterList(props) {
    return (
        <div>
            { 
              props.theaters.map((theater,index)=>{
                  return <Theater key={index} theater={theater}/>
              })
            }
        </div>
    );
}

export default TheaterList;