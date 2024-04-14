/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Ivan Norman (https://sketchfab.com/vanidza)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/cartoon-girl-a4bf221f620e49f8bc7af53e6d6a4f3c
Title: Cartoon girl
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree  } from '@react-three/fiber'
import { a } from '@react-spring/three'

import isGirlScene from '../assets/3d/girl.glb'

const Girl = (props) => {
  const girlRef = useRef()
  const { nodes, materials } = useGLTF(isGirlScene)
  return (
    <a.group ref={girlRef} {...props}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.Girl}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </a.group>
  )
}

export default Girl