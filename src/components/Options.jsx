import React, {useEffect, useState} from 'react';

import Tile from './Tile';


function Options(props) {
    

    const style = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px'
    }

    return (
        <div className="Container" style={style}>
          <Tile 
            key="Yes"
            id="Yes"
            onClick={() => props.onClick('Yes')}
            activeBackground='rgb(21, 201, 0)'
            passiveBackground='rgb(8, 77, 0, .4)'
            style={{
              fontSize: '3rem'
            }}
          >
            YES
          </Tile>
          
          { 'definite' in props && props.definite === true ? (
          <Tile 
            key="Yes"
            id="Yes"
            onClick={() => props.onClick('Yes')}
            activeBackground='rgb(21, 201, 0)'
            passiveBackground='rgb(8, 77, 0, .4)'
            style={{
              fontSize: '1.8rem',
              color: 'rgb(21, 201, 0)'
            }}
          >
            DEFINITELY<br />YES
          </Tile>
          ) : (
            <Tile 
              key="No"
              id="No"
              onClick={() => props.onClick('No')}
              activeBackground='rgb(214, 52, 41)'
              passiveBackground='rgb(135, 20, 12, .4)'
              style={{
                fontSize: '3rem'
              }}
            >
              NO
            </Tile>
          )}
          
        </div>
    );
    
}

export default Options;