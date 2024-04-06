import React from 'react';

import Goal from './goal';
import Ball from './ball';

const Football = ({show}) => {
    return (
        <React.Fragment>
            <div style={{ color: 'oynxblack', width: '3vw', height: 'auto', position: 'sticky', zIndex: 100, fontSize: '20px' }} onClick={() => show('')}>
            👈
            </div>

            <group>
                <Goal />
                <Ball />
            </group>
        </React.Fragment>
    );
};

export default Football;