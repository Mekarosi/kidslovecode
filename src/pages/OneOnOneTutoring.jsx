import { useState, Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'


import  Girl  from '../models/Girl'

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  POPUP
</div> */}

const OneOnOneTutoring = () => {
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

        <Girl />
      </Suspense>
    </Canvas>
  </section>
  )
}

export default OneOnOneTutoring