import { Certification } from '../types';

export const certificatesData: Certification[] = [
  {
    id: 'cert-react-dev',
    title: 'Modern React & Cross-Platform Development',
    issuer: 'Meta / Coursera Professional Certification',
    issueDate: '2024',
    credentialId: 'META-REACT-98231',
    credentialUrl: 'https://coursera.org/verify',
    skills: ['React', 'State Management', 'Hooks', 'Responsive UI', 'Jest Testing'],
    badgeColor: '#06b6d4'
  },
  {
    id: 'cert-java-spring',
    title: 'Enterprise Java & Spring Boot Microservices',
    issuer: 'Oracle / Udemy Certification',
    issueDate: '2024',
    credentialId: 'SPRG-BOOT-7721',
    credentialUrl: 'https://udemy.com/certificate',
    skills: ['Spring Boot', 'Microservices', 'Eureka', 'Spring Cloud Gateway', 'Docker'],
    badgeColor: '#10b981'
  },
  {
    id: 'cert-python-fastapi',
    title: 'FastAPI, Modern Python & Asynchronous Web Services',
    issuer: 'DeepLearning.AI / Professional Certification',
    issueDate: '2024',
    credentialId: 'DLAI-FASTAPI-551',
    credentialUrl: 'https://coursera.org',
    skills: ['FastAPI', 'Pydantic', 'Async Python', 'AI APIs', 'JWT Security'],
    badgeColor: '#8b5cf6'
  },
  {
    id: 'cert-mysql-dba',
    title: 'Relational Database Design & MySQL Optimization',
    issuer: 'HackerRank / Certified SQL Developer',
    issueDate: '2023',
    credentialId: 'HR-SQL-GOLD-441',
    credentialUrl: 'https://hackerrank.com/certificates',
    skills: ['MySQL', 'Indexing', 'Query Tuning', 'ACID Transactions', 'Schema Modeling'],
    badgeColor: '#f59e0b'
  },
  {
    id: 'cert-garuda-avionics',
    title: 'UAV Autopilot Systems & Pixhawk Hardware Integration',
    issuer: 'Garuda UAV Club & Robotics Lab, KL University',
    issueDate: '2024',
    credentialId: 'GARUDA-UAV-ENG-01',
    credentialUrl: '#drone',
    skills: ['Pixhawk Cube+', 'ArduPilot', 'Telemetry Links', 'Power Systems', 'Safety Protocols'],
    badgeColor: '#ec4899'
  }
];
