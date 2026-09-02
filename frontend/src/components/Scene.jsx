import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight position={[1, 2, 3]} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      <Sphere visible args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#7000ff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Canvas>
  );
}
