import React, { useState, Suspense } from 'react';

import { Card } from 'react-bootstrap';

import { motion, MotionConfig, useMotionValue } from "framer-motion";

import 'aframe';
import { Entity, Scene } from 'aframe-react';

export const WebXR = ({theme}) => {
    const [xr, setXr] = useState('');

    return (
        <div style={theme===true ? { backgroundColor: '#242424' } : { backgroundColor: '#b0c4de' }}>
            {xr==='' && <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: '10px'}}>
                <Card style={{
                    width: '20vw', justifyContent: 'center', 
                    alignItems: 'center', height: '10vh',
                }} onClick={() => setXr('ar')}>
                    AR
                </Card>

                <Card style={{
                    width: '20vw', justifyContent: 'center', 
                    alignItems: 'center', height: '10vh',
                }} onClick={() => setXr('vr')}>
                    VR
                </Card>
            </div>}
            
            {xr==='ar' && <model-viewer
                autoplay 
                ar ar-modes="webxr scene-viewer quick-look"
                src={'/models/vr_headset.glb'}
                loading="eager"
                shadow-intensity="1"
                auto-rotate 
                camera-controls
                style={{
                    width: '100%', height: '50vh', 
                    background: 'transparent'
                }}
            ></model-viewer>}
        
            {xr==='vr' && 
            <div>
                <Scene>
                    <Entity geometry={{primitive: 'torus'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}} />
                    <Entity light={{type: 'point'}} />
                    {/* <Entity gltf-model={{src: '/models/laptop.gltf'}} /> */}
                    <Entity text={{value: 'Hello, WebVR!'}} />
                </Scene>
            </div>}
        </div>
    );
};

export default WebXR;