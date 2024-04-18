import React, { useRef, useState, useEffect } from 'react';

import * as THREE from 'three';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

import './App.css';

const Footer = ({theme}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [details, setDetails] = useState('');

    const Earth = () => {
        const ref = useRef(); 
        const { gl } = useThree(); 
        const mat = 0.25;

        const imgMap = useLoader(
            THREE.TextureLoader,
            'https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@displacementMap/public/img/worldColour.5400x2700.jpg'
        );
        const dMap = useLoader(
            THREE.TextureLoader,
            'https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@displacementMap/public/img/gebco_bathy_2700x1350.jpg'
        );
      
        useEffect(() => {
            imgMap.anisotropy = gl.capabilities.getMaxAnisotropy();
        }, [imgMap, gl]);
      
        return (
            <mesh ref={ref} castShadow={true} receiveShadow={true} scale={1}>
                <sphereGeometry args={[1.8, 100, 100]} />
        
                <meshStandardMaterial
                    map={imgMap} displacementMap={dMap}
                    displacementScale={mat} wireframe={false}
                />
            </mesh>
        );
    };
    
    return (
        <div style={theme===true ? {backgroundColor: '#242424'} : {backgroundColor: '#b0c4de'}}>
            <div style={{height: '55vh', display: 'flex', flexDirection: 'row'}}>
                <Canvas style={{width: '50%'}}>
                    <ambientLight intensity={0.5} />

                    <hemisphereLight 
                        args={theme===true ? ['white', 'dimgray']
                        : ['lightyellow', 'orange']} 
                        intensity={1.5} 
                    />
                    
                    <OrbitControls 
                        autoRotate={true} autoRotateSpeed={2}
                        enableDamping={false} enablePan={false}
                    />

                    {theme===true && <Stars />}

                    <Earth />
                </Canvas>

                <div style={{width: '50%', marginTop: '5vh'}} className='container row'>
                    <div className='col-6'>
                        <input 
                            type='text' placeholder='Enter Name' 
                            style={{width: '100%', marginRight: '1.5%'}} 
                            className='footer_input' value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className='col-6'>
                        <input 
                            type='tel' placeholder='Enter Mobile' value={mobile}
                            style={{width: '100%'}} className='footer_input'
                            onChange={(e) => setMobile(e.target.value)}
                        />
                    </div>

                    <div className='col-12'>
                        <input 
                            type='email' placeholder='Enter Email' 
                            style={{width: '100%', marginTop: '2vh'}} 
                            className='footer_input' value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div className='col-12'>
                        <textarea
                            rows="4" cols="50"
                            placeholder='Enter Details' 
                            style={{width: '100%', marginTop: '2vh'}} 
                            className='footer_textarea' value={details}
                            onChange={(e) => setDetails(e.target.value)}
                        />
                    </div>

                    <div style={{marginTop: '1vh', display: 'flex', justifyContent: 'center'}}>
                        <button className='footer_btn'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;