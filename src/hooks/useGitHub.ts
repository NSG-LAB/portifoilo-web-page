import { useState, useEffect } from 'react';
import { GitHubProfile, GitHubRepo } from '../types';

const FALLBACK_PROFILE: GitHubProfile = {
  login: 'NSG-LAB',
  avatar_url: 'https://avatars.githubusercontent.com/u/154807490?v=4',
  html_url: 'https://github.com/NSG-LAB',
  name: 'Nallagorla Siva Ganesh',
  bio: 'CS&IT Student | Frontend & Cross-Platform Developer | UAV Avionics Builder | Building calm, production-ready experiences.',
  public_repos: 14,
  followers: 8,
  following: 12
};

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 101,
    name: 'VidGuru-AI',
    description: 'Intelligent AI Learning & Lecture Video Coaching Platform using Next.js, FastAPI and RAG.',
    html_url: 'https://github.com/NSG-LAB/VidGuru-AI',
    stargazers_count: 18,
    forks_count: 5,
    language: 'TypeScript',
    topics: ['nextjs', 'fastapi', 'rag', 'llm', 'tailwind'],
    updated_at: '2025-02-10T14:30:00Z'
  },
  {
    id: 102,
    name: 'ReviewMind-AI',
    description: 'Autonomous Product & Customer Review Sentiment Intelligence with FastAPI, React and Docker.',
    html_url: 'https://github.com/NSG-LAB/ReviewMind-AI',
    stargazers_count: 14,
    forks_count: 3,
    language: 'Python',
    topics: ['fastapi', 'react', 'nlp', 'mysql', 'docker'],
    updated_at: '2025-02-05T18:20:00Z'
  },
  {
    id: 103,
    name: 'Starlight-Stays-Microservices',
    description: 'Resilient Microservices Architecture Hotel Booking System built with Spring Boot, Eureka and Docker.',
    html_url: 'https://github.com/NSG-LAB/Starlight-Stays-Microservices',
    stargazers_count: 12,
    forks_count: 4,
    language: 'Java',
    topics: ['spring-boot', 'eureka', 'microservices', 'jwt', 'docker'],
    updated_at: '2025-01-28T10:15:00Z'
  },
  {
    id: 104,
    name: 'Kafka-Spring-Boot-Pipeline',
    description: 'High-Throughput Distributed Producer-Consumer System using Apache Kafka, Spring Boot and Docker.',
    html_url: 'https://github.com/NSG-LAB/Kafka-Spring-Boot-Pipeline',
    stargazers_count: 9,
    forks_count: 2,
    language: 'Java',
    topics: ['apache-kafka', 'spring-boot', 'distributed-systems'],
    updated_at: '2025-01-15T12:00:00Z'
  },
  {
    id: 105,
    name: 'REIMAGINE-SOCIAL',
    description: 'Interactive Travel Discovery & Dynamic Budget Planner with real-time calculations and responsive UI.',
    html_url: 'https://github.com/NSG-LAB/REIMAGINE-SOCIAL',
    stargazers_count: 11,
    forks_count: 3,
    language: 'JavaScript',
    topics: ['react', 'travel-planner', 'budget-calculator', 'ui-ux'],
    updated_at: '2025-01-08T09:40:00Z'
  },
  {
    id: 106,
    name: 'portifoilo-web-page',
    description: 'Interactive 3D Developer Portfolio built with React, TypeScript, Three.js, R3F and Tailwind CSS.',
    html_url: 'https://github.com/NSG-LAB/portifoilo-web-page',
    stargazers_count: 24,
    forks_count: 6,
    language: 'TypeScript',
    topics: ['threejs', 'react-three-fiber', 'gsap', 'portfolio', '3d'],
    updated_at: '2025-02-14T11:00:00Z'
  }
];

export function useGitHub() {
  const [profile, setProfile] = useState<GitHubProfile>(FALLBACK_PROFILE);
  const [repos, setRepos] = useState<GitHubRepo[]>(FALLBACK_REPOS);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchGitHubData() {
      try {
        setLoading(true);
        const [profileRes, reposRes] = await Promise.all([
          fetch('https://api.github.com/users/NSG-LAB'),
          fetch('https://api.github.com/users/NSG-LAB/repos?sort=updated&per_page=12')
        ]);

        if (!profileRes.ok || !reposRes.ok) {
          // Rate limit or not found; graceful fallback
          throw new Error('Using verified local cache');
        }

        const profileData = await profileRes.json();
        const reposData = await reposRes.json();

        if (isMounted) {
          setProfile({
            login: profileData.login || FALLBACK_PROFILE.login,
            avatar_url: profileData.avatar_url || FALLBACK_PROFILE.avatar_url,
            html_url: profileData.html_url || FALLBACK_PROFILE.html_url,
            name: profileData.name || FALLBACK_PROFILE.name,
            bio: profileData.bio || FALLBACK_PROFILE.bio,
            public_repos: profileData.public_repos ?? FALLBACK_PROFILE.public_repos,
            followers: profileData.followers ?? FALLBACK_PROFILE.followers,
            following: profileData.following ?? FALLBACK_PROFILE.following,
          });

          if (Array.isArray(reposData) && reposData.length > 0) {
            const mappedRepos: GitHubRepo[] = reposData
              .filter((r: any) => !r.fork)
              .slice(0, 6)
              .map((r: any) => ({
                id: r.id,
                name: r.name,
                description: r.description || 'Public software engineering repository.',
                html_url: r.html_url,
                homepage: r.homepage,
                stargazers_count: r.stargazers_count,
                forks_count: r.forks_count,
                language: r.language || 'Code',
                topics: r.topics || [],
                updated_at: r.updated_at
              }));
            setRepos(mappedRepos.length > 0 ? mappedRepos : FALLBACK_REPOS);
          }
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message || 'Error fetching GitHub data');
          setProfile(FALLBACK_PROFILE);
          setRepos(FALLBACK_REPOS);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchGitHubData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { profile, repos, loading, error };
}
