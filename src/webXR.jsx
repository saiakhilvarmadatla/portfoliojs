import React, { useState } from 'react';

import { Card } from 'react-bootstrap';

import { Dialog } from 'primereact/dialog';

import ARCanvas from './ar-img/arcanvas.jsx';
import ARMarker from './ar-img/armarker.jsx';

import '@google/model-viewer';

// import 'aframe';
// import { Entity, Scene } from 'aframe-react';

export const WebXR = ({theme}) => {
    const [openAR, setOAR] = useState(false);
    const [openVR, setOVR] = useState(false);

    const [artype, setAType] = useState('surface');

    const Box = () => {
        return (
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={"hotpink"} />
            </mesh>
        );
    };

    return (
        <div style={theme===true ? { backgroundColor: '#242424' } : { backgroundColor: '#b0c4de' }}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: '10px'}}>
                <Card style={{
                    width: '20vw', justifyContent: 'center', 
                    alignItems: 'center', height: '10vh',
                }} onClick={() => setOAR(true)}>
                    AR
                </Card>

                <Card style={{
                    width: '20vw', justifyContent: 'center', 
                    alignItems: 'center', height: '10vh',
                }} onClick={() => setOVR(true)}>
                    VR
                </Card>
            </div>

            <Dialog 
                header="Augmented Reality" visible={openAR} 
                style={{ width: '100vw', height: '65vh' }} 
                onHide={() => setOAR(false)} maximizable
            >
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <button onClick={() => setAType('surface')}>Surface Target</button>

                    <button onClick={() => setAType('image')}>Image Target</button>
                </div>

                {artype==='surface' && <model-viewer
                    autoplay 
                    ar ar-modes="webxr scene-viewer quick-look"
                    src={'/models/vr_headset.glb'}
                    loading="eager"
                    shadow-intensity="1"
                    auto-rotate 
                    camera-controls
                    style={{
                        width: '100%', height: '35vh', 
                        background: 'transparent'
                    }}
                ></model-viewer>}

                {artype==='img' && <ARCanvas
                    gl={{ 
                        antialias: false, powerPreference: "default", 
                        physicallyCorrectLights: true 
                    }}

                    onCameraStreamReady={() => console.log("Camera stream ready")}

                    onCameraStreamError={() => console.error("Camera stream error")}

                    onCreated={({ gl }) => {
                        gl.setSize(window.innerWidth, window.innerHeight)
                    }}
                >
                    <ambientLight />

                    <pointLight position={[10, 10, 0]} intensity={10.0} />

                    <ARMarker
                        params={{ smooth: true }}
                        type={"pattern"}
                        patternUrl={"/patt.hiro"}
                        onMarkerFound={() => {
                            console.log("Marker Found")
                        }}
                    >
                        <Box />
                    </ARMarker>
                </ARCanvas>}
            </Dialog>
        
            <Dialog 
                header="Virtual Reality" visible={openVR} 
                style={{ width: '100vw', height: '50vh' }} 
                onHide={() => setOVR(false)} maximizable
            >
                <div style={{margin: '0px', overflow: 'hidden'}}>
                    <a-scene
                        vr-mode-ui='enabled: false;' embedded
                        renderer="logarithmicDepthBuffer: true; precision: medium;"
                        arjs='trackingMethod: best; sourceType: webcam; debugUIEnabled: false;'
                    >

                        {/* use rawgithack to retrieve the correct url for nft marker (see 'pinball' below) */}
                        <a-nft
                            type='nft' url='/img/trex/trex'
                            smooth='true' smoothCount='10' 
                            smoothTolerance='0.01' smoothThreshold='5'
                        >
                            <a-entity
                                gltf-model='/model/trex.gltf'
                                scale="5 5 5"
                                position="150 300 -100"
                            ></a-entity>
                        </a-nft>
                        <a-entity camera></a-entity>
                    </a-scene>
                </div>   
            </Dialog>
        </div>
    );
};

export default WebXR;