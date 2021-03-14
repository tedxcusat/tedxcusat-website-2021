import React, { useRef } from "react"
import { Canvas, useFrame } from "react-three-fiber"
import * as THREE from "three";
import {
  softShadows,
  Text,
  PerspectiveCamera,
  Cloud,
} from '@react-three/drei'
import Effects from './Effects'
import { useSpring, animated } from 'react-spring/three'


softShadows();

function HeroSection(props) {
    
    return (
        <section>
          <React.Suspense fallback={null}>
            <Canvas shadowMap>
              <PerspectiveCamera 
                makeDefault
                position={[0, 0, 8]}
                rotation={[0.1,0,0]}

                />
                {/* <fog attach="fog" args={["#272730", 3, 2]} /> */}
                <React.Suspense fallback={null}>
                  <Cloud
                    length={0.1}
                    position={[-1, -5, 0]} 
                    width={5} args={[3, 2]}
                    opacity={0.2}
                    />
                </React.Suspense>
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
                  position={[0,3,0]}
                  rotation={[0,0,0]}
                  color={'#EC2D2D'}
                  fontSize={5}
                  maxWidth={200}
                  lineHeight={1}
                  letterSpacing={0.02}
                  textAlign={'center'}
                  font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
                  anchorX="center"
                  anchorY="middle"
                >X</Text>
                <Box />
                <ShadowPlane />
                <TEDxCarpet />
                {/* <GroundPlane /> */}
                <Effects />
            </Canvas>
          </React.Suspense>
        </section>
    );
  }

  export default HeroSection;

  let Box = () =>{
    const box = useRef()
    useFrame(()=>{
      box.current.rotation.z = box.current.rotation.z += 0.01
      box.current.rotation.y = box.current.rotation.y += 0.01
    })
    return <mesh ref={box} rotation={[90,0,0]} position={[0,1,0]} castShadow>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshPhysicalMaterial attach="material" color="white" />
    </mesh>
  }

let ShadowPlane = () =>{
    return <mesh rotation={[90,0,0]} receiveShadow position={[0,0.1,0]}>
      <circleBufferGeometry attach="geometry" args={[5,52]}  />
      <shadowMaterial attach='material' opacity={0.1} side={THREE.DoubleSide} />
    </mesh>
  }
// let GroundPlane = () =>{
//   return <mesh rotation={[90,0,0]} receiveShadow position={[0,-0.1,0]}>
//       <planeBufferGeometry attach="geometry" args={[1000,1000]}  />
//       <meshBasicMaterial attach='material' color="white" opacity={1} side={THREE.DoubleSide} />
//     </mesh>
// } 
let TEDxCarpet = () =>{
    return <mesh rotation={[90,0,0]}>
      <circleBufferGeometry attach="geometry" args={[3,52]}  />
      <meshPhongMaterial  attach='material' color="red" opacity={1} side={THREE.DoubleSide} />
    </mesh>
  }