import * as THREE from 'three'
import React, { useRef } from 'react'

export default function Overlay(props: JSX.IntrinsicElements["mesh"]) {
  // This reference will give us direct access to the mesh
  const mesh = useRef<THREE.Mesh>(null!);

  const config = {
    font: THREE.Font.prototype,
    size: 1,
    height: 1,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 8,
    bevelOffset: 0,
  }

  const loader = new THREE.FontLoader();
  loader.load("public/Cica_Bold.json", function (font) {
    config.font = font
  })

  // textGeometryを有効化すると、画面が真っ黒になってしまう。
  return (
    <mesh {...props} ref={mesh} scale={1.5}>
      <textGeometry args={["Newto", config]} />
    </mesh>
  );
}

