import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Octahedron, MeshDistortMaterial } from '@react-three/drei';
import { Mesh } from 'three';

const DiamondMesh = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group>
        {/* Wireframe outer shell */}
      <Octahedron args={[1.5, 0]} ref={meshRef}>
        <meshStandardMaterial 
            color="#D4AF37" 
            wireframe={true}
            transparent
            opacity={0.3}
        />
      </Octahedron>
      
      {/* Solid core for glint */}
      <Octahedron args={[1.2, 0]}>
         <MeshDistortMaterial
            color="#FCF6BA"
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0.9}
            roughness={0.1}
            distort={0.3}
            speed={2}
        />
      </Octahedron>
    </group>
  );
};

const Diamond3D: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#D4AF37" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#blue" />
        <DiamondMesh />
      </Canvas>
    </div>
  );
};

export default Diamond3D;