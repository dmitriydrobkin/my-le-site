'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function GlassCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        {/* БЕЗОПАСНЫЙ МАТЕРИАЛ: Родной PhysicalMaterial вместо кастомных шейдеров */}
        <meshPhysicalMaterial
          color="#3b82f6"
          transmission={1}
          opacity={1}
          transparent={true}
          roughness={0.1}
          metalness={0.1}
          ior={1.5}
          thickness={1.5}
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="city" />
        <GlassCube />
      </Canvas>
    </div>
  );
}