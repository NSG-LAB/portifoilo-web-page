import { SkillCategory } from '../types';

export const skillsCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Systems',
    description: 'Engineering responsive, accessible, high-performance web interfaces with modern frameworks.',
    color: '#06b6d4',
    skills: [
      {
        name: 'React',
        level: 95,
        experience: '2+ years',
        category: 'frontend',
        description: 'Single-page applications, custom hooks, context state, component composition, and virtual DOM optimization.',
        connectedProjects: ['vidguru-ai', 'reviewmind-ai', 'reimagine-social', 'rural-entrepreneurship']
      },
      {
        name: 'TypeScript',
        level: 90,
        experience: '1.5+ years',
        category: 'frontend',
        description: 'Static type checking, interfaces, generics, strict type safety across complex client codebases.',
        connectedProjects: ['vidguru-ai', 'cookmate']
      },
      {
        name: 'JavaScript (ES6+)',
        level: 95,
        experience: '3+ years',
        category: 'frontend',
        description: 'Async/await, DOM APIs, closures, functional programming paradigms, and event-driven patterns.',
        connectedProjects: ['escape', 'reimagine-social', 'rural-entrepreneurship']
      },
      {
        name: 'HTML5 & Semantic Web',
        level: 98,
        experience: '3+ years',
        category: 'frontend',
        description: 'Accessible markup, ARIA roles, SEO structuring, meta tags, and WCAG compliance.',
        connectedProjects: ['escape', 'reimagine-social', 'rural-entrepreneurship']
      },
      {
        name: 'CSS3 & Tailwind CSS',
        level: 92,
        experience: '2.5+ years',
        category: 'frontend',
        description: 'Glassmorphism, CSS Grid/Flexbox, keyframe animations, responsive media queries, and utility systems.',
        connectedProjects: ['vidguru-ai', 'reviewmind-ai', 'reimagine-social', 'escape']
      },
      {
        name: 'Next.js',
        level: 80,
        experience: '1 year',
        category: 'frontend',
        description: 'App router, server-side rendering, streaming responses, and static site generation.',
        connectedProjects: ['vidguru-ai']
      }
    ]
  },
  {
    id: 'crossplatform',
    name: 'Cross-Platform & Mobile',
    description: 'Crafting performant native-like mobile applications for iOS and Android with single codebases.',
    color: '#ec4899',
    skills: [
      {
        name: 'React Native',
        level: 88,
        experience: '1.5+ years',
        category: 'crossplatform',
        description: 'Cross-platform mobile architecture, native components, gesture responders, and device hardware integration.',
        connectedProjects: ['cookmate']
      },
      {
        name: 'Expo',
        level: 88,
        experience: '1.5+ years',
        category: 'crossplatform',
        description: 'Expo Application Services (EAS), OTA updates, device permissions, camera, and notification workflows.',
        connectedProjects: ['cookmate']
      },
      {
        name: 'Mobile UX & Responsive Patterns',
        level: 90,
        experience: '2+ years',
        category: 'crossplatform',
        description: 'Touch target ergonomics, smooth animations, safe-area adaptation, and offline-first mobile caching.',
        connectedProjects: ['cookmate', 'reimagine-social', 'rural-entrepreneurship']
      }
    ]
  },
  {
    id: 'backend',
    name: 'Backend & Distributed Services',
    description: 'Designing resilient microservices, high-throughput event buses, and scalable RESTful APIs.',
    color: '#10b981',
    skills: [
      {
        name: 'Spring Boot',
        level: 88,
        experience: '1.5+ years',
        category: 'backend',
        description: 'Enterprise REST services, Spring Cloud Gateway, Eureka discovery, Spring Security, and OpenFeign clients.',
        connectedProjects: ['starlight-stays', 'kafka-spring-boot']
      },
      {
        name: 'FastAPI',
        level: 90,
        experience: '1.5+ years',
        category: 'backend',
        description: 'High-speed asynchronous Python APIs, Pydantic type models, OpenAPI docs, and AI model orchestration.',
        connectedProjects: ['vidguru-ai', 'reviewmind-ai']
      },
      {
        name: 'REST APIs & Webhooks',
        level: 95,
        experience: '2.5+ years',
        category: 'backend',
        description: 'RESTful API specifications, HTTP idempotency, pagination, JWT authentication, and error standardisation.',
        connectedProjects: ['starlight-stays', 'vidguru-ai', 'reviewmind-ai', 'escape']
      },
      {
        name: 'Apache Kafka',
        level: 82,
        experience: '1 year',
        category: 'backend',
        description: 'Distributed event streaming, producer/consumer pipelines, partitioned topics, and Dead Letter Queues.',
        connectedProjects: ['kafka-spring-boot']
      },
      {
        name: 'Java',
        level: 90,
        experience: '2.5+ years',
        category: 'backend',
        description: 'Object-oriented programming, concurrency, collections framework, JVM internals, and Clean Architecture.',
        connectedProjects: ['starlight-stays', 'kafka-spring-boot']
      },
      {
        name: 'Python',
        level: 88,
        experience: '2+ years',
        category: 'backend',
        description: 'FastAPI microservices, vector search integration, NLP sentiment pipelines, and data automation scripts.',
        connectedProjects: ['vidguru-ai', 'reviewmind-ai']
      }
    ]
  },
  {
    id: 'database',
    name: 'Databases & Storage',
    description: 'Relational data modeling, schema optimization, transactional integrity, and vector stores.',
    color: '#f59e0b',
    skills: [
      {
        name: 'MySQL',
        level: 90,
        experience: '2.5+ years',
        category: 'database',
        description: 'Relational schema design, complex joins, indexing strategies, ACID transactions, and query execution plans.',
        connectedProjects: ['starlight-stays', 'reviewmind-ai']
      },
      {
        name: 'SQLAlchemy & Hibernate/JPA',
        level: 86,
        experience: '1.5+ years',
        category: 'database',
        description: 'Object-Relational Mapping, entity relationship cascades, connection pooling, and migrations.',
        connectedProjects: ['starlight-stays', 'reviewmind-ai']
      },
      {
        name: 'Vector Embeddings / RAG Stores',
        level: 80,
        experience: '1 year',
        category: 'database',
        description: 'Vector embeddings, cosine similarity search, chunk indexing for retrieval-augmented generation.',
        connectedProjects: ['vidguru-ai']
      }
    ]
  },
  {
    id: 'tools',
    name: 'DevOps, Avionics & Tools',
    description: 'Modern developer toolchains, containerization, version control, and drone hardware tools.',
    color: '#8b5cf6',
    skills: [
      {
        name: 'Git & GitHub',
        level: 95,
        experience: '3+ years',
        category: 'tools',
        description: 'Branching workflows, interactive rebasing, pull request reviews, and GitHub Actions CI/CD.',
        connectedProjects: ['vidguru-ai', 'reviewmind-ai', 'starlight-stays', 'kafka-spring-boot', 'reimagine-social']
      },
      {
        name: 'Docker',
        level: 85,
        experience: '1.5+ years',
        category: 'tools',
        description: 'Multi-stage Dockerfiles, Docker Compose multi-service topologies, network bridging, and volume persistence.',
        connectedProjects: ['reviewmind-ai', 'starlight-stays', 'kafka-spring-boot']
      },
      {
        name: 'VS Code & JetBrains',
        level: 95,
        experience: '3+ years',
        category: 'tools',
        description: 'Advanced debugging, multi-target configurations, linters, extensions, and keyboard shortcuts.',
        connectedProjects: ['vidguru-ai', 'reviewmind-ai', 'starlight-stays']
      },
      {
        name: 'Postman',
        level: 92,
        experience: '2+ years',
        category: 'tools',
        description: 'Automated API test collections, environment variables, mock servers, and contract validation.',
        connectedProjects: ['starlight-stays', 'kafka-spring-boot', 'vidguru-ai']
      },
      {
        name: 'Mission Planner & ArduPilot',
        level: 90,
        experience: '2+ years',
        category: 'tools',
        description: 'Avionics configuration, Pixhawk Orange Cube+ flashing, PID loop tuning, telemetry log analysis, and waypoint planning.',
        connectedProjects: []
      }
    ]
  }
];
