import React, { useRef } from "react"
import { Canvas, useFrame } from "react-three-fiber"
import * as THREE from "three";
import {
  PointerLockControls,
  DeviceOrientationControls,
  softShadows,
  Text,
  PerspectiveCamera,
  Cloud
} from '@react-three/drei'
import { isMobile } from 'react-device-detect'

softShadows();

function HeroSection(props) {
    return (
        <section>
            <Canvas shadowMap>
              <PerspectiveCamera 
                makeDefault
                position={[0, 1, 10]}
                fog
                />
                <React.Suspense fallback={null}>
                  <Cloud
                    length={0.1}
                    position={[-1, -5, 0]} 
                    width={5} args={[3, 2]}
                    opacity={0.5}
                    />
                  <Cloud
                    length={0.2}
                    position={[-1, 15, 0]} 
                    width={10} args={[3, 2]}
                    opacity={0.5}
                    />
                </React.Suspense>
              {
                // isMobile ?
                // <DeviceOrientationControls 
                //   alphaOffset={-Math.PI/2}
                //   enabled={true}
                // />
                // :
                // <PointerLockControls
                 
                // />
              } 
                <ambientLight intensity={0.2} />
                <directionalLight
                  castShadow
                  position={[10, 10, 0]}
                  intensity={1}
                  shadow-mapSize-width={1024}
                  shadow-mapSize-height={1024}
                  shadow-camera-far={50}
                  shadow-camera-left={-10}
                  shadow-camera-right={10}
                  shadow-camera-top={10}
                  shadow-camera-bottom={-10}
                  color="blue"
                />
                <pointLight position={[10, 10, 10]} />
                <Text
                  position={[-4,1,0]}
                  rotation={[0,0,0]}
                  color={'#EC2D2D'}
                  fontSize={1}
                  maxWidth={200}
                  lineHeight={1}
                  letterSpacing={0.02}
                  textAlign={'left'}
                  font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
                  anchorX="center"
                  anchorY="middle"
                >TEDxCUSAT</Text>
                <Box />
                <Circle />
            </Canvas>
        </section>
    );
  }

  export default HeroSection;

  let Box = () =>{
    const box = useRef()
    useFrame(()=>{
      box.current.rotation.z = box.current.rotation.z += 0.01
    })
    return <mesh ref={box} rotation={[90,0,0]} position={[0,1,0]} castShadow>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshPhysicalMaterial attach="material" color="red" />
    </mesh>
  }

let Circle = () =>{
    return <mesh rotation={[90,0,0]} receiveShadow>
      <circleBufferGeometry attach="geometry" args={[5,52]}  />
      <shadowMaterial attach='material' opacity={0.1} side={THREE.DoubleSide} />
    </mesh>
  }