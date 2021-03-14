import React, {useEffect, useState} from 'react';

function Tile(props) {



    const [isBeingClicked, setIsBeingClicked] = useState(false)

    const handleMouseUp = () => {
        if (isBeingClicked) {
            props.onClick()
        }
        setIsBeingClicked(false)
    }
    

    const activeBackground = 'activeBackground' in props ? props.activeBackground : '#747a84';

    const passiveBackground = 'passiveBackground' in props ?
    props.passiveBackground : '#292b2f';

    // add a handler only when the tile is being clicked;
    // the handler is removed when the mouse moves while
    // being clicked or is released
    useEffect(() => {
        const element = document.getElementById(props.id)
        // console.log(`${props.id} is ${isBeingClicked ? '' : 'not '}being clicked`)
        if (isBeingClicked) {
            element.onmousemove = () => { setIsBeingClicked(false) }
        }
        else {
            element.onmousemove = null
        }
    }, [isBeingClicked])


    let styles = 'style' in props ? props.style : {};

    return (
        <div className="Tile"
            id = {props.id}
            onMouseDown={() => setIsBeingClicked(true)}
            onMouseUp={handleMouseUp}

            style={{
              ...styles,
              backgroundColor : isBeingClicked ? activeBackground : passiveBackground,
            }}
        >
            {props.children}
        </div>
    );
}

export default Tile;