import React, { useState } from 'react';

function Sidebar(props) {

    const [visible, setVisible] = useState(true)
    
    return (
        <div 
            className="Sidebar"
            // onClick={() => setVisible(curr => !curr)}
            // style={{display: visible ? 'block' : 'none'}}
        >
            {props.children}
        </div>
    );
}

export default Sidebar;