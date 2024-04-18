import React from 'react';

// import Football from './football/index.jsx';
import Multilevel from './multilevel/index.jsx';
import RayVehicle from './rayvehicle/App.jsx';

export default function Games({theme}){
    // const [show, setShow] = useState('');

    return(
        <div style={theme===true ? { backgroundColor: '#242424' } : { backgroundColor: '#b0c4de' }}>
            <h3 style={theme===true ? {textAlign: 'center', color: 'white'} : {textAlign: 'center', color: 'black'}}>Games.</h3>
            
            <Multilevel theme={theme} />
            
            {/* <RayVehicle /> */}
        </div>
    )
};