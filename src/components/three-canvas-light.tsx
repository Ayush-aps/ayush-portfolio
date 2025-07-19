"use client"

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

//Bright golden particle swirl for light theme
function AnimatedStarsLight() {
  const ref = useRef<any>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const radius = Math.random() * 500 + 200;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      // faster rotation for lively effect
      ref.current.rotation.x += delta * 0.1;
      ref.current.rotation.y -= delta * 0.08;
    }
  });

  return (
    <group>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#FFD700"  // gold
          size={1.8}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

// Dynamic rotating icosahedron for light theme
// function FloatingGeometryLight() {
//   const meshRef = useRef<any>(null!);
//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
//       meshRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.5) * 0.3;
//     }
//   });
//   return (
//     <mesh ref={meshRef} position={[0, 0, 0]}>  {/* Icosahedron */}
//       <icosahedronGeometry args={[1, 0]} />
//       <meshPhongMaterial color="#FFA500" emissive="#FFE5B4" emissiveIntensity={0.2} shininess={50} />
//     </mesh>
//   );
// }

export default function ThreeCanvasLight() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        onCreated={({ gl }) => gl.setClearColor('#FFF8DC', 0)} // Cornsilk transparent
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <AnimatedStarsLight />
        {/* <FloatingGeometryLight /> */}
      </Canvas>
    </div>
  );
}