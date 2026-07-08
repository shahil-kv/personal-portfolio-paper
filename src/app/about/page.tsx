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
          src={'/aboutme.png'}
          className='rounded-xl w-[150px]'
          alt='profile'
          width={100}
          height={100}
        />
        <div className='py-6 text-[14px] font-family-dm-sans text-[#8E8570] space-y-4'>
          <p>
            I&apos;m a deeply curious builder who loves creating things that people actually need. I enjoy solving real-world problems through automation and digital experiences.
          </p>
          <p>
            When I&apos;m not writing code, you can find me making tech videos on Instagram to share what I&apos;m learning and building with the community. 
          </p>
        </div>

        <p className='text-[14px] font-family-dm-sans text-[#8E8570] font-medium mb-3'>
          A few automations I&apos;ve built:
        </p>
        <ul className='text-[14px] text-[#8E8570] list-disc list-inside space-y-2 pb-6'>
          <li>AI-powered Malayalam Calling Agent (Flaro AI)</li>
          <li>Permit to Work (PTW) management workflows</li>
          <li>Custom Slack and Discord integration bots</li>
          <li>Automated email sequences and data parsing pipelines</li>
        </ul>
      </div>
    </div>
  );
};

export default page;
