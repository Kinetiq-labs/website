'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// Animated Sphere Component
function AnimatedSphere({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * speed * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={speed}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

// Main Scene Component
function Scene() {
  // Colors matching the logo gradient (dark to light)
  const spheres = [
    { position: [-3, 0, 0] as [number, number, number], color: '#2D2D2D', speed: 0.5 },
    { position: [-1, 0, 0] as [number, number, number], color: '#5C5C5C', speed: 0.7 },
    { position: [1, 0, 0] as [number, number, number], color: '#9E9E9E', speed: 0.9 },
    { position: [3, 0, 0] as [number, number, number], color: '#D4D4D4', speed: 1.1 },
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={0.8} />

      {spheres.map((sphere, index) => (
        <AnimatedSphere
          key={index}
          position={sphere.position}
          color={sphere.color}
          speed={sphere.speed}
        />
      ))}
    </>
  );
}

// Main HeroScene Component
export default function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        className="w-full h-full"
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
