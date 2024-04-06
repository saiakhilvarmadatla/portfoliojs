import React, { useState } from 'react';

import Football from './football/index.jsx';
// import Multilevel from './multilevel/index.js';

export default function Games(){
    const [show, setShow] = useState('');

    return(
        <div>
            <div>
                Games.
                {/* <Football show={setShow} /> */}
            </div>
        </div>
    )
};