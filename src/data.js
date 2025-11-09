export const siteMeta = {
  title: 'SDE Portfolio',
  description: 'I build scalable, reliable web solutions.',
  author: 'Sujeet Sharma',
  resumeLink: '/src/images/Resume.pdf', // Update this with your resume link (Google Drive, Dropbox, or local path)
}

export const socials = {
  github: 'https://github.com/Sujeetshar14921',
  linkedin: 'https://www.linkedin.com/in/sujeet-sharma-13090326b',
  twitter: 'https://x.com/SUJEETSHAR14921',
  email: 'mailto:sujeetsharmadc56@gmail.com',
}

export const skills = [
  { name: 'Languages', items: [{name:'javaScript', lvl:80},{name:'Java', lvl:75}] },
  { name: 'Frontend', items: [{name:'React', lvl:90},{name:'TypeScript', lvl:75},{name:'Tailwind', lvl:85}] },
  { name: 'Backend', items: [{name:'Node.js', lvl:85},{name:'Express', lvl:80},{name:'Firebase', lvl:75}] },
  { name: 'Database', items: [{name:'MongoDB', lvl:80}] },
  { name: 'Tools', items: [{name:'Git', lvl:75},{name:'GitHub', lvl:75}] },
]

export const projects = [
  {
    id: 'proj-1',
    title: 'Portfolio Website',
    description: 'A scalable web app with real-time features.',
    image: '/src/images/Project1.png',
    demo: '/Portfolio_Project/sujeetshar14921.github.io/Portfolio_Project',
    repo: 'https://github.com/Sujeetshar14921/Portfolio_Project'
  },
  {
    id: 'proj-2',
    title: 'Cineverse Smart OTT Platform',
    description: 'Mobile-friendly e-commerce front-end.',
    image: '/src/images/Project2.png',
    demo: '#',
    repo: '#'
  },
  {
    id: 'proj-3',
    title: 'Ecommerce Website',
    description: 'Microservices demo with CI/CD.',
    image: '/src/images/Project3.png',
    demo: 'https://sujeetshar14921.github.io/Dividecoss_eCommerce_Project/',
    repo: 'https://github.com/Sujeetshar14921/Dividecoss_eCommerce_Project'
  }
]

export const experience = [
  {
    company: 'YugaYatra (OPC) Private Limited',
    role: 'Software Engineer',
    range: 'Nov 2025 - Present',
    points: ['Built microservices for payments', 'Improved performance by 30%'],
    docImage: '/src/images/yugayatra.png'
  },
  {
    company: 'Innovate Intern',
    role: 'Cloud Computing Intern',
    range: 'Sep 2024 - Dec 2024',
    points: ['Implemented frontend features', 'Wrote integration tests'],
    docImage: '/src/images/innovate.png'
  }
]

export const certifications = [
  {
    id: 'cert-1',
    title: 'MERN Full Stack Development',
    issuer: '30DaysCoding',
    year: '2025',
    link: '#',
    image: '/src/images/mern.png'
  },
  {
    id: 'cert-2',
    title: 'Big Data Computing',
    issuer: 'NPTEL',
    year: '2024',
    link: '#',
    image: '/src/images/bigdata.png'
  },
  {
    id: 'cert-3',
    title: 'Machine Learning With Applications to Object Recognition',
    issuer: 'Infosys Springboard',
    year: '2024',
    link: '#',
    image: '/src/images/machine.png'
  },
  {
    id: 'cert-4',
    title: 'Java Training',
    issuer: 'Spoken Tutorial',
    year: '2024',
    link: '#',
  image: '/src/images/java.png'
  }
]

export const education = [
  {
    id: 'edu-1',
    degree: " B.Tech in Computer Science and Engineering (AI, ML, DL)",
    school: 'Teerthanker Mahaveer University',
    range: '2023 - 2026',
    details: ['GPA: 8.1/10', 'Relevant: Algorithms, Databases, Distributed Systems'],
    image: '/src/images/tmu.png'
  },
  {
    id: 'edu-1',
    degree: " Diploma in Electrical Engineering",
    school: 'Raja Balwant Singh Polytechnic, Bichpuri (Agra)',
    range: '2020 - 2023',
    details: ['Percentage: 75%', 'Relevant: Algorithms, Databases, Distributed Systems'],
    image: '/src/images/rbs.png'
  }
]

export const blogPosts = [
  {
    id: 'post-1',
    title: 'Designing Resilient Microservices',
    date: '2025-07-12',
    excerpt: 'Patterns and practical tips for building fault-tolerant microservices at scale.',
    url: 'https://www.finextra.com/blogposting/26591/top-10-technology-blogs-and-news-websites-to-follow---2025',
    poster: '/src/images/blog1.png'
  },
  {
    id: 'post-2',
    title: 'A Practical Guide to CSS Variables',
    date: '2025-03-02',
    excerpt: 'How to use CSS custom properties to build flexible design systems.',
    url: '#',
    poster: '/src/images/blog2.png'
  },
  {
    id: 'post-3',
    title: 'A Practical Guide to CSS Variables',
    date: '2025-03-02',
    excerpt: 'How to use CSS custom properties to build flexible design systems.',
    url: '#',
    poster: '/src/images/blog3.png'
  }
]
