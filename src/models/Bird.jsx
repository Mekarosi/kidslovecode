import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useRef, useEffect } from 'react'

import birdScene from '../assets/3d/bird.glb'

const Bird = () => {
    const { scene, animations} = useGLTF(birdScene)
    const birdRef = useRef()
    const { actions } = useAnimations(animations,birdRef)
  
    // useEffect((_, delta) => {
    //   actions['Take 001'].play()
    //  },[])

    return (
    <mesh position={[-5, 2, 1]} scale={[0.0015, 0.0015, 0.0015]}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird