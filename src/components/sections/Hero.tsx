import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='w-full flex-col  '>
      <div>
        <p>hello , I am </p>
        <h1 className='font-display text-9xl'>Shahil</h1>
        <p>I am a software developer</p>
      </div>
      <div>
        <Image src={'/paper.png'} alt='shahil' width={20} height={20} />
        <Image src={'/paper.png'} alt='shahil' width={20} height={20} />
        <Image src={'/paper.png'} alt='shahil' width={20} height={20} />
      </div>
    </div>
  );
};

export default Hero;
