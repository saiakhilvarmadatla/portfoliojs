import React from 'react';

import { Entity, Scene } from 'aframe-react';


export const WebXR = () => {
    return (
        <div>
            <model-viewer
                autoplay 
                ar
                ar-modes="webxr scene-viewer quick-look"
                src={'/models/vr_headset.glb'}
                loading="eager"
                shadow-intensity="1"
                auto-rotate 
                camera-controls
                style={{
                    width: '45vw', height: '45vh', margin: '3%',
                    background: 'transparent', borderRadius: '5px',
                }}
            ></model-viewer>
        
            <Scene>
                <Entity geometry={{primitive: 'torus'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}} />
                <Entity light={{type: 'point'}} />
                <Entity gltf-model={{src: '/models/laptop.gltf'}} />
                <Entity text={{value: 'Hello, WebVR!'}} />
            </Scene>
        </div>
    );
};

export default WebXR;