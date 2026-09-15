import { DroneSpec } from '../types';

export const droneData: DroneSpec[] = [
  {
    id: 'delivery',
    name: 'Heavy-Lift Autonomous Delivery Drone',
    subtitle: 'Garuda Club Avionics Lab · Custom Heavy Payload Quadcopter',
    description:
      'Engineered for long-range logistics, humanitarian relief delivery, and autonomous payload drop missions. Built with custom reinforced carbon fiber arms, high-efficiency low-KV motors, and dual-redundant navigation systems.',
    role: 'Heavy Payload & Long-Range Logistics',
    status: 'Operational Flight Tested',
    specs: {
      motors: 'Tarot 320KV High-Torque Brushless Motors',
      propellers: '17-inch Carbon Fiber High-Efficiency Propellers',
      flightController: 'Pixhawk Orange Cube Plus (Triple-Redundant IMU)',
      telemetry: 'Skydroid T12 Long-Range Ground Station & RC Link',
      gps: 'CUAV Neo 3 GNSS / RTK High-Precision GPS',
      esc: 'Hobbywing XRotor 40A Opto High-Voltage ESCs',
      battery: 'Tattu 22,000mAh 6S High-Density LiPo Battery',
      frame: 'Custom High-Strength Carbon Fiber Frame with Damped Payload Rails',
      onboardComputer: 'Onboard Companion Computer for Computer Vision & Telemetry',
      cameraOrPayload: 'C12 High-Definition Camera & Servo-Actuated Drop Mechanism'
    },
    metrics: {
      maxSpeed: '65 km/h',
      flightTime: '38 minutes (hovering unloaded)',
      payloadCapacity: '3.5 kg payload',
      allUpWeight: '8.2 kg (AUW)'
    },
    keyFeatures: [
      'Triple-redundant internal damping IMUs in Pixhawk Orange Cube Plus for vibration immunity',
      'Autonomous waypoint missions and geofenced failsafe return-to-launch (RTL)',
      'Real-time telemetry link up to 15km line-of-sight with Skydroid T12 system',
      'Targeted payload servo-release triggered via RC channel or companion computer'
    ],
    components: [
      {
        id: 'fc',
        name: 'Pixhawk Orange Cube Plus',
        description: 'Advanced autopilot with triple-redundant IMU sensors and vibration damping platform.',
        highlightPosition: [0, 0.25, 0]
      },
      {
        id: 'gps',
        name: 'CUAV Neo 3 GPS',
        description: 'Multi-constellation GNSS with integrated compass mounted on elevated mast for magnetic interference rejection.',
        highlightPosition: [0, 0.85, -0.4]
      },
      {
        id: 'motors',
        name: 'Tarot 320KV Motors & 17" Props',
        description: 'Heavy lift brushless motors providing exceptional thrust efficiency at low RPM with carbon blades.',
        highlightPosition: [1.8, 0.35, 1.8]
      },
      {
        id: 'battery',
        name: 'Tattu 22,000mAh LiPo',
        description: 'Ultra-high capacity 6S battery positioned beneath center plate for low center of gravity.',
        highlightPosition: [0, -0.45, 0]
      },
      {
        id: 'esc',
        name: 'Hobbywing 40A ESCs',
        description: 'Industrial motor controllers mounted under arms with aluminum heat sinks for thermal endurance.',
        highlightPosition: [0.9, 0.05, 0.9]
      },
      {
        id: 'camera',
        name: 'C12 Camera & Companion Computer',
        description: 'Forward-facing HD reconnaissance feed with companion computer executing real-time object tracking.',
        highlightPosition: [0, -0.1, 0.8]
      }
    ]
  },
  {
    id: 'scout',
    name: 'Rapid Scout & Reconnaissance Quadcopter',
    subtitle: 'Garuda Club Avionics Lab · Agile F450 Platform',
    description:
      'Engineered for rapid field deployment, obstacle reconnaissance, and agile autonomous perimeter surveillance. Optimized for quick maneuverability, responsive control, and resilient emergency protocols.',
    role: 'Agile Reconnaissance & Aerial Survey',
    status: 'Field Validated & Active',
    specs: {
      motors: '1000KV BLDC High-Responsiveness Motors',
      propellers: '8-inch Carbon-Reinforced Propellers',
      flightController: 'Pixhawk Orange Cube Plus Autopilot',
      telemetry: 'Skydroid T12 Digital Video & Data Link',
      gps: 'CUAV Neo 3 GNSS Compass Module',
      esc: '30A SimonK / BLHeli High-Speed ESCs',
      battery: '4,200mAh 4S LiPo Power Pack',
      frame: 'F450 Glass-Fiber & Polyamide Arm Quad Frame',
      onboardComputer: 'Onboard Companion Computer for Path Planning',
      cameraOrPayload: 'Micro FPV Recon Camera with 5.8GHz / Digital Link'
    },
    metrics: {
      maxSpeed: '85 km/h',
      flightTime: '22 minutes agile cruise',
      payloadCapacity: '850 g sensor payload',
      allUpWeight: '1.45 kg'
    },
    keyFeatures: [
      'Lightweight F450 airframe optimized for rapid acceleration and tight cornering',
      'Pixhawk Orange Cube Plus with ArduPilot firmware and custom PID tuning',
      'Quick-swap battery tray for continuous field rotation',
      'Failsafe geofence and low-voltage auto-landing protocols'
    ],
    components: [
      {
        id: 'fc',
        name: 'Pixhawk Orange Cube Plus',
        description: 'Compact high-precision autopilot with fail-safe algorithms.',
        highlightPosition: [0, 0.2, 0]
      },
      {
        id: 'motors',
        name: '1000KV BLDC & 8" Propellers',
        description: 'High-RPM motors delivering fast thrust response during dynamic maneuvering.',
        highlightPosition: [1.2, 0.2, 1.2]
      },
      {
        id: 'gps',
        name: 'CUAV Neo 3 GPS',
        description: 'High-accuracy RTK-compatible GNSS receiver with fast satellite acquisition.',
        highlightPosition: [0, 0.7, -0.3]
      },
      {
        id: 'battery',
        name: '4,200mAh 4S LiPo',
        description: 'Balanced power-to-weight energy source for 20+ minute surveillance flights.',
        highlightPosition: [0, -0.3, 0]
      }
    ]
  }
];
