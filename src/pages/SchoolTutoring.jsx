import { useState, Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import  Game  from '../models/Game'
import  Humanoid  from '../models/Humanoid'

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  POPUP
</div> */}


const SchoolTutoring = () => {

  const adjustHumanoidForScreenSize = () => {
    let screenScale = null
    let screenPosition = [25.5, -17, -43]
    let rotation = [0.1, -0.7, 0]

    if(window.innerWidth < 768){
      screenScale = [3, 3, 3]
      screenPosition 
    } else {
      screenScale = [3, 3, 3]
      
    }
    return [screenScale, screenPosition, rotation]
  }

  const [humanoidScale, humanoidPosition , humanoidRotation] = adjustHumanoidForScreenSize()

  return (
    <section className='w-full h-screen relative'>
      <Canvas 
        className='w-full h-screen bg-transparent' 
        camera={{near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

          <Humanoid 
            position={humanoidPosition}
            scale={humanoidScale}
            rotation={humanoidRotation}
          />
          <Game /> 
        </Suspense>
      </Canvas>
    </section>
  )
}

export default SchoolTutoring