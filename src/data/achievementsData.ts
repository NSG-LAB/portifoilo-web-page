import { Achievement } from '../types';

export const achievementsData: Achievement[] = [
  {
    id: 'garuda-delivery-drone',
    year: '2025',
    title: 'Garuda Club Avionics Lead · Heavy Delivery UAV Mission',
    role: 'Lead Avionics & Systems Integrator',
    organization: 'Garuda UAV Club, KL University',
    description:
      'Spearheaded the design, flight-controller tuning, and field deployment of the heavy-lift autonomous delivery drone with Tarot 320KV motors and Pixhawk Orange Cube Plus. Successfully validated waypoint navigation and autonomous cargo release.',
    category: 'garuda',
    skillsGained: ['Avionics Engineering', 'ArduPilot/PX4', 'Telemetry Systems', 'Failsafe Design'],
    link: '#drone'
  },
  {
    id: 'national-hackathon-finalist',
    year: '2025',
    title: 'National AI & Smart City Hackathon Finalist',
    role: 'Full-Stack & Systems Lead',
    organization: 'National Innovation Challenge',
    description:
      'Architected an automated multi-modal grievance and review intelligence prototype (precursor to ReviewMind AI) within a 36-hour continuous hackathon, placing among top finalist teams.',
    category: 'hackathon',
    skillsGained: ['Rapid Prototyping', 'FastAPI', 'React', 'Team Leadership'],
  },
  {
    id: 'garuda-scout-quad',
    year: '2024',
    title: 'Agile Scout UAV Rapid Deployment Project',
    role: 'Hardware & Calibration Engineer',
    organization: 'Garuda Club Robotics Wing',
    description:
      'Engineered and bench-tested the high-speed F450 Scout quadcopter with CUAV Neo 3 GPS and Skydroid T12 data link, establishing a reusable baseline for rapid campus aerial mapping.',
    category: 'garuda',
    skillsGained: ['PID Calibration', 'GPS RTK Integration', 'Power Distribution', 'Field Operations'],
    link: '#drone'
  },
  {
    id: 'academic-merit-kl',
    year: '2023 - 2026',
    title: 'B.Tech CS&IT Academic Excellence & Lab Steward',
    role: 'Undergraduate Scholar',
    organization: 'KL University',
    description:
      'Consistent top-percentile academic standing in Computer Science & Information Technology, mentoring peers in Java, data structures, and web development fundamentals.',
    category: 'award',
    skillsGained: ['Computer Science Foundations', 'Algorithms', 'Peer Mentoring'],
  },
  {
    id: 'open-source-milestone',
    year: '2024',
    title: 'Open Source Community Stewardship Milestone',
    role: 'Repository Maintainer',
    organization: 'NSG-LAB GitHub',
    description:
      'Surpassed 12+ public repositories stewarded with rigorous commit hygiene, documentation standards, and continuous integration workflows.',
    category: 'milestone',
    skillsGained: ['Git Workflows', 'CI/CD Pipelines', 'Open Source DX'],
    link: 'https://github.com/NSG-LAB'
  }
];
