import React, { useRef, useEffect } from 'react';

import { MeshPhysicalMaterial } from 'three';

import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

import { RigidBody } from '@react-three/rapier';

const Ball = () => {
    const ball = useRef(null);
    const material = new MeshPhysicalMaterial();

    const restartBall = () => {
        ball.current?.setTranslation({x: 0, y: -7, z: -24}, true);
        ball.current?.setLinvel({x: 0, y: 0, z: 7}, true);
    };

    useFrame(() => {
        if(ball.current){
            if(ball.current.translation().z > 10){
                restartBall();
            }
        }
    });

    useEffect(() => { restartBall() }, []);

    return (
        <RigidBody ref={ball} colliders="ball" restitution={2.5}>
            <Sphere material={material} castShadow />
        </RigidBody>
    );
};

export default Ball;