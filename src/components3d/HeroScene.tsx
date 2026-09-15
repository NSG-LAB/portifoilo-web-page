import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

function LaptopModel() {
  const groupRef = useRef<THREE.Group>(null);
  const screenGlowRef = useRef<THREE.MeshBasicMaterial>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle mouse interaction
      const targetY = (state.mouse.x * Math.PI) / 8;
      const targetX = (-state.mouse.y * Math.PI) / 12;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
    }
    if (screenGlowRef.current) {
      // Subtle pulsing luminescence
      const t = state.clock.getElapsedTime();
      screenGlowRef.current.opacity = 0.85 + Math.sin(t * 3) * 0.12;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>
      {/* Laptop Base */}
      <RoundedBox args={[2.8, 0.12, 1.9]} radius={0.04} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.25} />
      </RoundedBox>

      {/* Keyboard Bed */}
      <mesh position={[0, 0.065, -0.15]}>
        <boxGeometry args={[2.5, 0.02, 1.1]} />
        <meshStandardMaterial color="#030712" roughness={0.6} />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, 0.065, 0.6]}>
        <boxGeometry args={[0.9, 0.015, 0.55]} />
        <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* Screen Hinge & Display Shell (Angled back at ~115 degrees) */}
      <group position={[0, 0.06, -0.92]} rotation={[-Math.PI / 16 - 0.25, 0, 0]}>
        {/* Screen Lid Backing */}
        <RoundedBox args={[2.8, 1.85, 0.08]} radius={0.04} smoothness={4} position={[0, 0.9, 0]}>
          <meshStandardMaterial color="#0b1329" metalness={0.85} roughness={0.2} />
        </RoundedBox>

        {/* Display Glass Bezel */}
        <mesh position={[0, 0.9, 0.045]}>
          <boxGeometry args={[2.65, 1.7, 0.01]} />
          <meshStandardMaterial color="#020617" roughness={0.1} />
        </mesh>

        {/* Glowing Screen Matrix / Code Canvas */}
        <mesh position={[0, 0.9, 0.052]}>
          <planeGeometry args={[2.5, 1.55]} />
          <meshBasicMaterial
            ref={screenGlowRef}
            color="#06b6d4"
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Inner terminal code simulation lines */}
        <group position={[-1.1, 1.5, 0.056]}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <mesh key={i} position={[0.6 + (i % 3) * 0.2, -i * 0.15, 0]}>
              <planeGeometry args={[0.8 + (i % 2) * 0.5, 0.04]} />
              <meshBasicMaterial color={i === 0 ? '#22d3ee' : i === 3 ? '#a78bfa' : '#38bdf8'} />
            </mesh>
          ))}
        </group>
      </group>

      {/* Cyber Floating Accent Rings */}
      <group position={[0, 0.8, 0]}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.3, 0.015, 16, 64]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.4} />
        </mesh>
        <mesh rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
          <torusGeometry args={[2.6, 0.012, 16, 64]} />
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.35} />
        </mesh>
      </group>

      {/* Floating Mini Tech Nodes */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[1.8, 1.4, -0.6]}>
          <octahedronGeometry args={[0.18, 0]} />
          <meshStandardMaterial color="#22d3ee" emissive="#06b6d4" emissiveIntensity={0.8} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-1.9, 0.9, 0.5]}>
          <dodecahedronGeometry args={[0.16, 0]} />
          <meshStandardMaterial color="#c084fc" emissive="#8b5cf6" emissiveIntensity={0.7} />
        </mesh>
      </Float>
    </group>
  );
}

export const HeroScene: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[380px] lg:min-h-[520px] relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 1.2, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-4, 2, 2]} intensity={2.5} color="#06b6d4" distance={10} />
        <pointLight position={[4, 2, -2]} intensity={2.0} color="#8b5cf6" distance={10} />
        <pointLight position={[0, -2, 2]} intensity={1.0} color="#10b981" distance={8} />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.6}>
          <LaptopModel />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.1}
          minPolarAngle={Math.PI / 3}
          dampingFactor={0.05}
        />
      </Canvas>

      <div className="absolute bottom-2 right-4 text-xs font-mono text-cyan-400/60 pointer-events-none flex items-center gap-1.5">
        <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        Interactive 3D · Drag to rotate
      </div>
    </div>
  );
};
