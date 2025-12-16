'use client';

import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

export default function Sun() {
  const sunRef = useRef<THREE.Mesh>(null);

  // Load the sun texture
  const sunTexture = useLoader(TextureLoader, '/textures/suncyl1.jpg');

  // Rotate the sun slowly around its axis
  useFrame((state, delta) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += delta * 0.1; // Slow rotation
    }
  });

  return (
    <group>
      {/* Main Sun with texture */}
      <mesh ref={sunRef} position={[0, 0, 0]}>
        <sphereGeometry args={[3.5, 128, 128]} />
        <meshStandardMaterial
          map={sunTexture}
          emissive="#FF8C00"
          emissiveMap={sunTexture}
          emissiveIntensity={0.6}
          roughness={0.8}
          metalness={0}
        />
      </mesh>

      {/* Point light from sun */}
      <pointLight
        color="#FFA500"
        intensity={2}
        distance={50}
        decay={2}
      />
    </group>
  );
}
