'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Sun from './Sun';
import CameraAnimation from './CameraAnimation';

export default function SolarSystem() {
  return (
    <div className="w-full h-screen fixed top-0 left-0 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        {/* Ambient light for overall scene */}
        <ambientLight intensity={0.5} />

        {/* Sun */}
        <Sun />

        {/* Camera Animation - gives feeling of moving through space */}
        <CameraAnimation />

        {/* Camera controls - allow user to rotate view (disabled during animation) */}
        {/* <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={3}
          maxDistance={15}
        /> */}
      </Canvas>
    </div>
  );
}
