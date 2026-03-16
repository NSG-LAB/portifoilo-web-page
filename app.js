const projects = [
  {
    title: 'Rural Entrepreneurship Platform',
    description:
      'Developed a responsive web platform connecting farmers to digital opportunities that grow their income.',
    type: 'platform',
    stack: ['React', 'Responsive Web', 'REST APIs'],
    year: '2025',
    links: [
      { label: 'Live Demo', href: 'https://framerenpevorment.netlify.app/' },
      {
        label: 'GitHub',
        href: 'https://github.com/sivaganeshnallagorla-spec/Rural-Entrepreneurship-Platform'
      }
    ]
  },
  {
    title: 'Custom Portfolio Website',
    description:
      'Built a personal portfolio to showcase video editing and tech work with a clean, fast UI.',
    type: 'web',
    stack: ['HTML', 'CSS', 'JavaScript'],
    year: '2026',
    links: [
      { label: 'Live Demo', href: 'https://prishwanthsai.netlify.app/' },
      { label: 'GitHub', href: 'https://github.com/NSG-LAB' }
    ]
  },
  {
    title: 'CookMate',
    description:
      'React Native app (in progress) that guides cooks through easy meal steps and recipe planning.',
    type: 'mobile',
    stack: ['React Native', 'Expo', 'Firebase'],
    year: 'In Progress',
    links: [{ label: 'Roadmap', href: 'https://github.com/NSG-LAB' }]
  }
];

const education = [
  {
    role: 'B.Tech · Computer Science & Information Technology',
    place: 'KL University',
    timeframe: 'Currently Pursuing',
    summary: 'Focusing on software development, web technologies, and mobile app engineering.'
  },
  {
    role: 'Intermediate (MPC)',
    place: 'Narayana Junior College, Tenali, Guntur',
    timeframe: 'Completed',
    summary: 'Strengthened mathematics and physics fundamentals for engineering studies.'
  },
  {
    role: 'Secondary School (10th)',
    place: 'Narayana EM High School, Tenali, Guntur',
    timeframe: 'Completed',
    summary: 'Graduated with a focus on science and logical reasoning foundations.'
  }
];

const projectsGrid = document.getElementById('projectsGrid');
const timelineList = document.getElementById('timeline');
const yearTarget = document.getElementById('year');
const filterButtons = document.querySelectorAll('.filter-btn');
const navLinks = document.querySelectorAll('.hero__links a');
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-toggle__icon');
const body = document.body;
const menuButton = document.querySelector('.hero__menu');
const navContainer = document.querySelector('.hero__links');
const metricValues = document.querySelectorAll('.metric__value');
const heroNav = document.querySelector('.hero__nav');
const pageSections = document.querySelectorAll('main section');

const syncNavState = () => {
  if (window.innerWidth > 900) {
    navContainer.classList.remove('is-open');
    navContainer.setAttribute('aria-hidden', 'false');
    menuButton.setAttribute('aria-expanded', 'true');
    return;
  }
  const isOpen = navContainer.classList.contains('is-open');
  navContainer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
};

const setMobileNavOpen = (shouldOpen) => {
  navContainer.classList.toggle('is-open', shouldOpen);
  syncNavState();
};

const renderProjects = (filter = 'all') => {
  const filtered = projects.filter((project) => filter === 'all' || project.type === filter);
  projectsGrid.innerHTML = filtered
    .map((project) => {
      const displayTag = `${project.year} · ${project.type}`;
      const stacks = project.stack.map((item) => `<span>${item}</span>`).join('');
      const links = Array.isArray(project.links)
        ? project.links
        : project.link
        ? [{ label: 'Project Link', href: project.link }]
        : [];
      const linkMarkup = links.length
        ? `<div class="project-card__links">
            ${links
              .map(
                (link) =>
                  `<a class="project-card__link" href="${link.href}" target="_blank" rel="noreferrer">${link.label} →</a>`
              )
              .join('')}
          </div>`
        : '';
      return `
        <article class="project-card reveal" data-type="${project.type}">
          <span class="project-card__tag">${displayTag}</span>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-card__meta">${stacks}</div>
          ${linkMarkup}
        </article>
      `;
    })
    .join('');
  attachReveal();
};

const renderEducation = () => {
  timelineList.innerHTML = education
    .map(
      (item) => `
        <li class="reveal">
          <p class="timeline__role">${item.role}</p>
          <p class="timeline__place">${item.place}</p>
          <p>${item.timeframe}</p>
          <p>${item.summary}</p>
        </li>
      `
    )
    .join('');
  attachReveal();
};

const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove('is-active'));
        const active = document.querySelector(`.hero__links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('is-active');
        pageSections.forEach((section) => section.classList.toggle('is-active', section === entry.target));
      }
    });
  },
  { threshold: 0.55 }
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

const attachReveal = () => {
  document.querySelectorAll('.reveal').forEach((node) => {
    if (!node.classList.contains('is-visible')) {
      revealObserver.observe(node);
    }
  });
};

renderProjects();
renderEducation();
yearTarget.textContent = new Date().getFullYear();

pageSections.forEach((section) => scrollObserver.observe(section));

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('is-active'));
    button.classList.add('is-active');
    renderProjects(button.dataset.filter);
  });
});

menuButton.addEventListener('click', () => {
  const nextState = !navContainer.classList.contains('is-open');
  setMobileNavOpen(nextState);
});

navLinks.forEach((link) => link.addEventListener('click', () => setMobileNavOpen(false)));

const metricObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 40));
      const counter = () => {
        current += step;
        el.textContent = current >= target ? target : current;
        if (current < target) requestAnimationFrame(counter);
      };
      counter();
      observer.unobserve(el);
    });
  },
  { threshold: 0.8 }
);

metricValues.forEach((metric) => metricObserver.observe(metric));

themeToggle.addEventListener('click', () => {
  body.classList.toggle('theme--day');
  const isDay = body.classList.contains('theme--day');
  themeIcon.textContent = isDay ? '🌙' : '☀';
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    navContainer.classList.remove('is-open');
  }
  syncNavState();
});

const handleNavCompression = () => {
  if (!heroNav) return;
  heroNav.classList.toggle('hero__nav--scrolled', window.scrollY > 40);
};

window.addEventListener('scroll', handleNavCompression, { passive: true });

syncNavState();
handleNavCompression();
