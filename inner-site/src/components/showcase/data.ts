import unlink from '../../assets/pictures/shahil/unlink.jpg';
import petrohse from '../../assets/pictures/shahil/petrohse.jpg';
import epermit from '../../assets/pictures/shahil/epermit.jpg';
import videoMcp from '../../assets/pictures/shahil/video-claude-code-mcp.jpg';
import videoMaking from '../../assets/pictures/shahil/video-making-with-claude-code.jpg';
import videoFree from '../../assets/pictures/shahil/video-claude-free.jpg';

/**
 * Portfolio content, mirrored from the shahilkv.in source
 * (personal-portfolio-paper/src/data). Edit here to change what the
 * Showcase window says.
 */

const PHONE_DISPLAY = '+91 70123 26928';
const PHONE_E164 = '917012326928';

export const WHATSAPP = {
    display: PHONE_DISPLAY,
    href: `https://api.whatsapp.com/send/?phone=%2B${PHONE_E164}&text&type=phone_number&app_absent=0`,
    compose: (text: string) =>
        `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(text)}`,
};

export const INSTAGRAM = {
    handle: '@_shahilee',
    href: 'https://www.instagram.com/_shahilee/',
    followers: '~6,000',
    videoCount: 46,
};

export const GITHUB = {
    handle: 'shahil-kv',
    href: 'https://github.com/shahil-kv',
    repos: 'https://github.com/shahil-kv?tab=repositories',
};

export const EMAIL = 'mshahilkv@gmail.com';

export type Role = {
    id: string;
    title: string;
    org: string;
    type: string;
    period: string;
    location: string;
    note: string;
    href?: string;
    current?: boolean;
    bullets?: string[];
};

export const EXPERIENCE: Role[] = [
    {
        id: 'valcare',
        title: 'Freelance Developer',
        org: 'Valcare Consulting',
        type: 'Freelance',
        period: '2026 - Present',
        location: 'Infopark, Kochi · Remote',
        note: 'Building client products for a consultancy that serves Europe and the Middle East, including a Spanish-language project.',
        href: 'https://valcareconsulting.com/',
        current: true,
    },
    {
        id: 'flaro',
        title: 'Co-founder',
        org: 'Flaro',
        type: 'Full-time',
        period: 'Apr 2025 - Present',
        location: 'Ernakulam, Kerala · Hybrid',
        note: 'A calling agent that speaks Malayalam, built for businesses that lose customers to an unanswered phone.',
        href: 'http://flaro.co',
        current: true,
        bullets: [
            'Built the product: an AI calling agent that books appointments, runs surveys and handles support calls in Malayalam.',
            'Next.js and Node on the front and back end, Postgres for data, and speech AI for the voice pipeline.',
        ],
    },
    {
        id: 'petroinfotech',
        title: 'Angular Developer',
        org: 'PetroInfotech',
        type: 'Full-time',
        period: 'Jun 2023 - Apr 2025',
        location: 'Kozhikode, Kerala · On-site',
        note: 'Health, safety and permit-to-work systems for oil and gas sites. Two years of learning that the hard part is never the code.',
        href: 'https://www.petroinfotech.com/',
        bullets: [
            'Engineered a dynamic multi-role workflow system for administrators, users, super users, contractors, sub-contractors and super admins, improving task accuracy by 35%.',
            'Developed a customisation super-admin panel that gave clients easy configuration options, and supported it after launch.',
            'Implemented robust error handling and logging, cutting debugging time by 40% and improving application stability.',
            'Leveraged advanced RxJS and standalone components, and optimised performance with lazy loading, code splitting and efficient change detection.',
            'Integrated PrimeNG with Angular and built reusable, component-based UI elements that kept the codebase maintainable.',
            'Created wireframes and prototypes in Figma and managed evolving client requirements through to on-time delivery.',
        ],
    },
    {
        id: 'levelx',
        title: 'SDE Intern',
        org: 'LevelX',
        type: 'Internship',
        period: 'Jun 2022 - Jun 2023',
        location: 'Kozhikode, Kerala · On-site',
        note: 'First job. Object-oriented fundamentals and Angular, on real tickets.',
        href: 'https://levelx.in/home',
        bullets: [
            'Developed and maintained the company website in Angular.',
            'Integrated RESTful APIs and used Node.js to build full-stack features.',
            'Turned Figma mockups into pixel-perfect, responsive web applications alongside the UI/UX designers.',
        ],
    },
];

export type Project = {
    id: string;
    name: string;
    role: string;
    year: string;
    kind: 'Startup' | 'Client work' | 'Open source';
    summary: string;
    stack: string[];
    image?: string;
    caption?: string;
    live?: string;
    github?: string;
};

export const PROJECTS: Project[] = [
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
        image: unlink,
        caption: 'Unlink, the app that helps you put the phone down.',
        live: 'https://www.getunlink.com/',
        github: 'https://github.com/UnlinkHq/Application/tree/develop',
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
        id: 'petrohse',
        name: 'PetroHSE',
        role: 'Front-end engineer',
        year: '2023-2024',
        kind: 'Client work',
        summary:
            'Health, safety and environment management for oil and gas sites. Paper reporting moved into a single digital workflow, with automated reporting on top of it — incident reporting, an observation module for HSE managers, audit management and a KPI dashboard built with D3.js.',
        stack: ['Angular', 'TypeScript', 'RxJS', 'D3.js'],
        image: petrohse,
        caption: 'PetroHSE, health, safety and environment management.',
        live: 'https://www.petroinfotech.com/#/products/petrohse',
    },
    {
        id: 'epermit',
        name: 'Petro ePermit',
        role: 'Front-end engineer',
        year: '2023-2024',
        kind: 'Client work',
        summary:
            'Permit to Work, digitised across its whole lifecycle — request, risk assessment, authorisation, monitoring and close-out — with every responsibility tracked to a person. Multi-level approvals for contractors, HSE heads and supervisors, dynamic forms per permit type, role-based access control and PDF permits on approval.',
        stack: ['Angular', 'TypeScript', 'SCSS'],
        image: epermit,
        caption: 'Petro ePermit, the permit-to-work lifecycle in one place.',
        live: 'https://www.petroinfotech.com/#/products/petro-epermit',
    },
];

export type Video = {
    id: string;
    title: string;
    lang: 'en' | 'ml';
    note: string;
    poster: string;
    permalink: string;
};

export const VIDEOS: Video[] = [
    {
        id: 'claude-code-mcp',
        title: 'Claude Code and MCP, wired into one workflow',
        lang: 'en',
        note: 'Figma, Vercel and GitHub driving an automated development cycle.',
        poster: videoMcp,
        permalink: INSTAGRAM.href,
    },
    {
        id: 'making-with-claude-code',
        title: "Let's see how we can build using Claude Code",
        lang: 'en',
        note: 'From install to the first real change in an existing project.',
        poster: videoMaking,
        permalink: INSTAGRAM.href,
    },
    {
        id: 'claude-free',
        title: 'How to use Claude free — meaning unlimited chat',
        lang: 'en',
        note: 'What the free tier actually gets you, and exactly where it stops.',
        poster: videoFree,
        permalink: INSTAGRAM.href,
    },
];

export const STACK = [
    { group: 'Every day', items: ['TypeScript', 'React', 'Next.js', 'Node'] },
    {
        group: 'Also comfortable in',
        items: ['Angular', 'React Native', 'Python'],
    },
    {
        group: 'Data & infra',
        items: ['Postgres', 'Firebase', 'Vercel', 'Docker'],
    },
    {
        group: 'AI tooling',
        items: ['Claude Code', 'MCP', 'n8n', 'Speech APIs'],
    },
];

export const AUTOMATED = [
    'A Malayalam-speaking AI calling agent that books appointments and runs surveys',
    'Permit-to-work approvals across request, risk assessment and sign-off',
    'Slack and Discord bots wired into internal tooling',
    'Email sequences and data-parsing pipelines that used to be spreadsheets',
];
