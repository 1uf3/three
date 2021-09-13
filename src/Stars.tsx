import * as THREE from 'three'
import React, { useMemo, useRef } from "react";
import { useFrame } from '@react-three/fiber'


export default function Stars(props: JSX.IntrinsicElements['mesh']) {
  // This reference will give us direct access to the mesh
  const mesh = useRef<THREE.Mesh>(null!)
  let theta = 0;
  
  useFrame(() => {
    const r = 5 * Math.sin(THREE.MathUtils.degToRad((theta += 0.01)));
    mesh.current.rotation.set(r, r, r);
  });

  const [geo, mat, coords] = useMemo(() => {
    const geo = new THREE.SphereBufferGeometry(1, 32, 32);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("white"),
    });
    const coords = new Array(2000)
      .fill(0)
      .map((i) => [
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
      ]);
    return [geo, mat, coords];
  }, []);

  return (
    <group ref={mesh}>
      {coords.map(([p1, p2, p3], i) => (
        <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
      ))}
    </group>
  );
}
