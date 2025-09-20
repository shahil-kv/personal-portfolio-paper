import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-row w-full border-t border-t-black/5 justify-between items-center lg:p-11 px-6 py-6'>
      <p className='font-display text-[20px] lg:text-4xl text-primary'>
        Made with love :)
      </p>
      <div className='flex gap-2 items-centers'>
        <a href=''>
          <Image
            src={'/instagram.png'}
            alt='instagram'
            width={25}
            height={25}
            className=' lg:w-12 lg:h-12 text-black'
          />
        </a>
        <a href=''>
          {' '}
          <Image
            src={'/twitter.png'}
            alt='twitter'
            className='  lg:w-12 lg:h-12 text-black'
            width={25}
            height={25}
          />
        </a>
        <a href=''>
          {' '}
          <Image
            src={'/linkedin.png'}
            alt='linkedin'
            width={25}
            height={25}
            className='  lg:w-12 lg:h-12 text-black'
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
