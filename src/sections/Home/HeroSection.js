import React, { useRef } from "react"

import { Canvas, useFrame } from "react-three-fiber"
function HeroSection(props) {
    return (
        <section>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box />
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
    return <mesh ref={box}>
      <boxBufferGeometry attach="geometry" args={[10, 1, 1]} />
      <meshBasicMaterial attach="material" color="red" />
    </mesh>
  }