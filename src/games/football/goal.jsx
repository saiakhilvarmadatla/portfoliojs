import React, { useState } from 'react';

import { MeshPhysicalMaterial } from 'three';

import { Box, Text } from '@react-three/drei';
import { CuboidCollider, RigidBody } from '@react-three/rapier';

const Goal = () => {
    const [inter, setInter] = useState(false);

    const material = new MeshPhysicalMaterial();

    return (
        <RigidBody position={[0, 1, 0]}>
            <Box 
                scale={[11, 1, 1]} 
                position={[0, 3, 0]} 
                material={material}  
                castShadow 
            />

            <Box 
                scale={[1, 6, 1]} 
                position={[5, 0, 0]} 
                material={material}  
                castShadow 
            />

            <Box 
                scale={[1, 6, 1]} 
                position={[-5, 0, 0]} 
                material={material}  
                castShadow 
            />

            <Box 
                scale={[1, 1, 3]} 
                position={[-5, -3, 0]} 
                material={material}  
                castShadow 
            />

            {inter && <Text fontSize={2}>Goal</Text>}

            <CuboidCollider 
                position={[0, 0, 1]}
                args={[5, 3, 1]}
                sensor
                onIntersectionEnter={() => setInter(true)}
                onIntersectionExit={() => setInter(false)}
            />
        </RigidBody>
    );
};

export default Goal;