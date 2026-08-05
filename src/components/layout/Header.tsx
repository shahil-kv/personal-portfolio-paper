import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='w-full font-display bg-[url("/paper.png")] z-50 bg-repeat fixed text-2xl lg:text-4xl text-[#9F9F9F] items-center flex h-16 lg:h-20 justify-between px-6 md:px-12 lg:px-20 border-b border-black/5 shadow-xs'>
      <Link href='/' className='flex items-center gap-3 group py-1'>
        <div className='relative w-9 h-9 lg:w-11 lg:h-11 rounded-full overflow-hidden border-2 border-black/15 shadow-sm group-hover:scale-105 group-hover:border-black/30 transition-all duration-200 shrink-0'>
          <Image
            src='/shahilimage.JPG'
            alt='Shahil Logo'
            fill
            sizes='(max-width: 768px) 36px, 44px'
            className='object-cover'
            priority
          />
        </div>
        <span className='font-display text-2xl lg:text-4xl text-[#333] group-hover:text-black transition-colors'>
          Shahilkv.in
        </span>
      </Link>
      <nav className='flex gap-5 lg:gap-10 text-xl lg:text-3xl items-center'>
        <Link href='/#work' className='hover:text-black transition-colors'>
          work
        </Link>
        <Link href='/about' className='hover:text-black transition-colors'>
          about me
        </Link>
        <a
          href='/Shahil%20Resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          download
          className='hover:text-black transition-colors'
        >
          resume
        </a>
      </nav>
    </header>
  );
};

export default Header;

