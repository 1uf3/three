import * as THREE from 'three'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Planet(props: JSX.IntrinsicElements['mesh']) {
  // This reference will give us direct access to the mesh
  const mesh = useRef<THREE.Mesh>(null!)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(
    (state, delta) => (
      mesh.current.rotation.y = mesh.current.rotation.x += 0.005
    )
  );

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={1.5}
      >
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color={'blue'} />
    </mesh>
  )
}

