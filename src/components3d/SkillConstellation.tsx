import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Float } from '@react-three/drei';
import * as THREE from 'three';

interface SkillNode {
  name: string;
  category: string;
  color: string;
  position: [number, number, number];
  size: number;
}

const NODES_DATA: SkillNode[] = [
  // Frontend
  { name: 'React', category: 'Frontend', color: '#06b6d4', position: [0, 1.4, 0], size: 0.28 },
  { name: 'TypeScript', category: 'Frontend', color: '#38bdf8', position: [1.2, 1.1, 0.6], size: 0.22 },
  { name: 'JavaScript', category: 'Frontend', color: '#facc15', position: [-1.2, 1.2, 0.4], size: 0.22 },
  { name: 'Tailwind CSS', category: 'Frontend', color: '#06b6d4', position: [0.8, 1.7, -0.6], size: 0.2 },
  { name: 'Next.js', category: 'Frontend', color: '#ffffff', position: [-0.9, 1.6, -0.5], size: 0.2 },

  // Cross-Platform
  { name: 'React Native', category: 'Mobile', color: '#ec4899', position: [1.8, 0.2, 0.8], size: 0.25 },
  { name: 'Expo', category: 'Mobile', color: '#f43f5e', position: [1.9, -0.6, -0.5], size: 0.2 },

  // Backend
  { name: 'Spring Boot', category: 'Backend', color: '#10b981', position: [-1.6, -0.2, 0.8], size: 0.26 },
  { name: 'FastAPI', category: 'Backend', color: '#059669', position: [-1.8, 0.6, -0.6], size: 0.24 },
  { name: 'Kafka', category: 'Backend', color: '#f59e0b', position: [-1.3, -0.9, -0.4], size: 0.22 },
  { name: 'Java', category: 'Backend', color: '#ef4444', position: [-0.6, -1.2, 0.7], size: 0.22 },

  // Database
  { name: 'MySQL', category: 'Database', color: '#f59e0b', position: [0.2, -1.5, 0.5], size: 0.24 },
  { name: 'Vector DB / RAG', category: 'Database', color: '#8b5cf6', position: [-0.3, -1.6, -0.6], size: 0.22 },

  // Tools
  { name: 'Docker', category: 'Tools', color: '#3b82f6', position: [1.2, -1.1, 0.7], size: 0.22 },
  { name: 'Git & CI/CD', category: 'Tools', color: '#a855f7', position: [0.9, -1.3, -0.7], size: 0.22 },
];

function ConstellationField({ onSelectSkill }: { onSelectSkill?: (name: string) => void }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  // Calculate lines between nearby nodes
  const linesGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < NODES_DATA.length; i++) {
      for (let j = i + 1; j < NODES_DATA.length; j++) {
        const p1 = new THREE.Vector3(...NODES_DATA[i].position);
        const p2 = new THREE.Vector3(...NODES_DATA[j].position);
        if (p1.distanceTo(p2) < 2.2) {
          points.push(p1);
          points.push(p2);
        }
      }
    }
    const geom = new THREE.BufferGeometry().setFromPoints(points);
    return geom;
  }, []);

  return (
    <group ref={groupRef}>
      {/* Central Core Node */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.35, 24, 24]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#0891b2"
          emissiveIntensity={0.8}
          roughness={0.2}
        />
      </mesh>
      <Html position={[0, 0, 0]} center distanceFactor={8} zIndexRange={[10, 0]}>
        <div className="pointer-events-none text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/90 border border-cyan-500/50 text-cyan-300 whitespace-nowrap shadow-glow-cyan-sm">
          Core Architecture
        </div>
      </Html>

      {/* Constellation Connection Lines */}
      {linesGeometry && (
        <lineSegments geometry={linesGeometry}>
          <lineBasicMaterial color="#334155" transparent opacity={0.4} />
        </lineSegments>
      )}

      {/* Skill Nodes */}
      {NODES_DATA.map((node, idx) => (
        <group key={idx} position={node.position}>
          <Float speed={1.5 + (idx % 3) * 0.4} rotationIntensity={0.5} floatIntensity={0.4}>
            <mesh
              onClick={(e) => {
                e.stopPropagation();
                if (onSelectSkill) onSelectSkill(node.name);
              }}
              className="cursor-pointer"
            >
              <sphereGeometry args={[node.size, 16, 16]} />
              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={0.5}
                roughness={0.3}
              />
            </mesh>

            <Html position={[0, node.size + 0.14, 0]} center distanceFactor={8} zIndexRange={[10, 0]}>
              <button
                onClick={() => onSelectSkill && onSelectSkill(node.name)}
                className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950/80 border border-slate-700/60 text-slate-200 hover:text-cyan-300 hover:border-cyan-400 whitespace-nowrap transition-all shadow-sm"
              >
                {node.name}
              </button>
            </Html>
          </Float>
        </group>
      ))}
    </group>
  );
}

export const SkillConstellation: React.FC<{ onSelectSkill?: (name: string) => void }> = ({
  onSelectSkill,
}) => {
  return (
    <div className="w-full h-full min-h-[420px] relative">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 48 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#06b6d4" />
        <pointLight position={[-5, -5, -5]} intensity={1.2} color="#8b5cf6" />

        <ConstellationField onSelectSkill={onSelectSkill} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
          dampingFactor={0.05}
        />
      </Canvas>

      <div className="absolute bottom-2 right-3 pointer-events-none text-xs text-slate-500 font-mono">
        3D Constellation · Drag to orient
      </div>
    </div>
  );
};
