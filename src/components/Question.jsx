import React, {useEffect, useState} from 'react';

import Tile from './Tile';


          // <Tile 
          //   key="yes-option"
          //   id="yes-option"
          //   onClick={() => console.log('yes')}
          // >
          //   Question
          // </Tile>
function Question(props) {


    return (
        <div className="Container Question" style={props.style}>
          <p style={{
            width:'80%'
          }}>{props.children}</p>
        </div>
    );
    
}

export default Question;