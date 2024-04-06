import React from 'react';

import { Canvas } from '@react-three/fiber';
import { KeyboardControls } from '@react-three/drei';

import Experience from './experience.jsx'
import Interface from './interface.jsx';

import './index.css';

export default function Multilevel({show}){
    return(
        <div style={{height: '95vh'}}>
            <div style={{ position: 'sticky', zIndex: 100, fontSize: '20px' }} onClick={() => show('')}>
            👈
            </div>
            
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
                    <Experience />
                </Canvas>

                <Interface />
            </KeyboardControls>
        </div>
    );
};