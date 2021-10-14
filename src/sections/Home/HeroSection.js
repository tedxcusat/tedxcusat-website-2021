import React, { useEffect, useRef, useState } from "react"
import { Canvas, useFrame, useThree, useLoader } from "react-three-fiber"
import * as THREE from "three"
import { PerspectiveCamera, useGLTF, useProgress } from "@react-three/drei"
import { a, useTransition } from "@react-spring/web"
// import Effects from './Effects'
import { useSpring, animated } from "react-spring/three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { isMobile } from "react-device-detect"
import Popup from "../../common/Popup"

function HeroSection({ isCanvasLoaded, setIsCanvasLoaded }) {
  let [isActive, setActive] = useState(false)
  const [popupVisible, setPopupVisible] = useState(false)
  // const textRef = useRef()
  const TEDxBoxRef = useRef()
  let { pos } = useSpring({
    pos: isActive ? (isMobile ? [0, 2, 4] : [0, 1.2, 4.7]) : [0, 2, 1],
  })
  const isSSR = typeof window === "undefined"
  useEffect(() => {
    setIsCanvasLoaded(false)
    setTimeout(() => {
      isMobile && setPopupVisible(true)
    }, 4000)
  }, [])

  return (
    <section id="home" className="bg-black">
      {/* <button className="scroll-down-icon bg-black text-white w-60 px-2 py-2 ">
        Register for Pre-Event
      </button> */}
      <div className="scroll-down-icon">
        <img src="/scrollDown.svg" alt="" />
      </div>
      <Popup {...{ popupVisible, setPopupVisible }} />
      <Loader setIsCanvasLoaded={setIsCanvasLoaded} />
      <Canvas>
        <Camera isCanvasLoaded={isCanvasLoaded} />
        <fog attach="fog" args={["red", 5, 100]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 0]} intensity={1} color="blue" />
        <pointLight position={[10, 10, 10]} />
        {!isSSR && (
          <React.Suspense fallback={null}>
            <LetterX />
            <TEDxProp />
            <TEDxCube
              isActive={isActive}
              setActive={setActive}
              pos={pos}
              TEDxBoxRef={TEDxBoxRef}
            />
            <TEDxCarpet />
            <GroundPlane />
            <PlaneBack />
          </React.Suspense>
        )}
        {/* <Effects textRef={textRef} /> */}
      </Canvas>
    </section>
  )
}

export default HeroSection

let GroundPlane = () => {
  return (
    <mesh rotation={[90, 0, 0]} position={[0, -0.1, 0]}>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshBasicMaterial
        attach="material"
        color="black"
        opacity={1}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

let PlaneBack = () => {
  return (
    <mesh rotation={[0, 0, 90]} position={[0, -0.1, -30]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshBasicMaterial
        attach="material"
        color="black"
        opacity={1}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

let TEDxCarpet = () => {
  const normal = useLoader(
    THREE.TextureLoader,
    "seamless_carpet_texture_NORMAL2.jpg"
  )
  return (
    <mesh rotation={[90, 0, 0]}>
      <circleBufferGeometry attach="geometry" args={[3, 80]} />
      <meshPhongMaterial
        normalMap={normal}
        normalScale={new THREE.Vector2(1, 1)}
        attach="material"
        color="red"
        opacity={1}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

let Camera = ({ isCanvasLoaded }) => {
  const { camera } = useThree()
  const { z, rotZ, y } = useSpring({
    from: { z: 0, rotZ: 0.5 },
    config: { tension: 100, friction: 100 },
    z: isCanvasLoaded ? 8 : 0,
    rotZ: isCanvasLoaded ? 0 : 0.5,
    y: isMobile ? 2 : 0.5,
  })
  useFrame(() => {
    camera.position.z = z.value
    camera.rotation.z = rotZ.value
    camera.position.y = y.value
  })
  return (
    <PerspectiveCamera
      makeDefault
      position={[0, 1, 8]}
      rotation={[0.1, 0, 0]}
    />
  )
}

let TEDxProp = () => {
  const gltf = useLoader(GLTFLoader, "/TEDx.glb")
  return (
    <mesh>
      <primitive
        scale={isMobile ? [0.02, 0.02, 0.02] : [0.04, 0.04, 0.04]}
        object={gltf.scene}
        position={isMobile ? [0.0, 4, 0.02] : [0, 0, 0]}
      />
      <meshBasicMaterial
        attach="material"
        color="red"
        opacity={1}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

let TEDxCube = ({ TEDxBoxRef, pos, setActive, isActive }) => {
  const { nodes, materials } = useGLTF("/tedx_cube.glb")
  useFrame(() => {
    TEDxBoxRef.current.rotation.z = TEDxBoxRef.current.rotation.z += 0.01
    TEDxBoxRef.current.rotation.y = TEDxBoxRef.current.rotation.y += 0.01
  })

  return (
    <animated.mesh
      ref={TEDxBoxRef}
      onClick={e => setActive(!isActive)}
      position={pos}
      scale={[0.5, 0.5, 0.5]}
    >
      <group dispose={null}>
        <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <mesh
            material={materials.Material}
            geometry={nodes.Cube_1.geometry}
          />
          <mesh
            material={materials["Material.001"]}
            geometry={nodes.Cube_2.geometry}
          />
        </group>
      </group>
    </animated.mesh>
  )
}

let LetterX = props => {
  const { nodes, materials } = useGLTF("/x.glb")
  const { rot } = useSpring({
    from: { rot: [0, 2, 0] },
    config: { tension: 100, friction: 50 },
    rot: [0, 0, 0],
  })
  return (
    <animated.mesh rotation={rot} position={[0, 4.5, -2]} scale={[15, 15, 15]}>
      <group dispose={null}>
        <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials["Material.001"]}
            geometry={nodes.x001.geometry}
          />
          <mesh
            material={materials["Material.002"]}
            geometry={nodes.x001_1.geometry}
          />
        </group>
      </group>
    </animated.mesh>
  )
}

useGLTF.preload("/x.glb")
useGLTF.preload("/tedx_cube.glb")
useGLTF.preload("/TEDx.glb")

// function Loader({setIsCanvasLoaded}) {
//   const { active , progress } = useProgress()
//   let [ loadingProgress, setLoadingProgress ] = useState(0.0)

//   useEffect(()=>{
//     console.log(progress);
//     setLoadingProgress(progress)
//     if(progress<100){
//       setIsCanvasLoaded(false)
//     }else{
//       setIsCanvasLoaded(true)
//     }
//   },[progress])
//   return <AnimatePresence>
//         {
//           active && <motion.div
//             initial={{ opacity: 0.5 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}

//             className="loading">
//             <div className="loading-bar-container">
//               <div className="loading-bar" style={{ width: `${loadingProgress}%` }}>
//                 <span className="loading-data">{`${loadingProgress.toFixed(2)}%`}</span>
//               </div>
//             </div>
//           </motion.div>
//         }
//   </AnimatePresence>
// }
function Loader({ setIsCanvasLoaded }) {
  const { active, progress } = useProgress()
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress },
  })
  useEffect(() => {
    if (progress < 100) {
      setIsCanvasLoaded(false)
    } else {
      setIsCanvasLoaded(true)
    }
  }, [progress])
  return transition(
    ({ progress, opacity }, active) =>
      active && (
        <a.div className="loading" style={{ opacity }}>
          <div className="loading-bar-container">
            <a.div className="loading-bar" style={{ width: progress + "%" }}>
              <a.span className="loading-data">
                {progress.to(p => `${p.toFixed(2)}%`)}
              </a.span>
            </a.div>
          </div>
        </a.div>
      )
  )
}
