import React from 'react';
import Header from '../layout/Header';
import Image from 'next/image';
import RocketIcon from '../common/rocket';

const Hero = () => {
  return (
    <div className='w-full flex-col flex items-center  '>
      <Header />
      <div className='px-6 py-24 flex flex-col '>
        <div className='w-full flex flex-col   justify-center '>
          <p className='font-family-dm-sans font-extralight'>hello, I am </p>
          <h1 className='font-display text-7xl my-2'>Shahil</h1>
          <p className='font-family-dm-sans font-extralight  max-w-80'>
            a builder who loves to build and create amazing products that makes
            a difference.
          </p>
        </div>
        <div className=' w-full mt-32'>
          <RocketIcon />
          <div className='relative bottom-16 left-16 rotate-[7deg] z-10 max-w-[140px]'>
            <div className='absolute  top-2 z-10'>
              <a href=''>
                <Image
                  src={'/startupdecoration.png'}
                  width={140}
                  height={140}
                  alt='startupdecoration'
                />
              </a>
            </div>
            <div className=' relative w-fit px-1  bg-[rgb(242,225,229)] shadow-[1px_1px_0px_0px_rgb(207,169,177)] opacity-100 z-20  top-5 left-2'>
              <div className='outline-none flex flex-col justify-start shrink-0 transform-none opacity-100 text-[rgb(105,105,105)]'>
                <p className='text-center font-display text-xl'>Start Up</p>
              </div>
            </div>
          </div>
          <div className='relative bottom-8 left-[-6px] rotate-[-6deg] z-10 max-w-[120px]'>
            <div className='absolute  top-2 z-10'>
              <a href=''>
                <Image
                  src={'/aboutme.png'}
                  width={140}
                  height={140}
                  alt='aboutme'
                />
              </a>
            </div>
            <div className=' relative w-fit px-1  bg-[rgb(240,230,206)] shadow-[1px_1px_0px_0px_rgb(204,181,126)] opacity-100 z-20  top-5 left-3 rotate-[-1deg] max-w-[350px]'>
              <div className='outline-none flex flex-col justify-start shrink-0 transform-none opacity-100 text-[rgb(105,105,105)]'>
                <p className='text-center font-display text-xl'>about me</p>
              </div>
            </div>
          </div>
          <div className='relative bottom-10 left-24 rotate-[7deg] z-10 max-w-[140px]'>
            <div className='absolute  top-2 z-10'>
              <a href=''>
                <Image
                  src={'/workimage.png'}
                  width={150}
                  height={150}
                  alt='workimage'
                />
              </a>
            </div>
            <div className=' relative w-fit px-1 bg-[rgb(227,223,218)] shadow-[1px_1px_0px_0px_rgb(176,175,174)] opacity-100 z-20  top-5 left-2 rotate-[-1deg]'>
              <div className='outline-none flex flex-col justify-start shrink-0 transform-none opacity-100 text-[rgb(105,105,105)]'>
                <p className='text-center font-display text-xl'>works</p>
              </div>
            </div>
          </div>

          <div className='relative max-w-[300px]'>
            <Image
              className='absolute inset-0 max-w-64 top-[-24px]'
              src={'/ringhandle.png'}
              alt='ringhandle'
              width={1428}
              height={132}
            />
            <div className='absolute inset-0 z-10'>
              <Image
                className='w-full max-w-64'
                src={'/bucket.png'}
                alt='main_bucket'
                width={1428}
                height={1220}
              />
            </div>
            <Image
              src={'/bucketring.png'}
              alt='bucketring'
              width={864}
              height={604}
              className='absolute top-0 right-[-8px] z-10 max-w-[312px]'
            />
          </div>
        </div>
      </div>
      {/* <div className='w-full h-[2px] bg-[#cccccc8b]  flex justify-center items-center'></div> */}
    </div>
  );
};

export default Hero;
