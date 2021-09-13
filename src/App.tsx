import './style.css';
import { Canvas } from '@react-three/fiber'
import Stars from './Stars';
import Planet from './Planet';
import Overlay from './Overlay';

export default function App() {
  return (
    <Canvas className="canvas">
      <ambientLight />
      <pointLight position={[10, 10, 10]} castShadow />
      <Planet position={[6, -3, 0]} />
      <Stars position={[6, -3, 0]} />
    </Canvas>
  );
}
