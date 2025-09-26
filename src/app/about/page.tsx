import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div className='flex font-family-dm-sans w-full h-[84vh] justify-center   items-center px-4  lg:px-0 mt-5 '>
      <div className="relative w-full bg-[url('/yellowabout.png')]  px-22 py-10 bg-center max-w-[650px] items-center  bg-cover">
        <Image
          src={
            'https://framerusercontent.com/images/1DAU2T6QMpS5HJsmIxgZEXBLPJ8.svg'
          }
          alt='hanger'
          className='absolute -top-2 max-w-[35px] right-10'
          width={100}
          height={100}
        />
        <Image
          src={
            'https://framerusercontent.com/images/Ghnjg0ohCOel7y4k7Mw4IRwnU.png'
          }
          className='rounded-xl w-[150px]'
          alt='profile'
          width={100}
          height={100}
        />
        <p className='py-10 text-[14px] font-family-dm-sans text-[#8E8570]'>
          hello i am shahil- a software developer
        </p>
        <p className='text-[12px] mb-5 text-[#8E8570]'>
          {' '}
          <span className=' text-[#8E8570]'>
            i’ve always loved making things.{' '}
          </span>{' '}
          <br /> at my core, i’m a builder. whether it was crafting paper
          experiments as a kid, studying interior design in college, running
          design bucket on the side, or designing digital experiences today.
          creating things that add real value to people’s lives has always
          brought me joy.
        </p>
        <p className='text-[12px] mb-5 text-[#8E8570]'>
          <span>i started designbucket during the lockdown, </span> <br />
          the idea was simple: to have a container on the internet where i could
          keep putting things i made, and now i am bringing that here.
        </p>
        <p className='text-[12px] mb-5 hidden lg:block text-[#8E8570]'>
          <span>i have been in mumbai all my life,</span> <br />
          until i decided to move to bangalore last year. i enjoy learning new
          things and listening to people’s stories. that’s also why i want to
          travel more. i truly believe we all live in a bubble until we step out
          and see the world from different perspectives.
        </p>
        <p className='text-[12px] mb-5 text-[#8E8570]'>
          <span>someday, i’d love to have a studio of my own</span> <br />a sort
          of maker lab with a wood-working space, pottery wheels, metal tools,
          and a software design lab. a space where tinkerers can come together
          to experiment, build, learn from each other, and just… make things.
        </p>
      </div>
    </div>
  );
};

export default page;
