export interface Project {
  id: number;
  title: string;
  slug: string;
  cat: string;
  techStack: string[];
  year: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Nice UI',
    slug: 'https://www.niceui.my.id/',
    cat: 'Librarys',
    techStack: [
      'Nuxt 4',
      'TypeScript',
      'Tailwind CSS',
    ],
    year: '2025',
    description:
      'A modern-designed Tailwind CSS UI component library and inspiration hub with ready-to-use elements for frontend development.',
    image:
      'niceui.png',
  },

  {
    id: 2,
    title: 'Company Profile Vensys',
    slug: 'https://vensys.co.id/',
    cat: 'Enterprise Website',
    techStack: [
      'Nuxt 4',
      'Express JS',
      'My SQL',
    ],
    year: '2023',
    description:
      'Corporate website presenting enterprise IT solutions for banking and financial institutions, messaging infrastructure, and application development.',
    image:
      'vensys.png',
  },

  {
    id: 3,
    title: 'Azura KIT',
    slug: 'https://azurakit.vercel.app',
    cat: 'Marketplace',
    techStack: [
      'Vue 3',
      'Tailwind CSS',
      'Quill Editor',
      'Gumroad API',
    ],
    year: '2025',
    description:
      'A web platform providing ready-to-use website templates and UI design resources to accelerate modern web development.',
    image:
      'azurakit.png',
  },

  {
    id: 4,
    title: 'Company Profile',
    slug: '#',
    cat: 'Enterprise Website',
    techStack: [
      'Nuxt 3',
      'Tailwind CSS',
    ],
    year: '2023',
    description:
      'sA cinematic and interactive portfolio website focused on premium animations, immersive experiences, and performance-driven frontend engineering.',
    image:
      'ajp.png',
  },
  {
    id: 5,
    title: 'Dokumo AI',
    slug: '#',
    cat: 'AI-Powered Web Application',
    techStack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'REST API',
    ],
    year: '2024',
    description:
      'Contributed to the development and implementation of the Dokumo website interface, focusing on responsive UI, visual consistency, and seamless user experience across devices.',
    image: 'dokumo.png',
  },
  {
    id: 6,
    title: 'Gibrun TUI',
    slug: 'https://github.com/Rauliqbal/gibrun-tui',
    cat: 'Developer Tool',
    techStack: [
      'Go'
    ],
    year: '2025',
    description:
      'A terminal-based interface for interacting with Gibrun, designed to provide a fast and intuitive developer experience through an interactive TUI environment.',
    image: 'gibruntui.png',
  },
];