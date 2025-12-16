'use client';

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function CameraAnimation() {
  const { camera } = useThree();
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    timeRef.current += delta;

    // Smooth circular motion around the sun
    const radius = 8;
    const speed = 0.05;

    camera.position.x = Math.sin(timeRef.current * speed) * radius;
    camera.position.z = Math.cos(timeRef.current * speed) * radius;
    camera.position.y = Math.sin(timeRef.current * speed * 0.5) * 2;

    // Always look at the sun (center)
    camera.lookAt(0, 0, 0);
  });

  return null;
}
