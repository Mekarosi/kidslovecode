/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Mohamed Fsili (https://sketchfab.com/medraphc)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cartoon-aircraft-1701c134e4f3410e8a570def0e35b484
Title: Cartoon aircraft
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'

import isAircraftScene from '../assets/3d/aircraft.glb'

const Aircraft = (props) => {
  const aircraftRef = useRef()
  const { nodes, materials } = useGLTF(isAircraftScene)
  return (
    <a.group ref={aircraftRef} {...props}>
      <a.group rotation={[-1.591, 0.139, 0.127]}>
        <a.group rotation={[Math.PI / 2, 0, 0]}>
          <a.group
            position={[-0.571, -0.188, 0.441]}
            rotation={[-1.574, -0.162, -1.707]}
            scale={[0.758, 1, 0.757]}>
            <mesh
              
              geometry={nodes.Object_4.geometry}
              material={materials.main}
            />
            <mesh
              
              geometry={nodes.Object_5.geometry}
              material={materials.main}
            />
            <mesh
              
              geometry={nodes.Object_6.geometry}
              material={materials.shadow}
            />
          </a.group>
          <a.group position={[-1.695, -0.322, 0.287]} rotation={[-2.729, 0.061, 1.369]}>
            <mesh
              
              geometry={nodes.Object_14.geometry}
              material={materials.metal}
            />
            <mesh
              
              geometry={nodes.Object_15.geometry}
              material={materials.shadow}
            />
          </a.group>
          <a.group
            position={[-0.22, 0.345, 0.499]}
            rotation={[2.273, -1.36, 2.265]}
            scale={[0.036, 0.118, 0.036]}>
            <mesh
              
              geometry={nodes.Object_49.geometry}
              material={materials['Material.004']}
            />
            <a.group
              position={[0, 1.806, -1.245]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[31.285, 31.285, 9.434]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_51.geometry}
                material={materials['Material.004']}
              />
              <a.group position={[0, 0.15, -0.002]} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_53.geometry}
                  material={materials.characater}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_55.geometry}
                  material={materials['Material.004']}
                  position={[0, 0.001, 0.012]}
                  scale={1.24}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_57.geometry}
                  material={materials['Material.005']}
                  position={[0, 0.139, 0.062]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.071, 0.071, 0.033]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_59.geometry}
                  material={materials['Material.005']}
                  position={[-0.104, 0.142, -0.018]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={0.019}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_61.geometry}
                  material={materials['Material.004']}
                  position={[-0.098, 0.142, -0.018]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={0.019}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_63.geometry}
                  material={materials.characterEYE}
                  position={[0.038, 0.093, 0.06]}
                  rotation={[1.66, 0.141, 2.92]}
                  scale={[0.98, 0.98, 0.435]}
                />
              </a.group>
            </a.group>
          </a.group>
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials.metal}
            position={[-1.313, 0.397, 0.352]}
            rotation={[2.273, -1.36, 2.265]}
            scale={1.06}
          />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials.metal}
            position={[-1.364, 0.379, 0.746]}
            rotation={[2.273, -1.36, 1.695]}
            scale={1.06}
          />
          <mesh
            geometry={nodes.Object_12.geometry}
            material={materials.metal}
            position={[-1.366, -0.285, 0.332]}
            rotation={[1.567, 0.162, 1.707]}
            scale={[0.645, 0.638, 0.645]}
          />
          <mesh
            geometry={nodes.Object_17.geometry}
            material={materials.metal}
            position={[0.498, 0.287, 0.594]}
            rotation={[0.019, -0.134, -1.408]}
          />
          <mesh
            geometry={nodes.Object_19.geometry}
            material={materials['Material.002']}
            position={[-0.562, -0.703, 0.982]}
            rotation={[2.343, 0.21, -0.015]}
            scale={[0.12, 0.12, 0.11]}
          />
          <mesh
            geometry={nodes.Object_21.geometry}
            material={materials.main}
            position={[-0.562, -0.703, 0.982]}
            rotation={[2.343, 0.21, -0.015]}
            scale={[0.12, 0.12, 0.11]}
          />
          <mesh
            geometry={nodes.Object_23.geometry}
            material={materials['Material.003']}
            position={[-1.389, -0.272, 0.329]}
            rotation={[1.567, 0.162, 1.707]}
            scale={0.27}
          />
          <mesh
            geometry={nodes.Object_25.geometry}
            material={materials['Material.003']}
            position={[-1.316, -0.26, 0.339]}
            rotation={[1.567, 0.162, 1.707]}
            scale={0.557}
          />
          <mesh
            geometry={nodes.Object_27.geometry}
            material={materials.metal}
            position={[0.18, -0.341, 0.834]}
            rotation={[2.337, 0.675, -1.097]}
            scale={[0.115, 0.129, 0.088]}
          />
          <mesh
            geometry={nodes.Object_29.geometry}
            material={materials.main}
            position={[0.222, 0.945, 0.569]}
            rotation={[1.567, 0.162, 0.136]}
          />
          <mesh
            geometry={nodes.Object_31.geometry}
            material={materials['Material.002']}
            position={[0.178, 0.584, 0.557]}
            rotation={[1.567, 0.162, 0.136]}
          />
          <mesh
            geometry={nodes.Object_33.geometry}
            material={materials.metal}
            position={[-0.572, -0.184, 0.441]}
            rotation={[2.822, -1.429, 2.806]}
          />
          <mesh
            geometry={nodes.Object_35.geometry}
            material={materials['Material.002']}
            position={[0.176, -0.141, 0.917]}
            rotation={[0.488, -0.976, -1.442]}
            scale={0.035}
          />
          <mesh
            geometry={nodes.Object_37.geometry}
            material={materials['Material.002']}
            position={[0.239, -0.085, 0.889]}
            rotation={[0.482, -0.949, -1.443]}
            scale={0.033}
          />
          <mesh
            geometry={nodes.Object_39.geometry}
            material={materials['Material.002']}
            position={[0.322, -0.288, 0.66]}
            rotation={[0.51, -0.692, -1.802]}
            scale={0.035}
          />
          <mesh
            geometry={nodes.Object_41.geometry}
            material={materials['Material.002']}
            position={[0.38, -0.227, 0.626]}
            rotation={[0.507, -0.63, -1.812]}
            scale={0.035}
          />
          <mesh
            geometry={nodes.Object_43.geometry}
            material={materials['Material.002']}
            position={[0.348, 0.491, 0.725]}
            rotation={[0.41, -0.937, -0.356]}
            scale={0.033}
          />
          <mesh
            geometry={nodes.Object_45.geometry}
            material={materials['Material.002']}
            position={[0.414, -0.015, 0.76]}
            rotation={[0.466, -0.753, -1.591]}
            scale={0.033}
          />
          <mesh
            geometry={nodes.Object_47.geometry}
            material={materials['Material.001']}
            position={[-0.571, -0.188, 0.441]}
            rotation={[-1.574, -0.162, -1.707]}
          />
          <mesh
            geometry={nodes.Object_65.geometry}
            material={materials.wire}
            position={[0.342, -0.342, 0.562]}
            rotation={[2.273, -1.36, 2.265]}
          />
          <mesh
            geometry={nodes.Object_67.geometry}
            material={materials.wire}
            position={[0.315, -0.16, 0.775]}
            rotation={[2.273, -1.36, 2.265]}
          />
          <mesh
            geometry={nodes.Object_69.geometry}
            material={materials.wire}
            position={[0.451, 0.476, 0.805]}
            rotation={[2.273, -1.36, 2.265]}
          />
        </a.group>
      </a.group>
    </a.group>
  )
}

export default Aircraft