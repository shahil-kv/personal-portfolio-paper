import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className='w-full font-display bg-[url("/paper.png")] z-50 bg-repeat fixed text-4xl text-[#9F9F9F] items-center hidden  h-20 bg-transparent lg:flex justify-between px-20'>
      <div>Shahil.co</div>
      <div className='flex gap-10'>
        <Link href='/#work'>work</Link>
        <Link href='/about'>about me </Link>
        <a href='/Shahil%20Resume.pdf' target='_blank' rel='noopener noreferrer' download>resume</a>
      </div>
    </div>
  );
};

export default Header;
