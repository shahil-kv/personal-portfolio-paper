import React from 'react';
import Header from '../layout/Header';
import Image from 'next/image';
import RocketIcon from '../common/rocket';

const Hero = () => {
  return (
    <div className='w-full flex-col flex items-center  '>
      <Header />
      <div className='px-6 py-24 lg:py-0  flex flex-col lg:flex-row  lg:items-center lg:justify-center lg:gap-30 w-full lg:w-full'>
        <div className='w-full flex flex-col lg:ml-16  max-w-lg justify-center  lg:mt-80'>
          <p className='font-family-dm-sans font-extralight lg:text-2xl'>
            hello, I am
          </p>
          <svg
            viewBox='0 0 729 329.379'
            overflow='visible'
            className='absolute -left-20 hidden'
          >
            <g>
              <path
                d='M 729 0 C 725.026 3.844 646.328 106.972 644.446 109.797 L 686.723 54.899 Z'
                fill='transparent'
                strokeWidth='2'
                stroke='rgb(82, 82, 82)'
                strokeLinecap='round'
                strokeMiterlimit='10'
                strokeDasharray='12,12'
                opacity='0.5'
              />
              <path
                d='M 0 327 C 263 343 358 274 420.188 248'
                fill='transparent'
                strokeWidth='2'
                stroke='rgb(82, 82, 82)'
                strokeLinecap='round'
                strokeMiterlimit='10'
                strokeDasharray='12,12'
                opacity='0.5'
              />
            </g>
          </svg>
          <h1 className='font-display text-7xl my-2 lg:text-[140px]'>Shahil</h1>
          <p className='font-family-dm-sans text-[#484848] font-extralight  max-w-80 lg:text-2xl  lg:font-light lg:max-w-[500px]'>
            a builder who loves to build and create amazing products that makes
            a difference.
          </p>
        </div>
        <div className=' lg:w-[950px] w-full   mt-16 max-w-[500px]'>
          <RocketIcon />
          <div className='relative inset-0 mt-24 lg:mt-0'>
            <div className='absolute z-20 max-w-[120px] rotate-[7deg] left-18 lg:left-24 -top-33  lg:-top-40 lg:max-w-[11rem]  '>
              <a href=''>
                <Image
                  src={'/startupdecoration.png'}
                  width={600}
                  height={140}
                  alt='startupdecoration'
                />
              </a>
              <div className=' absolute w-fit px-1  bg-[rgb(242,225,229)] shadow-[1px_1px_0px_0px_rgb(207,169,177)] opacity-100 z-20  top-5 left-2'>
                <div className='outline-none flex flex-col justify-start shrink-0 transform-none opacity-100 text-[rgb(105,105,105)]'>
                  <p className='text-center font-display text-xl'>Start Up</p>
                </div>
              </div>
            </div>
            <div className='absolute left-[10px] rotate-[-6deg]  max-w-[140px] lg:-top-25 -top-20  z-20 lg:max-w-[11rem]'>
              <a href=''>
                <Image
                  src={'/aboutme.png'}
                  width={600}
                  height={140}
                  alt='aboutme'
                />
              </a>
              <div className=' absolute w-fit px-1  bg-[rgb(240,230,206)] shadow-[1px_1px_0px_0px_rgb(204,181,126)] opacity-100 z-20  top-5 left-3 rotate-[-1deg] max-w-[350px]'>
                <div className='outline-none flex flex-col justify-start shrink-0 transform-none opacity-100 text-[rgb(105,105,105)]'>
                  <p className='text-center font-display text-xl'>about me</p>
                </div>
              </div>
            </div>
            <div className='absolute lg:-top-20 -top-14 left-26 lg:left-38 rotate-[7deg]  max-w-[130px] lg:max-w-[11rem] z-20'>
              <a href=''>
                <Image
                  src={'/workimage.png'}
                  width={600}
                  height={150}
                  alt='workimage'
                />
              </a>
              <div className=' absolute w-fit px-1 bg-[rgb(227,223,218)] shadow-[1px_1px_0px_0px_rgb(176,175,174)] opacity-100 z-20  top-5 left-2 rotate-[-1deg]'>
                <div className='outline-none flex flex-col justify-start shrink-0 transform-none opacity-100 text-[rgb(105,105,105)]'>
                  <p className='text-center font-display text-xl'>works</p>
                </div>
              </div>
            </div>
            <Image
              className='absolute inset-0  max-w-64 top-[-23px] lg:max-w-[22rem] '
              src={'/ringhandle.png'}
              alt='ringhandle'
              width={1428}
              height={132}
            />
            <Image
              className='w-full absolute max-w-64 lg:max-w-[22rem] z-30'
              src={'/bucket.png'}
              alt='main_bucket'
              width={1428}
              height={1220}
            />
            <Image
              src={'/bucketring.png'}
              alt='bucketring'
              width={864}
              height={604}
              className='absolute right-2 inset-0 z-40 max-w-[312px] lg:max-w-[26rem] '
            />
          </div>
        </div>
      </div>
      <div className='w-full h-[2px] bg-[#cccccc8b]  flex justify-center  mt-28 lg:mt-16'></div>

      {/*  work section starts  */}
      <div className='flex flex-col  justify-center items-center px-4   py-24  w-full '>
        <p className='font-display lg:mt-44 relative text-6xl lg:text-8xl w-[300px]   my-2 mt-10 text-left inline-block lg:w-full  lg:max-w-[63rem]'>
          Work{' '}
          <svg
            viewBox='0 0 166.632 21.953'
            overflow='visible'
            id='svg-1498675386_614'
            className='hidden  lg:absolute inset-0 lg:block max-w-[170px] top-[45px]
  left-[191px]'
          >
            <path
              d='M 11.463 20.511 C -20.412 16.704 22.566 -11.331 39.132 5.143 C 55.698 21.618 43.132 12.872 43.132 12.872 L 57.781 7.513 C 61.058 6.314 64.698 7.897 66.055 11.112 L 69.081 18.28 C 69.969 20.384 72.276 21.507 74.48 20.91 L 92.457 16.037 C 100.074 13.972 108.129 14.175 115.632 16.622 L 115.632 16.622 C 123.251 19.107 131.214 20.372 139.228 20.372 L 166.632 20.372'
              fill='transparent'
              strokeWidth='7'
              stroke='#AAA'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
        </p>

        <div className='flex flex-col  justify-center  gap-14  w-full'>
          <div className='flex flex-col lg:flex-row lg:gap-16 justify-center items-center w-full'>
            <div className='flex flex-col   items-center justify-center max-w-[300px] lg:max-w-[650px] w-full  mt-10'>
              <Image
                className='  h-auto object-fill  bg-cover bg-no-repeat'
                alt='work_images_temp'
                src={'/dummyImage.png'}
                width={2520}
                height={1540}
              />
            </div>
            <div className='w-full flex flex-col sm:px-6 lg:px-0  max-w-[350px]'>
              <p className='font-family-dm-sans text-left text-[13px] mt-10 w-[330px] text-text font-medium'>
                voyagemath
              </p>
              <p className='font-family-dm-sans text-left text-[18px] w-[330px] text-primary font-medium'>
                boosting user activation
              </p>
              <p className='font-family-dm-sans lg:text-[16px] text-[14px] mt-2 mb-4 text-text font-medium w-[300px]'>
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
                <p className='absolute left-10 lg:left-5 lg:top-1 top-2 text-text lg:text-2xl'>
                  View Project
                </p>
                <Image
                  className='max-w-[70px] hidden lg:block absolute -top-2 left-34'
                  src={'/lamb.png'}
                  alt='lamb'
                  width={70}
                  height={55}
                />
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
        width={2}
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
