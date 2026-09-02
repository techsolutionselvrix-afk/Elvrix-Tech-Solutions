import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

// Robot head and body built from primitives
function RobotHead() {
  const headRef = useRef();
  const eyeLeftRef = useRef();
  const eyeRightRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Gentle bob
    headRef.current.position.y = Math.sin(t * 1.2) * 0.08 + 0.1;
    // Subtle head tilt
    headRef.current.rotation.y = Math.sin(t * 0.6) * 0.15;
    // Eye blink simulation
    const blink = Math.sin(t * 3) > 0.97 ? 0.05 : 0.18;
    eyeLeftRef.current.scale.y = blink;
    eyeRightRef.current.scale.y = blink;
  });

  return (
    <group ref={headRef} position={[0, 0, 0]}>
      {/* Body */}
      <RoundedBox args={[1.8, 1.6, 1.6]} radius={0.22} smoothness={4} position={[0, -1.6, 0]}>
        <meshStandardMaterial color="#8FA28A" roughness={0.3} metalness={0.1} />
      </RoundedBox>

      {/* Body stripe/belt */}
      <RoundedBox args={[1.85, 0.18, 1.65]} radius={0.04} smoothness={4} position={[0, -1.48, 0]}>
        <meshStandardMaterial color="#C8A96B" roughness={0.2} metalness={0.4} />
      </RoundedBox>

      {/* Head box */}
      <RoundedBox args={[1.7, 1.5, 1.5]} radius={0.2} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial color="#C7D3C0" roughness={0.2} metalness={0.15} />
      </RoundedBox>

      {/* Face grid panel */}
      <RoundedBox args={[1.2, 1.0, 0.1]} radius={0.05} smoothness={4} position={[0, 0, 0.76]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
      </RoundedBox>

      {/* Grid lines on face (horizontal) */}
      {[-0.22, 0.0, 0.22].map((y, i) => (
        <mesh key={`h-${i}`} position={[0, y, 0.82]}>
          <boxGeometry args={[1.1, 0.015, 0.01]} />
          <meshStandardMaterial color="#3a3a3a" />
        </mesh>
      ))}

      {/* Grid lines on face (vertical) */}
      {[-0.36, 0, 0.36].map((x, i) => (
        <mesh key={`v-${i}`} position={[x, 0, 0.82]}>
          <boxGeometry args={[0.015, 0.9, 0.01]} />
          <meshStandardMaterial color="#3a3a3a" />
        </mesh>
      ))}

      {/* Left eye */}
      <group ref={eyeLeftRef} position={[-0.28, 0.05, 0.83]}>
        <Sphere args={[0.18, 16, 16]}>
          <meshStandardMaterial color="#F7F4ED" emissive="#F7F4ED" emissiveIntensity={0.6} />
        </Sphere>
        <Sphere args={[0.09, 16, 16]} position={[0, 0, 0.1]}>
          <meshStandardMaterial color="#C8A96B" emissive="#C8A96B" emissiveIntensity={1.2} />
        </Sphere>
      </group>

      {/* Right eye */}
      <group ref={eyeRightRef} position={[0.28, 0.05, 0.83]}>
        <Sphere args={[0.18, 16, 16]}>
          <meshStandardMaterial color="#F7F4ED" emissive="#F7F4ED" emissiveIntensity={0.6} />
        </Sphere>
        <Sphere args={[0.09, 16, 16]} position={[0, 0, 0.1]}>
          <meshStandardMaterial color="#C8A96B" emissive="#C8A96B" emissiveIntensity={1.2} />
        </Sphere>
      </group>

      {/* Ear / side panels */}
      <RoundedBox args={[0.18, 0.7, 0.5]} radius={0.06} position={[-0.94, 0.1, 0]}>
        <meshStandardMaterial color="#8FA28A" roughness={0.4} />
      </RoundedBox>
      <RoundedBox args={[0.18, 0.7, 0.5]} radius={0.06} position={[0.94, 0.1, 0]}>
        <meshStandardMaterial color="#8FA28A" roughness={0.4} />
      </RoundedBox>

      {/* Antenna */}
      <Cylinder args={[0.04, 0.04, 0.6, 8]} position={[0, 1.08, 0]}>
        <meshStandardMaterial color="#C8A96B" metalness={0.7} roughness={0.2} />
      </Cylinder>
      <Sphere args={[0.1, 12, 12]} position={[0, 1.42, 0]}>
        <meshStandardMaterial color="#C8A96B" emissive="#C8A96B" emissiveIntensity={0.8} metalness={0.6} />
      </Sphere>

      {/* Pedestal */}
      <RoundedBox args={[2.2, 0.4, 2.2]} radius={0.1} smoothness={4} position={[0, -2.62, 0]}>
        <meshStandardMaterial color="#C7D3C0" roughness={0.5} />
      </RoundedBox>
      <RoundedBox args={[2.8, 0.18, 2.8]} radius={0.06} smoothness={4} position={[0, -2.92, 0]}>
        <meshStandardMaterial color="#8FA28A" roughness={0.4} />
      </RoundedBox>
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={1.4} />
      <directionalLight position={[4, 6, 4]} intensity={1.2} color="#F7F4ED" castShadow />
      <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#C8A96B" />
      <pointLight position={[0, 4, 3]} intensity={0.6} color="#C7D3C0" />
    </>
  );
}

export default function RobotScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <Lights />
      <Suspense fallback={null}>
        <RobotHead />
      </Suspense>
    </Canvas>
  );
}
