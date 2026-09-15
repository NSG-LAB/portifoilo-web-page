import React, { useState } from 'react';
import { droneData } from '../data/droneData';
import { DroneCanvas } from '../components3d/DroneCanvas';
import { Plane, Cpu, Layers, Zap, Radio, Battery, Gauge, Eye, RotateCw, CheckCircle2 } from 'lucide-react';

export const DroneSection: React.FC = () => {
  const [selectedDroneId, setSelectedDroneId] = useState<'delivery' | 'scout'>('delivery');
  const [exploded, setExploded] = useState<boolean>(false);
  const [selectedComponentId, setSelectedComponentId] = useState<string | null>(null);

  const activeDrone = droneData.find((d) => d.id === selectedDroneId) || droneData[0];

  const selectedComponentDetail = activeDrone.components.find((c) => c.id === selectedComponentId);

  return (
    <section id="drone" className="py-24 relative overflow-hidden" aria-label="Garuda Club Drone Engineering">
      {/* Background ambient aerospace glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3 w-fit">
              <Plane className="w-3.5 h-3.5" />
              <span>Garuda UAV Club · Avionics & Systems Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Hardware & Avionics: Autonomous Multi-Rotors.
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
              Software meets physical physics. As Avionics Lead, I integrate flight controllers, calibrate triple-redundant IMUs, build long-range telemetry links, and validate autonomous missions.
            </p>
          </div>

          {/* Drone Selector Tabs */}
          <div className="mt-6 md:mt-0 flex p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            <button
              onClick={() => {
                setSelectedDroneId('delivery');
                setSelectedComponentId(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                selectedDroneId === 'delivery'
                  ? 'bg-cyan-500 text-slate-950 shadow-glow-cyan-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Drone 1 · Delivery (320KV)
            </button>
            <button
              onClick={() => {
                setSelectedDroneId('scout');
                setSelectedComponentId(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                selectedDroneId === 'scout'
                  ? 'bg-cyan-500 text-slate-950 shadow-glow-cyan-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Drone 2 · Scout (1000KV)
            </button>
          </div>
        </div>

        {/* Interactive 3D Drone Inspector + Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 3D Canvas Viewport (Col 7) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="rounded-3xl bg-slate-900/50 border border-slate-800/90 backdrop-blur-xl shadow-glass overflow-hidden relative group">
              {/* Canvas Top Bar Controls */}
              <div className="p-4 sm:p-5 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 bg-slate-950/60 z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-mono font-bold text-white">{activeDrone.name}</span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Exploded View Button */}
                  <button
                    onClick={() => setExploded(!exploded)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                      exploded
                        ? 'bg-cyan-500 text-slate-950 shadow-glow-cyan-sm'
                        : 'bg-slate-900 text-slate-300 border border-slate-700 hover:text-white'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>{exploded ? 'Collapse View' : 'Exploded View'}</span>
                  </button>

                  {/* Reset Selection */}
                  {selectedComponentId && (
                    <button
                      onClick={() => setSelectedComponentId(null)}
                      className="text-xs font-mono text-slate-400 hover:text-white px-2 py-1"
                    >
                      Clear Selection
                    </button>
                  )}
                </div>
              </div>

              {/* 3D Canvas */}
              <div className="h-[460px] sm:h-[520px] w-full">
                <DroneCanvas
                  drone={activeDrone}
                  exploded={exploded}
                  selectedComponent={selectedComponentId}
                  onSelectComponent={(id) => setSelectedComponentId(id)}
                />
              </div>

              {/* Selected Component Info Overlay */}
              {selectedComponentDetail && (
                <div className="absolute top-20 left-4 right-4 sm:right-auto sm:max-w-xs p-4 rounded-2xl bg-slate-950/90 border border-cyan-500/60 backdrop-blur-xl shadow-xl animate-fadeIn">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">Sub-assembly Inspector</span>
                    <button
                      onClick={() => setSelectedComponentId(null)}
                      className="text-xs text-slate-400 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>
                  <h4 className="text-sm font-display font-bold text-white">{selectedComponentDetail.name}</h4>
                  <p className="text-xs text-slate-300 mt-1 font-sans leading-relaxed">
                    {selectedComponentDetail.description}
                  </p>
                </div>
              )}
            </div>

            {/* Quick Component Selection Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-slate-500">Inspect Subsystems:</span>
              {activeDrone.components.map((comp) => (
                <button
                  key={comp.id}
                  onClick={() => setSelectedComponentId(comp.id === selectedComponentId ? null : comp.id)}
                  className={`px-3 py-1 rounded-lg border transition-all ${
                    selectedComponentId === comp.id
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500 shadow-glow-cyan-sm'
                      : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {comp.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Technical Specifications Breakdown (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Flight Metrics Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1 mb-1">
                  <Gauge className="w-3.5 h-3.5 text-cyan-400" /> Max Speed
                </span>
                <span className="text-xl font-display font-bold text-white">{activeDrone.metrics.maxSpeed}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1 mb-1">
                  <Battery className="w-3.5 h-3.5 text-emerald-400" /> Flight Endurance
                </span>
                <span className="text-xl font-display font-bold text-white">{activeDrone.metrics.flightTime}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1 mb-1">
                  <Zap className="w-3.5 h-3.5 text-violet-400" /> Payload
                </span>
                <span className="text-xl font-display font-bold text-white">{activeDrone.metrics.payloadCapacity}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1 mb-1">
                  <Radio className="w-3.5 h-3.5 text-amber-400" /> All-Up Weight
                </span>
                <span className="text-xl font-display font-bold text-white">{activeDrone.metrics.allUpWeight}</span>
              </div>
            </div>

            {/* Complete Hardware BOM Specs */}
            <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-glass">
              <h3 className="text-base font-display font-bold text-white mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <span>Verified Hardware Specifications</span>
              </h3>

              <div className="divide-y divide-slate-800/80 text-xs font-mono">
                <div className="py-2.5 flex justify-between gap-3">
                  <span className="text-slate-500">Motors:</span>
                  <span className="text-right text-slate-200 font-semibold">{activeDrone.specs.motors}</span>
                </div>
                <div className="py-2.5 flex justify-between gap-3">
                  <span className="text-slate-500">Propellers:</span>
                  <span className="text-right text-slate-200 font-semibold">{activeDrone.specs.propellers}</span>
                </div>
                <div className="py-2.5 flex justify-between gap-3">
                  <span className="text-slate-500">Autopilot / FC:</span>
                  <span className="text-right text-cyan-300 font-semibold">{activeDrone.specs.flightController}</span>
                </div>
                <div className="py-2.5 flex justify-between gap-3">
                  <span className="text-slate-500">Navigation / GPS:</span>
                  <span className="text-right text-slate-200 font-semibold">{activeDrone.specs.gps}</span>
                </div>
                <div className="py-2.5 flex justify-between gap-3">
                  <span className="text-slate-500">RC & Telemetry:</span>
                  <span className="text-right text-slate-200 font-semibold">{activeDrone.specs.telemetry}</span>
                </div>
                <div className="py-2.5 flex justify-between gap-3">
                  <span className="text-slate-500">ESC:</span>
                  <span className="text-right text-slate-200 font-semibold">{activeDrone.specs.esc}</span>
                </div>
                <div className="py-2.5 flex justify-between gap-3">
                  <span className="text-slate-500">Battery Pack:</span>
                  <span className="text-right text-emerald-300 font-semibold">{activeDrone.specs.battery}</span>
                </div>
                <div className="py-2.5 flex justify-between gap-3">
                  <span className="text-slate-500">Frame Chassis:</span>
                  <span className="text-right text-slate-200 font-semibold">{activeDrone.specs.frame}</span>
                </div>
                <div className="py-2.5 flex justify-between gap-3">
                  <span className="text-slate-500">Companion Computer:</span>
                  <span className="text-right text-violet-300 font-semibold">{activeDrone.specs.onboardComputer}</span>
                </div>
              </div>
            </div>

            {/* Key Mission Features */}
            <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-glass">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                Mission Capabilities
              </h4>
              <ul className="space-y-2">
                {activeDrone.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
