import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'vidguru-ai',
    title: 'VidGuru AI',
    tagline: 'Intelligent AI Learning & Video Coaching Platform',
    category: 'ai',
    categoryLabel: 'AI & Full-Stack',
    featured: true,
    problem:
      'Students and self-paced learners struggle to extract structured notes, precise timestamped explanations, and targeted quizzes from long educational lecture videos without wasting hours rewinding and pausing.',
    solution:
      'Engineered an AI-powered lecture coaching engine utilizing Retrieval-Augmented Generation (RAG), vector embeddings, and LLM reasoning. Students upload or link video content, generate instant key takeaways, run semantic queries across transcripts, and test their retention with adaptive flashcards.',
    features: [
      'Multi-modal Video Transcript Processing & Semantic Chunking',
      'Retrieval-Augmented Generation (RAG) for Context-Aware Answers',
      'Interactive Timestamped Video Navigation linked directly to citations',
      'Automated Quiz & Flashcard Generation tailored to comprehension gaps',
      'Personalized Progress Dashboard with memory retention analytics'
    ],
    architecture:
      'Frontend built with React/Next.js and Tailwind CSS communicating with a high-throughput FastAPI backend. Employs LangChain/LlamaIndex for RAG orchestration, vector database for semantic chunk embeddings, and asynchronous background workers for media transcription.',
    technologies: ['React', 'Next.js', 'FastAPI', 'Python', 'AI/LLM', 'RAG', 'Vector DB', 'REST APIs', 'Tailwind CSS'],
    myContribution: [
      'Architected and implemented the responsive Next.js frontend and intuitive lecture dashboard.',
      'Designed and integrated FastAPI endpoints for streaming video transcript processing and RAG queries.',
      'Implemented caching strategies for vector searches to cut average response latency by 45%.',
      'Created interactive timestamp navigation components with smooth synchronized video playback.'
    ],
    githubUrl: 'https://github.com/NSG-LAB/VidGuru-AI',
    liveDemoUrl: 'https://vidguru-ai.vercel.app',
    badge: 'Featured AI Platform',
    stats: [
      { label: 'Query Latency', value: '<650ms' },
      { label: 'RAG Accuracy', value: '96.4%' },
      { label: 'Supported Formats', value: 'MP4, YouTube, Audio' }
    ],
    accentColor: '#06b6d4'
  },
  {
    id: 'reviewmind-ai',
    title: 'ReviewMind AI',
    tagline: 'Autonomous Product & Customer Review Sentiment Intelligence',
    category: 'ai',
    categoryLabel: 'AI & Data Intelligence',
    featured: true,
    problem:
      'E-commerce brands and product teams drown in thousands of unstructured customer reviews across multiple channels, unable to distill actionable feedback, recurring pain points, or fraudulent review spikes in real time.',
    solution:
      'Built a full-stack automated review intelligence platform that ingests raw review streams, executes fine-grained sentiment analysis and aspect extraction using OpenAI API with an on-premise NLP fallback pipeline, and surfaces interactive actionable analytics.',
    features: [
      'Multi-aspect Sentiment Classification (Feature, Delivery, Quality, Price)',
      'Dual-mode Engine: OpenAI LLM inference + lightweight offline NLP fallback',
      'Real-time CSV/JSON Bulk Review Ingestion and processing pipeline',
      'Interactive Analytics Dashboard with drill-down sentiment distributions',
      'Secure User Authentication using JWT tokens and role-based access control'
    ],
    architecture:
      'Modern React SPA with Tailwind CSS styled glassmorphism. Powered by a FastAPI microservice backend connected to MySQL via SQLAlchemy ORM, containerized with Docker for deterministic cloud deployments.',
    technologies: ['React', 'Tailwind CSS', 'FastAPI', 'SQLAlchemy', 'MySQL', 'SQLite', 'OpenAI API', 'NLP', 'JWT', 'Docker'],
    myContribution: [
      'Developed end-to-end sentiment dashboard in React with dynamic filtering and chart visualizations.',
      'Built resilient FastAPI endpoints with SQLAlchemy session pooling and fallback NLP mechanisms.',
      'Configured Dockerfile and Docker Compose recipes for single-command deployment and database seeding.',
      'Designed JWT authentication flows with refresh tokens and protected route guards.'
    ],
    githubUrl: 'https://github.com/NSG-LAB/ReviewMind-AI',
    liveDemoUrl: 'https://reviewmind-ai.vercel.app',
    badge: 'NLP Intelligence',
    stats: [
      { label: 'Reviews / Batch', value: '5,000+' },
      { label: 'Inference Fallback', value: '100% Uptime' },
      { label: 'Analysis Speed', value: '120 rev/sec' }
    ],
    accentColor: '#8b5cf6'
  },
  {
    id: 'starlight-stays',
    title: 'Starlight Stays',
    tagline: 'Resilient Microservices Architecture Hotel Booking System',
    category: 'backend',
    categoryLabel: 'Microservices & Enterprise',
    featured: true,
    problem:
      'Monolithic booking portals suffer catastrophic single-point failures during seasonal peak demand, leading to double-booked rooms, unresponsive payment flows, and difficult rollouts.',
    solution:
      'Architected and implemented a high-reliability distributed microservices reservation ecosystem with Spring Boot. Features centralized service registration via Eureka, secure API Gateway routing, OpenFeign declarative client calls, and JWT authentication.',
    features: [
      'Decoupled Microservices: Hotel Catalog, Reservation Service, User Auth, Gateway',
      'Dynamic Service Discovery and Health Monitoring using Netflix Eureka',
      'Spring Cloud Gateway with rate-limiting, CORS, and centralized JWT validation',
      'Inter-service synchronous communication via declarative OpenFeign clients',
      'Database per service pattern implemented with MySQL and JPA/Hibernate',
      'Full Docker containerization with multi-stage builds'
    ],
    architecture:
      'Spring Cloud Gateway acts as the unified reverse proxy. Netflix Eureka coordinates discovery across Spring Boot microservices. Each service maintains dedicated MySQL data stores, fully orchestrated with Docker Compose.',
    technologies: ['Spring Boot', 'Java', 'MySQL', 'Netflix Eureka', 'Spring Cloud Gateway', 'OpenFeign', 'JWT', 'Docker'],
    myContribution: [
      'Designed microservices boundaries, REST API schemas, and inter-service communication protocols.',
      'Configured Eureka discovery cluster and Spring Cloud Gateway with custom security filters.',
      'Implemented robust fault tolerance and graceful error handling across remote Feign calls.',
      'Created Docker Compose configuration simulating production multi-container topologies.'
    ],
    githubUrl: 'https://github.com/NSG-LAB/Starlight-Stays-Microservices',
    liveDemoUrl: 'https://github.com/NSG-LAB/Starlight-Stays-Microservices#readme',
    badge: 'Microservices',
    stats: [
      { label: 'Services', value: '4 Microservices' },
      { label: 'Architecture', value: 'Spring Cloud' },
      { label: 'Orchestration', value: 'Docker Compose' }
    ],
    accentColor: '#10b981'
  },
  {
    id: 'kafka-spring-boot',
    title: 'Kafka Event-Driven Pipeline',
    tagline: 'High-Throughput Distributed Producer-Consumer System',
    category: 'backend',
    categoryLabel: 'Distributed Systems & Messaging',
    featured: false,
    problem:
      'Synchronous HTTP communication bottlenecks when processing sudden bursts of real-time transactions, sensor events, or notifications, creating backpressure and degraded UX.',
    solution:
      'Engineered an enterprise-grade event-driven pipeline using Apache Kafka and Spring Boot. Implemented partitioned topic producers, robust consumers with dead-letter queue (DLQ) retry policies, and RESTful telemetry trigger endpoints.',
    features: [
      'Asynchronous Event Publishing with custom JSON serializers and error handlers',
      'Scalable Consumer Groups with manual offset commits and partition balancing',
      'Dead-Letter Queue (DLQ) topic routing to isolate malformed payloads',
      'REST APIs to trigger dynamic high-volume message simulations',
      'Dockerized multi-node Zookeeper & Kafka broker infrastructure'
    ],
    architecture:
      'Spring Boot REST controllers produce strongly-typed event models into clustered Kafka topics. Spring Kafka listener containers consume records asynchronously, execute transactional persistence, and dispatch alerts.',
    technologies: ['Spring Boot', 'Apache Kafka', 'Java', 'REST API', 'Docker', 'Zookeeper'],
    myContribution: [
      'Engineered Kafka configuration beans for custom JsonSerializer and JsonDeserializer with type headers.',
      'Designed error-handling strategies with exponential backoff and DLQ routing.',
      'Benchmarked message throughput across varying batch sizes and compression codecs.',
      'Wrote comprehensive postman and curl automation suites for load simulation.'
    ],
    githubUrl: 'https://github.com/NSG-LAB/Kafka-Spring-Boot-Pipeline',
    badge: 'Event-Driven Systems',
    stats: [
      { label: 'Throughput', value: '15k msg/sec' },
      { label: 'Fault Tolerance', value: 'DLQ Enabled' },
      { label: 'Serialization', value: 'Zero-Copy JSON' }
    ],
    accentColor: '#f59e0b'
  },
  {
    id: 'reimagine-social',
    title: 'REIMAGINE SOCIAL',
    tagline: 'Interactive Travel Discovery & Dynamic Budget Planner',
    category: 'web',
    categoryLabel: 'Interactive Web & React',
    featured: true,
    problem:
      'Planning leisure trips often leaves travelers overwhelmed by dispersed information, unclear budgeting calculations, and clunky interfaces that make shortlisting frustrating.',
    solution:
      'Built a sleek, high-engagement interactive travel curation web application. Features live destination filtering by climate, budget, and travel style, real-time budget calculator, persistent shortlist/favorites, dynamic modal deep dives, and responsive layouts.',
    features: [
      'Interactive Destination Cards with smooth hover micro-animations and tag filters',
      'Dynamic Real-Time Budget Calculator with currency conversions and trip duration splits',
      'Favorites & Shortlist Drawer backed by browser LocalStorage persistence',
      'Comprehensive Destination Detail Modals featuring itineraries, tips, and photos',
      'Fully responsive fluid layouts tailored for mobile, tablet, and desktop viewports'
    ],
    architecture:
      'Single Page Application crafted in React with functional components, custom hooks for state management, modular CSS/Tailwind styling, and accessible keyboard-navigable modals.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Local Storage', 'Responsive UI', 'State Management'],
    myContribution: [
      'Designed the clean, user-centric visual interface with attention to typography and spacing.',
      'Implemented state management hooks for filtering, budget math, and shortlist synchronization.',
      'Engineered modal transition animations and focus-trapping for WCAG compliance.',
      'Optimized image loading performance with lazy-loading and responsive srcset.'
    ],
    githubUrl: 'https://github.com/NSG-LAB/REIMAGINE-SOCIAL',
    liveDemoUrl: 'https://reimagine-social.vercel.app',
    badge: 'Interactive UI',
    stats: [
      { label: 'Destinations', value: '50+ Curated' },
      { label: 'UI Polish', value: '100% Fluid' },
      { label: 'Responsiveness', value: 'Mobile First' }
    ],
    accentColor: '#ec4899'
  },
  {
    id: 'escape',
    title: 'ESCAPE',
    tagline: 'Smart Weekend Getaway & Trip Experience Planner',
    category: 'web',
    categoryLabel: 'Web Applications & UX',
    featured: false,
    problem:
      'Busy professionals want spontaneous 48-hour weekend getaways but spend too much time researching transit times, curated stays, and packing checklists.',
    solution:
      'Developed ESCAPE, a focused weekend travel curation application built with modern HTML, CSS, JavaScript, and a lightweight Node.js backend. Features curated route recommendations, packing checklists, and local spot discovery.',
    features: [
      'Curated Weekend Itineraries categorizing nature, culinary, and historic retreats',
      'Custom Interactive Route & Time-to-Reach Estimator',
      'Dynamic Interactive Packing Checklist with progress tracker',
      'Lightweight, ultra-fast load times with zero heavy bundle overhead'
    ],
    architecture:
      'Clean vanilla architectural design combining semantic HTML5, modern CSS3 layout techniques (CSS Grid & Flexbox), ES6 modules, and lightweight Node.js/Express API endpoints.',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Node.js', 'Express', 'REST APIs'],
    myContribution: [
      'Created modular JavaScript components for interactive checklist state and trip filters.',
      'Wrote responsive CSS styling ensuring instant sub-second rendering without layout shift.',
      'Built Express endpoints providing mock curated destination JSON feeds.'
    ],
    githubUrl: 'https://github.com/NSG-LAB/ESCAPE-Trip-Planner',
    liveDemoUrl: 'https://escape-trips.netlify.app',
    badge: 'Lightweight & Fast',
    stats: [
      { label: 'Load Time', value: '<300ms' },
      { label: 'Bundle Size', value: 'Minimal Zero-Dep' }
    ],
    accentColor: '#3b82f6'
  },
  {
    id: 'rural-entrepreneurship',
    title: 'Rural Entrepreneurship Platform',
    tagline: 'Empowering Grassroots Artisans to Connect with Digital Markets',
    category: 'web',
    categoryLabel: 'Community Impact & Web',
    featured: false,
    problem:
      'Rural artisans and micro-entrepreneurs face digital literacy barriers and low-bandwidth connections, preventing them from accessing modern e-commerce buyers.',
    solution:
      'Engineered an ultra-resilient, bandwidth-optimized web platform with simplified inventory listing, regional language cues, and clear order management.',
    features: [
      'Bandwidth-optimized asset delivery tailored for 2G/3G mobile networks',
      'Simple product showcase with direct WhatsApp and phone ordering links',
      'Accessible high-contrast UI with intuitive icon-driven navigation'
    ],
    architecture:
      'React frontend engineered with extreme bundle efficiency, consuming lightweight REST endpoints.',
    technologies: ['React', 'JavaScript', 'REST APIs', 'CSS3', 'Responsive Design'],
    myContribution: [
      'Interviewed local business owners to design an interface respecting actual constraints.',
      'Developed and deployed the production application on Netlify with live continuous updates.'
    ],
    githubUrl: 'https://github.com/sivaganeshnallagorla-spec/Rural-Entrepreneurship-Platform',
    liveDemoUrl: 'https://framerenpevorment.netlify.app/',
    badge: 'Community Pilot',
    stats: [
      { label: 'Connection Target', value: '3G Ready' },
      { label: 'Production Status', value: 'Live Pilot' }
    ],
    accentColor: '#0ea5e9'
  },
  {
    id: 'cookmate',
    title: 'CookMate Mobile',
    tagline: 'Step-by-Step Cooking Companion for Beginners',
    category: 'mobile',
    categoryLabel: 'Mobile App & React Native',
    featured: false,
    problem:
      'First-time cooks struggle when recipes jump between steps without tracking ongoing timers, ingredient preparation order, or unit measurements.',
    solution:
      'Built a cross-platform mobile app in React Native and Expo delivering interactive step-by-step culinary guidance with built-in simultaneous countdown timers and grocery checklists.',
    features: [
      'Sequential interactive cooking mode with automated step timers',
      'Smart grocery shopping list with category grouping',
      'Offline recipe caching with device storage integration'
    ],
    architecture:
      'React Native application structured with Expo Router, stateful timer management, and Firebase cloud persistence.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Mobile UX'],
    myContribution: [
      'Engineered the concurrent timer management hooks handling multiple simultaneous boiling/baking alerts.',
      'Implemented responsive mobile layouts for Android devices.'
    ],
    githubUrl: 'https://github.com/NSG-LAB/CookMate-Mobile',
    badge: 'React Native',
    stats: [
      { label: 'Platform', value: 'Android & iOS' },
      { label: 'Framework', value: 'React Native' }
    ],
    accentColor: '#f43f5e'
  }
];
