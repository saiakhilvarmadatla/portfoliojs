import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Lights({theme}){
    const light = useRef();
    
    useFrame((state) => {
        light.current.position.z = state.camera.position.z + 1 - 4
        light.current.target.position.z = state.camera.position.z - 4
        light.current.target.updateMatrixWorld()
    });

    return <>
        <directionalLight 
            color={theme===true ? '#808080' : '#b0c4de'}
            ref={light} castShadow
            shadow-mapSize={[1024, 1024]}
            position={[4, 4, 1]} intensity={4.5}
            shadow-camera-near={1} shadow-camera-far={10}
            shadow-camera-top={10} shadow-camera-bottom={-10}
            shadow-camera-right={10} shadow-camera-left={-10}
        />

        <ambientLight intensity={1.5} />
    </>
}