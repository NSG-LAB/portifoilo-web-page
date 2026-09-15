import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { DroneSpec } from '../types';

interface DroneCanvasProps {
  drone: DroneSpec;
  exploded: boolean;
  selectedComponent: string | null;
  onSelectComponent: (id: string) => void;
}

function Drone3DModel({ drone, exploded, selectedComponent, onSelectComponent }: DroneCanvasProps) {
  const groupRef = useRef<THREE.Group>(null);
  const prop1Ref = useRef<THREE.Group>(null);
  const prop2Ref = useRef<THREE.Group>(null);
  const prop3Ref = useRef<THREE.Group>(null);
  const prop4Ref = useRef<THREE.Group>(null);

  const isDelivery = drone.id === 'delivery';
  const armSpan = isDelivery ? 1.4 : 1.0;
  const propScale = isDelivery ? 1.35 : 0.85;
  const explodedFactor = exploded ? 1 : 0;

  // Propeller spin animation
  useFrame((_, delta) => {
    const spinSpeed = isDelivery ? 22 : 36;
    if (prop1Ref.current) prop1Ref.current.rotation.y += delta * spinSpeed;
    if (prop2Ref.current) prop2Ref.current.rotation.y -= delta * spinSpeed;
    if (prop3Ref.current) prop3Ref.current.rotation.y -= delta * spinSpeed;
    if (prop4Ref.current) prop4Ref.current.rotation.y += delta * spinSpeed;
  });

  const isSelected = (id: string) => selectedComponent === id;

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* ================= CENTER CHASSIS ================= */}
      <group position={[0, explodedFactor * 0.1, 0]}>
        {/* Top carbon deck plate */}
        <mesh position={[0, 0.08, 0]}>
          <cylinderGeometry args={[0.55, 0.6, 0.04, 8]} />
          <meshStandardMaterial
            color={isSelected('fc') ? '#38bdf8' : '#1e293b'}
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>

        {/* Bottom carbon deck plate */}
        <mesh position={[0, -0.08, 0]}>
          <cylinderGeometry args={[0.6, 0.55, 0.04, 8]} />
          <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Structural Standoffs */}
        {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, i) => (
          <mesh
            key={i}
            position={[Math.cos(angle) * 0.35, 0, Math.sin(angle) * 0.35]}
          >
            <cylinderGeometry args={[0.02, 0.02, 0.16, 12]} />
            <meshStandardMaterial color="#64748b" metalness={0.9} roughness={0.2} />
          </mesh>
        ))}
      </group>

      {/* ================= PIXHAWK ORANGE CUBE PLUS ================= */}
      <group
        position={[0, 0.16 + explodedFactor * 0.5, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onSelectComponent('fc');
        }}
        className="cursor-pointer"
      >
        <mesh>
          <boxGeometry args={[0.3, 0.14, 0.3]} />
          <meshStandardMaterial
            color={isSelected('fc') ? '#38bdf8' : '#ea580c'} // Signature Orange Cube
            roughness={0.25}
            metalness={0.5}
            emissive={isSelected('fc') ? '#0284c7' : '#c2410c'}
            emissiveIntensity={isSelected('fc') ? 0.8 : 0.25}
          />
        </mesh>

        {/* Pixhawk Status LED */}
        <mesh position={[0, 0.075, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.01, 16]} />
          <meshBasicMaterial color="#10b981" />
        </mesh>
      </group>

      {/* ================= CUAV NEO 3 GPS MAST & PUCK ================= */}
      <group
        position={[0, 0.2 + explodedFactor * 0.9, -0.4 - explodedFactor * 0.3]}
        onClick={(e) => {
          e.stopPropagation();
          onSelectComponent('gps');
        }}
        className="cursor-pointer"
      >
        {/* GPS Aluminum Mast */}
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.012, 0.012, 0.6, 12]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* GPS Puck Antenna */}
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.05, 24]} />
          <meshStandardMaterial
            color={isSelected('gps') ? '#06b6d4' : '#1e293b'}
            roughness={0.3}
            metalness={0.6}
            emissive={isSelected('gps') ? '#0891b2' : '#000000'}
            emissiveIntensity={isSelected('gps') ? 0.7 : 0}
          />
        </mesh>

        {/* GPS Indicator Light */}
        <mesh position={[0, 0.63, 0.08]}>
          <sphereGeometry args={[0.018, 12, 12]} />
          <meshBasicMaterial color="#06b6d4" />
        </mesh>
      </group>

      {/* ================= 4 ARMS & MOTORS ================= */}
      {[
        { id: 1, angle: Math.PI / 4, ref: prop1Ref, dir: 1 },
        { id: 2, angle: (3 * Math.PI) / 4, ref: prop2Ref, dir: -1 },
        { id: 3, angle: (5 * Math.PI) / 4, ref: prop3Ref, dir: -1 },
        { id: 4, angle: (7 * Math.PI) / 4, ref: prop4Ref, dir: 1 },
      ].map((arm) => {
        const x = Math.cos(arm.angle) * armSpan;
        const z = Math.sin(arm.angle) * armSpan;
        const explodedX = x * (1 + explodedFactor * 0.5);
        const explodedZ = z * (1 + explodedFactor * 0.5);

        return (
          <group key={arm.id}>
            {/* Carbon Fiber Arm Tube */}
            <mesh
              position={[x * 0.5 * (1 + explodedFactor * 0.25), 0, z * 0.5 * (1 + explodedFactor * 0.25)]}
              rotation={[0, -arm.angle + Math.PI / 2, Math.PI / 2]}
            >
              <cylinderGeometry args={[0.035, 0.035, armSpan * (1 + explodedFactor * 0.2), 16]} />
              <meshStandardMaterial color="#0b1120" roughness={0.4} metalness={0.8} />
            </mesh>

            {/* Motor Mount & Motor (Tarot 320KV / 1000KV BLDC) */}
            <group
              position={[explodedX, 0.05, explodedZ]}
              onClick={(e) => {
                e.stopPropagation();
                onSelectComponent('motors');
              }}
              className="cursor-pointer"
            >
              {/* Motor Stator Bell */}
              <mesh position={[0, 0.06, 0]}>
                <cylinderGeometry args={[0.13, 0.13, 0.12, 24]} />
                <meshStandardMaterial
                  color={isSelected('motors') ? '#06b6d4' : '#1e1b4b'}
                  metalness={0.9}
                  roughness={0.2}
                  emissive={isSelected('motors') ? '#0891b2' : '#312e81'}
                  emissiveIntensity={isSelected('motors') ? 0.8 : 0.2}
                />
              </mesh>

              {/* Motor Shaft & Prop Adapter */}
              <mesh position={[0, 0.15, 0]}>
                <cylinderGeometry args={[0.03, 0.03, 0.08, 16]} />
                <meshStandardMaterial color="#e2e8f0" metalness={1.0} roughness={0.1} />
              </mesh>

              {/* Propeller Group */}
              <group ref={arm.ref} position={[0, 0.18 + explodedFactor * 0.3, 0]}>
                {/* Propeller Hub */}
                <mesh>
                  <cylinderGeometry args={[0.05, 0.05, 0.04, 16]} />
                  <meshStandardMaterial color="#0f172a" metalness={0.8} />
                </mesh>

                {/* Blade 1 */}
                <mesh position={[0.42 * propScale, 0, 0]} rotation={[0.08 * arm.dir, 0, 0]}>
                  <boxGeometry args={[0.85 * propScale, 0.015, 0.12]} />
                  <meshStandardMaterial
                    color="#090d16"
                    roughness={0.2}
                    metalness={0.7}
                  />
                </mesh>

                {/* Blade 2 */}
                <mesh position={[-0.42 * propScale, 0, 0]} rotation={[-0.08 * arm.dir, 0, 0]}>
                  <boxGeometry args={[0.85 * propScale, 0.015, 0.12]} />
                  <meshStandardMaterial
                    color="#090d16"
                    roughness={0.2}
                    metalness={0.7}
                  />
                </mesh>
              </group>
            </group>

            {/* Hobbywing ESC under arm */}
            <group
              position={[x * 0.6, -0.06 - explodedFactor * 0.2, z * 0.6]}
              onClick={(e) => {
                e.stopPropagation();
                onSelectComponent('esc');
              }}
              className="cursor-pointer"
            >
              <mesh>
                <boxGeometry args={[0.16, 0.03, 0.08]} />
                <meshStandardMaterial
                  color={isSelected('esc') ? '#38bdf8' : '#334155'}
                  metalness={0.8}
                  roughness={0.3}
                  emissive={isSelected('esc') ? '#0284c7' : '#000000'}
                  emissiveIntensity={isSelected('esc') ? 0.8 : 0}
                />
              </mesh>
            </group>
          </group>
        );
      })}

      {/* ================= TATTU LIPO BATTERY ================= */}
      <group
        position={[0, -0.22 - explodedFactor * 0.6, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onSelectComponent('battery');
        }}
        className="cursor-pointer"
      >
        <mesh>
          <boxGeometry args={[isDelivery ? 0.75 : 0.45, 0.22, 0.42]} />
          <meshStandardMaterial
            color={isSelected('battery') ? '#10b981' : '#1e293b'}
            roughness={0.4}
            emissive={isSelected('battery') ? '#059669' : '#000000'}
            emissiveIntensity={isSelected('battery') ? 0.7 : 0}
          />
        </mesh>

        {/* Battery Branding Strip */}
        <mesh position={[0, 0, 0.215]}>
          <planeGeometry args={[isDelivery ? 0.65 : 0.35, 0.14]} />
          <meshBasicMaterial color={isDelivery ? '#10b981' : '#f59e0b'} />
        </mesh>
      </group>

      {/* ================= C12 CAMERA / PAYLOAD ================= */}
      <group
        position={[0, -0.15 - explodedFactor * 0.3, 0.55 + explodedFactor * 0.4]}
        onClick={(e) => {
          e.stopPropagation();
          onSelectComponent('camera');
        }}
        className="cursor-pointer"
      >
        {/* Gimbal Arm */}
        <mesh position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.1, 12]} />
          <meshStandardMaterial color="#475569" metalness={0.9} />
        </mesh>

        {/* Camera Sensor Housing */}
        <mesh position={[0, -0.04, 0]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial
            color={isSelected('camera') ? '#ec4899' : '#0f172a'}
            metalness={0.8}
            roughness={0.2}
            emissive={isSelected('camera') ? '#db2777' : '#000000'}
            emissiveIntensity={isSelected('camera') ? 0.8 : 0}
          />
        </mesh>

        {/* Camera Optical Lens */}
        <mesh position={[0, -0.04, 0.08]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.045, 0.045, 0.03, 16]} />
          <meshBasicMaterial color="#06b6d4" />
        </mesh>
      </group>

      {/* ================= LANDING GEAR SKIDS ================= */}
      <group position={[0, -0.45 - explodedFactor * 0.2, 0]}>
        {/* Left skid */}
        <mesh position={[-0.55, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 1.2, 12]} />
          <meshStandardMaterial color="#334155" metalness={0.8} />
        </mesh>
        {/* Right skid */}
        <mesh position={[0.55, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 1.2, 12]} />
          <meshStandardMaterial color="#334155" metalness={0.8} />
        </mesh>
        {/* Vertical legs */}
        {[-0.55, 0.55].map((sideX, i) => (
          <React.Fragment key={i}>
            <mesh position={[sideX, 0.18, 0.35]} rotation={[0, 0, sideX > 0 ? -0.2 : 0.2]}>
              <cylinderGeometry args={[0.018, 0.018, 0.38, 12]} />
              <meshStandardMaterial color="#1e293b" />
            </mesh>
            <mesh position={[sideX, 0.18, -0.35]} rotation={[0, 0, sideX > 0 ? -0.2 : 0.2]}>
              <cylinderGeometry args={[0.018, 0.018, 0.38, 12]} />
              <meshStandardMaterial color="#1e293b" />
            </mesh>
          </React.Fragment>
        ))}
      </group>
    </group>
  );
}

export const DroneCanvas: React.FC<DroneCanvasProps> = ({
  drone,
  exploded,
  selectedComponent,
  onSelectComponent,
}) => {
  return (
    <div className="w-full h-full min-h-[440px] md:min-h-[520px] relative">
      <Canvas
        camera={{ position: [2.5, 2.2, 3.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[6, 10, 6]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-6, -4, -6]} intensity={0.4} color="#06b6d4" />
        <pointLight position={[0, 3, 0]} intensity={1.5} color="#38bdf8" />
        <pointLight position={[0, -2, 0]} intensity={1.2} color="#8b5cf6" />

        <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.3}>
          <Drone3DModel
            drone={drone}
            exploded={exploded}
            selectedComponent={selectedComponent}
            onSelectComponent={onSelectComponent}
          />
        </Float>

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={1.8}
          maxDistance={6.5}
          maxPolarAngle={Math.PI / 2 + 0.25}
          dampingFactor={0.05}
          autoRotate={!exploded && selectedComponent === null}
          autoRotateSpeed={0.8}
        />
      </Canvas>

      {/* Floating Instructions */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none text-xs text-slate-400 font-mono">
        <span className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-700/60 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Interactive 3D · Click parts or toggle Exploded View
        </span>
        <span className="hidden sm:inline-block bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-700/60 backdrop-blur-md">
          Scroll to Zoom · Drag to Orbit
        </span>
      </div>
    </div>
  );
};
