import type { Metadata } from 'next';
import React from 'react';
import Work from '@/components/sections/Work';

export const metadata: Metadata = {
  title: 'Work & Projects',
  description:
    'Explore selected software projects, web applications, and automations created by Shahil.',
};

const page = () => {
  return (
    <div className='w-full py-6'>
      <Work />
    </div>
  );
};

export default page;
