import React from 'react';

import { Canvas } from '@react-three/fiber';
import { KeyboardControls } from '@react-three/drei';

import Experience from './experience.jsx'
// import Interface from './interface.jsx';

import './index.css';

export default function Multilevel({theme}){
    return(
        <div style={{height: '55vh', width: '100%'}}>
            <KeyboardControls map={[
                {name: 'forward', keys: ['ArrowUp', 'KeyW']},
                {name: 'backward', keys: ['ArrowDown', 'KeyS']},
                {name: 'leftward', keys: ['ArrowLeft', 'KeyA']},
                {name: 'rightward', keys: ['ArrowRight', 'KeyD']},
                {name: 'jump', keys: ['Space']},
            ]}>
                <Canvas
                    shadows
                    camera={{
                        fov: 45, near: 0.1, far: 200, position: [2.5, 4, 6]
                    }}
                >
                    <Experience theme={theme} />
                </Canvas>
            </KeyboardControls>
        </div>
    );
};