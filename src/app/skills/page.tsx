import type { Metadata } from 'next';
import React from 'react';
import Skills from '@/components/sections/Skills';

export const metadata: Metadata = {
  title: 'Skills & Tech Stack',
  description:
    'Discover technical skills, frameworks, languages, and tools mastered by Shahil.',
};

const page = () => {
  return (
    <div className='w-full py-6'>
      <Skills />
    </div>
  );
};

export default page;
