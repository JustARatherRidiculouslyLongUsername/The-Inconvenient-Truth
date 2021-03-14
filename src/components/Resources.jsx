import React, {useEffect, useState} from 'react';

import ProgressBar from './ProgressBar';

function Resources(props) {


    return (
        <div className="Container Resources">
          {
            props.progresses.map((val, idx) => (
              <ProgressBar progress={val} icon={idx}/>
            ))
          }
        </div>
    );
    
}

export default Resources;