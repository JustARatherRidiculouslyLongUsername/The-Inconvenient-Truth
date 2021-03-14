import React, {useEffect, useState} from 'react';
import '../css/ProgressBar.css'
import Happiness from '../img/happiness.png';
import Money from '../img/money.png';
import Pollution from '../img/pollution.png';
import Resources from '../img/resources.png';

function ProgressBar(props) {

    const [isBeingHovered, setIsBeingHovered] = useState(false)


    // const handleMouseUp = () => {
    //     if (isBeingClicked) {
    //         props.onClick()
    //         console.log(`click on ${props.id} succes`)
    //     }
    //     setIsBeingClicked(false)
    // }
    

    const activeBackground = {
        backgroundColor : '#747a84'
    }

    // add a handler only when the tile is being clicked;
    // the handler is removed when the mouse moves while
    // being clicked or is released
    // useEffect(() => {
    //     const element = document.getElementById(props.id)
    //     console.log(`${props.id} is ${isBeingHovered ? '' : 'not '}being clicked`)
    //     if (isBeingClicked) {
    //         element.onmousemove = () => { setIsBeingClicked(false) }
    //     }
    //     else {
    //         element.onmousemove = null
    //     }
    // }, [isBeingClicked])

            // onMouseDown={() => setIsBeingClicked(true)}
            // onMouseUp={handleMouseUp}

    const images = [Resources, Money, Pollution, Happiness];
    const styles = props.icon === 2 ? {
      position: 'relative',
      top: '-4px'
    } : {};

    return (
        <div className="ProgressBar"
            id={ props.id }
            style={isBeingHovered ? activeBackground : {}}
        >

            <div className="ProgressIcon">
              <img className="icon" src= {images[props.icon]} 
                style={ styles }
            />
            </div>

            
            <div className="ProgressIndicator">
              <div className="CompletedProgress"
                    style={{
                      width: `calc(var(--progress-width)*${props.progress}/100)`
                    }}>
              </div>
            </div>
            
        </div>
    );
}

export default ProgressBar;