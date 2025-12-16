'use client';

import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';

export default function SpaceDust() {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  // Create random particles
  const particlesCount = 2000;

  const particles = useMemo(() => {
    const particlePositions = [];

    for (let i = 0; i < particlesCount; i++) {
      // Random positions in a sphere closer to camera
      const radius = Math.random() * 30 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      // Tiny random scale for small dots
      const scale = Math.random() * 0.02 + 0.01; // Between 0.01 and 0.03

      particlePositions.push({ x, y, z, scale });
    }

    return particlePositions;
  }, []);

  // Set initial positions and scales for instanced mesh
  useEffect(() => {
    if (meshRef.current) {
      const temp = new THREE.Object3D();
      particles.forEach((particle, i) => {
        temp.position.set(particle.x, particle.y, particle.z);
        temp.scale.setScalar(particle.scale);
        temp.updateMatrix();
        meshRef.current!.setMatrixAt(i, temp.matrix);
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  }, [particles]);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, particlesCount]}>
      {/* Smooth spheres */}
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial
        color="#2A2A2A"
        transparent
        opacity={0.8}
      />
    </instancedMesh>
  );
}
