export type Project = {
  id: string;
  name: string;
  /** What you did on it, not what the product is. */
  role: string;
  year: string;
  kind: 'Startup' | 'Client work' | 'Open source';
  summary: string;
  stack: string[];
  image?: string;
  live?: string;
  /** Omitted entirely on closed-source work — no empty links. */
  github?: string;
};

export const projects: Project[] = [
  {
    id: 'valcare',
    name: 'Valcare Consulting',
    role: 'Freelance developer',
    year: '2026',
    kind: 'Client work',
    summary:
      'Client products for a Kochi consultancy working with businesses across Europe and the Middle East — currently a Spanish-language build, so the interface has to read naturally to people who never see the English.',
    stack: ['Next.js', 'TypeScript', 'i18n'],
    live: 'https://valcareconsulting.com/',
  },
  {
    id: 'flaro',
    name: 'Flaro',
    role: 'Founder, built the product',
    year: '2025',
    kind: 'Startup',
    summary:
      'A calling agent that speaks Malayalam. It books appointments, runs surveys and handles support calls, so small businesses stop losing customers to a phone nobody picks up.',
    stack: ['Next.js', 'Node', 'Postgres', 'Speech AI'],
    live: 'http://flaro.co',
    github: 'https://github.com/shahil-kv/Flaro_Web',
  },
  {
    id: 'unlink',
    name: 'Unlink',
    role: 'Built it, maintain it',
    year: '2025',
    kind: 'Open source',
    summary:
      'An app for people who want to stop doom scrolling and have decided that willpower alone is not working.',
    stack: ['React Native', 'Expo'],
    image: '/unlink.png',
    live: 'https://www.getunlink.com/',
    github: 'https://github.com/UnlinkHq/Application/tree/develop',
  },
  {
    id: 'petrohse',
    name: 'PetroHSE',
    role: 'Front-end engineer',
    year: '2023—2024',
    kind: 'Client work',
    summary:
      'Health, safety and environment management for oil and gas sites. Paper reporting moved into a single digital workflow, with automated reporting on top of it.',
    stack: ['Angular', 'TypeScript', 'RxJS'],
    image: '/petrohse.jpg',
    live: 'https://www.petroinfotech.com/#/products/petrohse',
  },
  {
    id: 'epermit',
    name: 'Petro ePermit',
    role: 'Front-end engineer',
    year: '2023—2024',
    kind: 'Client work',
    summary:
      'Permit to Work, digitised across its whole lifecycle — request, risk assessment, authorisation, monitoring and close-out — with every responsibility tracked to a person.',
    stack: ['Angular', 'TypeScript', 'SCSS'],
    image: '/epermit.jpg',
    live: 'https://www.petroinfotech.com/#/products/petro-epermit',
  },
  {
    id: 'securepass',
    name: 'Secure Pass',
    role: 'Built it',
    year: '2024',
    kind: 'Open source',
    summary:
      'A password manager I wrote because I wanted to understand encryption at rest properly rather than read about it.',
    stack: ['React', 'Firebase', 'Web Crypto'],
    live: 'https://ilocks.web.app/',
    github: 'https://github.com/shahil-kv/securePass',
  },
  {
    id: 'illustractor',
    name: 'Illustractor',
    role: 'Built it',
    year: '2023',
    kind: 'Open source',
    summary:
      'A drawing tool in plain JavaScript. No framework, no canvas library — the point was to find out how far you get without them.',
    stack: ['Vanilla JS', 'Canvas API'],
    live: 'https://shahil-kv.github.io/illustractor/',
    github: 'https://github.com/shahil-kv/illustractor',
  },
];

export const stack = [
  { group: 'Every day', items: ['TypeScript', 'React', 'Next.js', 'Node'] },
  { group: 'Also comfortable in', items: ['Angular', 'React Native', 'Python'] },
  { group: 'Data & infra', items: ['Postgres', 'Firebase', 'Vercel', 'Docker'] },
  { group: 'AI tooling', items: ['Claude Code', 'MCP', 'n8n', 'Speech APIs'] },
];
