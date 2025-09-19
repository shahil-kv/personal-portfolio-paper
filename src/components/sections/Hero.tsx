import React from 'react';
import Header from '../layout/Header';
import Image from 'next/image';
import RocketIcon from '../common/rocket';

const Hero = () => {
  return (
    <div className='w-full flex-col flex items-center  '>
      <Header />
      <div className='px-6 py-24 flex flex-col lg:flex-row lg:justify-between lg:w-full h-[70vh]'>
        <div className='w-full flex flex-col   justify-center lg:px-20 lg:mt-60'>
          <p className='font-family-dm-sans font-extralight lg:text-2xl'>
            hello, I am
          </p>
          <h1 className='font-display text-7xl my-2 lg:text-[140px]'>Shahil</h1>
          <p className='font-family-dm-sans text-[#484848] font-extralight  max-w-80 lg:text-2xl  lg:font-light lg:max-w-[500px]'>
            a builder who loves to build and create amazing products that makes
            a difference.
          </p>
        </div>
        <div className=' w-full mt-20'>
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

          <div className='relative lg:w-auto  '>
            <Image
              className='absolute inset-0 max-w-64 top-[-24px] '
              src={'/ringhandle.png'}
              alt='ringhandle'
              width={1428}
              height={132}
            />
            <div className='absolute inset-0 z-10'>
              <Image
                className='w-full max-w-64 lg:max-w-[22rem]'
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
              className='absolute top-0 right-[-8px] z-10 max-w-[312px] lg:max-w-[26rem] lg:top-[-3px] lg:right-[79px]'
            />
          </div>
        </div>
      </div>
      <div className='w-full h-[2px] bg-[#cccccc8b]  flex justify-center items-center'></div>

      {/*  work section starts  */}
      <div className='flex flex-col  justify-center items-center px-2 py-24   '>
        <p className='font-display text-6xl my-2 mt-10 text-left w-[330px]'>
          Work
        </p>
        <div className='flex flex-col justify-center gap-14 items-center w-full'>
          <div>
            <div className='flex flex-col md:flex-row  items-center justify-center w-full  mt-10'>
              <Image
                className='w-100 max-w-[340px] h-auto object-fill  bg-cover bg-no-repeat'
                alt='work_images_temp'
                src={'/dummyImage.png'}
                width={2520}
                height={1540}
              />
            </div>
            <div className='w-full flex flex-col items-center md:items-start max-w-[350px]'>
              <p className='font-family-dm-sans text-left text-[18px] w-[330px] text-primary font-medium'>
                boosting user activation
              </p>
              <p className='font-family-dm-sans text-[14px] mt-2 mb-4 text-text font-medium w-[330px]'>
                making an onboarding journey to improve user activation for a
                math practice tool
              </p>
              <button className='text-left relative font-display w-[330px]'>
                <Image
                  className='w-40 h-10 opacity-70 '
                  src={'/button.png'}
                  alt='button'
                  width={1220}
                  height={392}
                />
                <p className='absolute left-10 top-2 text-text'>View Project</p>
              </button>
            </div>
          </div>
          <div>
            <div className='flex flex-col md:flex-row  items-center justify-center w-full  mt-10'>
              <Image
                className='w-100 max-w-[340px] h-auto object-fill  bg-cover bg-no-repeat'
                alt='work_images_temp'
                src={'/dummyImage.png'}
                width={2520}
                height={1540}
              />
            </div>
            <div className='w-full flex flex-col items-center md:items-start max-w-[350px]'>
              <p className='font-family-dm-sans text-left text-[18px] w-[330px] text-primary font-medium'>
                boosting user activation
              </p>
              <p className='font-family-dm-sans text-[14px] mt-2 mb-4 text-text font-medium w-[330px]'>
                making an onboarding journey to improve user activation for a
                math practice tool
              </p>
              <button className='text-left relative font-display w-[330px]'>
                <Image
                  className='w-40 h-10 opacity-70 '
                  src={'/button.png'}
                  alt='button'
                  width={1220}
                  height={392}
                />
                <p className='absolute left-10 top-2 text-text'>View Project</p>
              </button>
            </div>
          </div>
          <div>
            <div className='flex flex-col md:flex-row  items-center justify-center w-full  mt-10'>
              <Image
                className='w-100 max-w-[340px] h-auto object-fill  bg-cover bg-no-repeat'
                alt='work_images_temp'
                src={'/dummyImage.png'}
                width={2520}
                height={1540}
              />
            </div>
            <div className='w-full flex flex-col items-center md:items-start max-w-[350px]'>
              <p className='font-family-dm-sans text-left text-[18px] w-[330px] text-primary font-medium'>
                boosting user activation
              </p>
              <p className='font-family-dm-sans text-[14px] mt-2 mb-4 text-text font-medium w-[330px]'>
                making an onboarding journey to improve user activation for a
                math practice tool
              </p>
              <button className='text-left relative font-display w-[330px]'>
                <Image
                  className='w-40 h-10 opacity-70 '
                  src={'/button.png'}
                  alt='button'
                  width={1220}
                  height={392}
                />
                <p className='absolute left-10 top-2 text-text'>View Project</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*  work section ends  */}

      <div className=' h-[2px] w-full bg-[#cccccc8b]  '></div>

      <Image
        className='flex  justify-center max-h-[300px]  object-cover object-center'
        src={'/line.png'}
        alt='line'
        width={4}
        height={600}
      />

      <Image
        className='max-w-[200px]'
        src={'/footerbucket.png'}
        alt='footerbucket'
        width={860}
        height={1200}
      />

      <p className='text-center text-primary mt-5 font-family-dm-sans mb-14'>
        a bucket full of ideas waiting to spill
      </p>
      {/* footer  starts*/}
      <div className='flex flex-row w-full border-t border-t-black/10 justify-between items-center px-6 py-6'>
        <p className='font-display text-[20px] text-primary'>
          Made with love :)
        </p>
        <div className='flex gap-2 items-centers'>
          <a href=''>
            <Image
              src={'/instagram.png'}
              alt='instagram'
              width={25}
              height={25}
            />
          </a>
          <a href=''>
            {' '}
            <Image src={'/twitter.png'} alt='twitter' width={25} height={25} />
          </a>
          <a href=''>
            {' '}
            <Image
              src={'/linkedin.png'}
              alt='linkedin'
              width={25}
              height={25}
            />
          </a>
        </div>
      </div>
      {/*  footer section ends  */}
    </div>
  );
};

export default Hero;
