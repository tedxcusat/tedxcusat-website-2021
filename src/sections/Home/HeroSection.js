import React, { useRef, useState } from "react"
import { Canvas, useFrame, useThree, useLoader} from "react-three-fiber"
import * as THREE from "three";
import {
  PerspectiveCamera,
  useGLTF,
} from '@react-three/drei'
// import Effects from './Effects'
import { useSpring, animated } from 'react-spring/three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { isMobile } from "react-device-detect";


function HeroSection(props) {
    let [isActive,setActive] = useState(false)
    // const textRef = useRef()
    const TEDxBoxRef = useRef()
    let {pos} = useSpring({
      pos: isActive ? isMobile ? [0,2,4] : [0,1.2,4.7]  : [0,2,1],
  
    })
    const isSSR = typeof window === "undefined"

    return (
        <section id="home" className="bg-black">
          <img className="scroll-down-icon" src='/scrollDown.svg' alt=""/>
            <Canvas>
                <Camera />
                <fog attach="fog" args={["red", 5, 100]} />
                <ambientLight intensity={0.5} />
                <directionalLight
                  position={[10, 10, 0]}
                  intensity={1}
                  color="blue"
                />
                <pointLight position={[10, 10, 10]} />
                 {!isSSR && (
                    <React.Suspense fallback={null}>
                      <LetterX />
                      <TEDxProp />
                      <TEDxCube isActive={isActive} setActive={setActive} pos={pos} TEDxBoxRef={TEDxBoxRef} />
                      <TEDxCarpet />
                    </React.Suspense>
                 )}
                <GroundPlane />
                <PlaneBack />
                {/* <Effects textRef={textRef} /> */}
            </Canvas>
        </section>
    );
  }

  export default HeroSection;

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
  const normal = useLoader(THREE.TextureLoader, "seamless_carpet_texture_NORMAL2.jpg");
    return <mesh rotation={[90,0,0]} >
      <circleBufferGeometry attach="geometry" args={[3,80]}  />
      <meshPhongMaterial  
        normalMap={normal}
        normalScale={ new THREE.Vector2( 1, 1 )}
        attach='material' color="red" opacity={1} side={THREE.DoubleSide} />
    </mesh>
  }

let Camera = () =>{
  const { camera } = useThree();
  const { z, rotZ, y} = useSpring({
    from: { z: 0, rotZ: 0.5 },
    config: { tension: 100, friction: 100 },
    z: 8,
    rotZ: 0,
    y: isMobile ? 2 : 0.5
  });
  useFrame(() => {
      camera.position.z = z.value;
      camera.rotation.z = rotZ.value;
      camera.position.y = y.value;
  });
  return <PerspectiveCamera 
      makeDefault
      position={[0,1,8]}
      rotation={[0.1,0,0]}
      
      />
}

let TEDxProp = () =>{
  const gltf = useLoader(GLTFLoader, '/TEDx.glb')
  return <mesh>
    <primitive  scale={ isMobile ? [0.02,0.02,0.02] : [0.04,0.04,0.04]} object={gltf.scene} position={isMobile ? [0.0,4,0.02] :[0, 0, 0]} />
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
      <animated.mesh ref={TEDxBoxRef} onClick={e => setActive(!isActive)} position={pos} scale={[0.5,0.5,0.5]}>
        <group  dispose={null}>
          <group position={[0, 0, 0]} rotation={[0,0,0]}>
            <mesh material={materials.Material} geometry={nodes.Cube_1.geometry} />
            <mesh material={materials['Material.001']} geometry={nodes.Cube_2.geometry} />
          </group>
        </group>
      </animated.mesh>
  )
}

let LetterX = (props) => {
  const { nodes, materials } = useGLTF('/x.glb')
  const { rot } = useSpring({
    from: { rot: [0,2,0] },
    config: { tension: 100, friction: 50 },
    rot: [0,0,0],
  });
  return (
    <animated.mesh rotation={rot} position={[0, 4.5, -2]} scale={[15,15,15]}>
      <group dispose={null}>
        <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials['Material.001']} geometry={nodes.x001.geometry} />
          <mesh material={materials['Material.002']} geometry={nodes.x001_1.geometry} />
        </group>
      </group>
    </animated.mesh>
  )
}

useGLTF.preload('/x.glb')
useGLTF.preload('/tedx_cube.glb')
useGLTF.preload('/TEDx.glb')
