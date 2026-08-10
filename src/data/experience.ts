export type Role = {
  id: string;
  title: string;
  org: string;
  /** Freelance / Full-time / Internship — the shape of the engagement. */
  type: string;
  period: string;
  location: string;
  note?: string;
  href?: string;
  current?: boolean;
};

export const experience: Role[] = [
  {
    id: 'valcare',
    title: 'Freelance developer',
    org: 'Valcare Consulting',
    type: 'Freelance',
    // TODO: replace with your actual start month.
    period: '2026 — Present',
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
    period: 'Apr 2025 — Present',
    location: 'Ernakulam, Kerala · Hybrid',
    note: 'A calling agent that speaks Malayalam, built for businesses that lose customers to an unanswered phone.',
    href: 'http://flaro.co',
    current: true,
  },
  {
    id: 'petroinfotech',
    title: 'Angular developer',
    org: 'PetroInfotech',
    type: 'Full-time',
    period: 'Jun 2023 — Apr 2025',
    location: 'Kozhikode, Kerala · On-site',
    note: 'Health, safety and permit-to-work systems for oil and gas sites. Two years of learning that the hard part is never the code.',
  },
  {
    id: 'levelx',
    title: 'SDE intern',
    org: 'LevelX',
    type: 'Internship',
    period: 'Jun 2022 — Jun 2023',
    location: 'Kozhikode, Kerala · On-site',
    note: 'First job. Object-oriented fundamentals and Angular, on real tickets.',
  },
];
