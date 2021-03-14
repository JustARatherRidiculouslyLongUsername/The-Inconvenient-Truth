import React from 'react';
import Question from './Question';
import Tile from './Tile';
import Earth from '../img/happy.png'

function Title(props) {

  return (
    <div className="Title">
    <h1>The Inconvenient Truth</h1>
    <Question style={{
      // paddingLeft: "2rem",
      marginLeft: "12rem",
      marginTop: "5rem",
      fontSize: "2rem"
    }}>
Hey Earthlings, it's the journey of Earth right from the 1800s. Make the right choices and try to reach our current year! Your choices will affect the 4 parameters: <strong>Resources, Money, Pollution and Happiness</strong> of the people! Just remember, one wrong answer will lead to my demise!
    </Question>

      <Tile id="next" 
          activeBackground = 'rgb(41, 184, 6)'
          passiveBackground = 'rgb(77, 134, 2)'
          style={{
            width: '160px',
            height: '60px',
            margin: '0 auto',
            marginTop: '3rem',
            fontSize: '1.7rem'
          }}
          onClick = {() => props.onDone()}
        >
        Play >
        </Tile>
      <img src={ Earth } 
      style = {{
        position: 'fixed',
        bottom: '-4rem',
        left: '-9rem',
      }}/>
    </div>
  );
}

export default Title;