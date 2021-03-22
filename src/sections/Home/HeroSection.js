import React, { useRef, useState } from "react"
import { Canvas, useFrame, useThree, useLoader} from "react-three-fiber"
import * as THREE from "three";
import {
  softShadows,
  Text,
  PerspectiveCamera,
  useGLTF,
  // Cloud,
  // OrbitControls,
  ContactShadows
} from '@react-three/drei'
import Effects from './Effects'
import { useSpring, animated } from 'react-spring/three'
import { useInView } from 'react-intersection-observer'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { isMobile } from "react-device-detect";



softShadows();

function HeroSection(props) {
    let [isActive,setActive] = useState(false)
    const textRef = useRef()
    const TEDxBoxRef = useRef()
    let {pos} = useSpring({
      pos: isActive ? [0,1.2,4.7] : [0,2,1],
  
    })
    const { canvasRef, inView } = useInView()

    return (
        <section ref={canvasRef} id="home">
          <React.Suspense fallback={<div>Loading....</div>}>
            <Canvas  shadowMap>
                {/* <fog attach="fog" args={['#cc7b32', 0, 5000]} /> */}
                {!inView && <DisableRender />}
                <Camera />
                {/* <OrbitControls /> */}
                {/* <fog /> */}
                <fog attach="fog" args={["red", 5, 100]} />
               
                <ambientLight intensity={0.5} />
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
                  position={[0,-2,-1.5]}
                  rotation={[0,0,0]}
                  color={'rgba(0, 0, 0, 0)'}
                  fontSize={10}
                  maxWidth={200}
                  // lineHeight={1}
                  letterSpacing={0.02}
                  textAlign={'center'}
                  font="fonts/helveticaneue.woff"
                  anchorX="center"
                  anchorY="bottom"
                  outlineColor="red"
                  outlineWidth={0.05}
                  outlineOpacity={1}
                  ref={textRef}
                >X</Text>
                <React.Suspense fallback={null}>
                  <TEDxProp />
                  <TEDxCube isActive={isActive} setActive={setActive} pos={pos} TEDxBoxRef={TEDxBoxRef} />
                </React.Suspense>
                {/* <Box boxRef={boxRef} pos={pos} isActive={isActive} setActive={setActive}/> */}
                <ShadowPlane />
                <TEDxCarpet />
                <GroundPlane />
                <PlaneBack />
                {/* <React.Suspense fallback={null}>
                  <Cloud
                    length={0.007}
                    position={[0, 3, -10]} 
                    width={0.001} args={[3, 2]}
                    opacity={0.1}
                    />
                </React.Suspense> */}
                <ContactShadows position={[0, 0, 0]} width={10} height={10} far={20} rotation={[Math.PI / 3, 0, 0]} />
                <Effects textRef={textRef} />
            </Canvas>
          </React.Suspense>
        </section>
    );
  }

  export default HeroSection;

let ShadowPlane = () =>{
    return <mesh rotation={[90,0,0]} receiveShadow position={[0,0.1,0]}>
      <planeBufferGeometry attach="geometry" args={[100,100]}  />
      <shadowMaterial attach='material' opacity={0.5} side={THREE.DoubleSide} />
    </mesh>
  }
let GroundPlane = () =>{
  return <mesh rotation={[90,0,0]}  position={[0,-0.1,0]}>
      <planeBufferGeometry attach="geometry" args={[1000,1000]}  />
      <meshBasicMaterial attach='material' color="black" opacity={1} side={THREE.DoubleSide} />
    </mesh>
} 
let PlaneBack = () =>{
  return <mesh rotation={[0,0,90]}  position={[0,-0.1,-30]}>
      <planeBufferGeometry attach="geometry" args={[100,100]}  />
      <meshBasicMaterial attach='material' color="black" opacity={1} side={THREE.DoubleSide} />
    </mesh>
} 
let TEDxCarpet = () =>{
    return <mesh rotation={[90,0,0]} >
      <circleBufferGeometry attach="geometry" args={[3,52]}  />
      <meshPhongMaterial  attach='material' color="red" opacity={1} side={THREE.DoubleSide} />
    </mesh>
  }

let Camera = () =>{
  const { camera } = useThree();
  const { z, rotZ } = useSpring({
    from: { z: 0, rotZ: 0.5 },
    config: { tension: 100, friction: 100 },
    z: 8,
    rotZ: 0
  });
  useFrame(() => {
      camera.position.z = z.value;
      camera.rotation.z = rotZ.value;
  });
  return <PerspectiveCamera 
      makeDefault
      position={[0,1,8]}
      rotation={[0.1,0,0]}
      
      />
}

let TEDxProp = () =>{
  const gltf = useLoader(GLTFLoader, '/TEDx.glb')
  return <mesh castShadow receiveShadow>
    <primitive  scale={ isMobile ? [0.02,0.02,0.02] : [0.04,0.04,0.04]} object={gltf.scene} position={isMobile ? [0.0,3,0.02] :[0, 0, 0]} />
    <meshBasicMaterial attach='material' color="red" opacity={1} side={THREE.DoubleSide} />
  </mesh>

}

let TEDxCube = ({TEDxBoxRef,pos,setActive,isActive}) =>{
  const { nodes, materials } = useGLTF('/tedx_cube.glb')
  useFrame(()=>{
    TEDxBoxRef.current.rotation.z = TEDxBoxRef.current.rotation.z += 0.01
    TEDxBoxRef.current.rotation.y = TEDxBoxRef.current.rotation.y += 0.01
  })
  
  return (
    // <Center>
      <animated.mesh ref={TEDxBoxRef} onClick={e => setActive(!isActive)} position={pos} scale={[0.5,0.5,0.5]} castShadow>
        <group  dispose={null}>
          <group position={[0, 0, 0]} rotation={[0,0,0]}>
            <mesh material={materials.Material} geometry={nodes.Cube_1.geometry} />
            <mesh material={materials['Material.001']} geometry={nodes.Cube_2.geometry} />
          </group>
        </group>
      </animated.mesh>
    // </Center>
  )
}


const DisableRender = () => useFrame(() => null, 1000)