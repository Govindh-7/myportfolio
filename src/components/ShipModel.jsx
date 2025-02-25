import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

export default function ShipModel() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <OrbitControls />
      <Environment preset="sunset" background />
    </Canvas>
  );
}