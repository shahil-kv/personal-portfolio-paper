import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div className='relative w-full max-w-[1150px] min-h-[70rem] overflow-hidden mb-30 lg:mb-40'>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/boxes.png')] bg-repeat bg-[length:1320px_1570px] bg-center opacity-30"
        style={{
          backgroundImage: "url('/boxes.png')",
          filter: 'brightness(0.3) contrast(0.5)',
        }}
      />

      {/* Content Overlay */}
      <div className='relative z-10 w-full flex flex-col opacity-100 lg:px-28 py-4'>
        <div className='flex items-center justify-around h-[400px] lg:h-[700px] w-full'>
          <div>
            <h1 className='font-display  relative text-6xl lg:text-8xl   text-left inline-block lg:w-full lg:max-w-[63rem] text-gray-700'>
              Skills {/* SVG Underline */}
              <svg
                viewBox='0 0 166.632 21.953'
                overflow='visible'
                id='svg-1498675386_614'
                className='hidden lg:absolute inset-0 lg:block max-w-[170px] top-[45px] left-[191px]'
              >
                <path
                  d='M 11.463 20.511 C -20.412 16.704 22.566 -11.331 39.132 5.143 C 55.698 21.618 43.132 12.872 43.132 12.872 L 57.781 7.513 C 61.058 6.314 64.698 7.897 66.055 11.112 L 69.081 18.28 C 69.969 20.384 72.276 21.507 74.48 20.91 L 92.457 16.037 C 100.074 13.972 108.129 14.175 115.632 16.622 L 115.632 16.622 C 123.251 19.107 131.214 20.372 139.228 20.372 L 166.632 20.372'
                  fill='transparent'
                  strokeWidth='7'
                  stroke='#AAA'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </h1>
            <p className='text-2xl font-family-dm-sans text-gray-700 max-w-xs leading-8'>
              {' '}
              skills mean nothing until they build something real.
            </p>
          </div>
          <div
            className='relative lg:block
           hidden'
          >
            <Image
              className=' inset-0  max-w-64  lg:max-w-[22rem] '
              src={'/ringhandle.png'}
              alt='ringhandle'
              width={1428}
              height={132}
            />
            <Image
              className='w-full  max-w-64 lg:max-w-[22rem] z-30'
              src={'/bucket.png'}
              alt='main_bucket'
              width={1428}
              height={1220}
            />
            <svg
              className='absolute lg:max-w-[100px] -top-[160px] left-[260px] '
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 96 104'
            >
              <path
                d='M 24.184 2.678 C 18.875 18.329 7.248 51.68 3.211 59.871 M 36.656 74.899 C 46.313 64.225 67.531 41.925 75.144 38.112 M 53.314 100.678 C 61.175 98.565 80.16 93.94 93.211 92.344'
                fill='transparent'
                strokeWidth='5'
                stroke='rgba(153, 153, 153, 0.8)'
                strokeLinecap='round'
                strokeMiterlimit='10'
              ></path>
            </svg>
            <Image
              src={'/inspirationbucketbottom.png'}
              alt='bucket_bottom'
              width={1428}
              height={1220}
              className='absolute bottom-0   max-w-24 '
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='absolute bottom-8 -left-10  max-w-12'
              viewBox='0 0 42 26'
            >
              <path
                d='M 4.235 16.614 C 0.827 16.921 5.389 20.118 6.927 20.329 C 10.768 20.858 16.148 20.694 20.037 20.245 C 28.597 19.257 32.378 10.099 29.284 4.62 C 25.514 -2.058 9.555 13.671 15.238 19.823 C 19.267 24.183 34.394 23.737 39 20.414'
                fill='transparent'
                strokeWidth='5'
                stroke='rgb(153, 153, 153)'
                strokeLinecap='round'
                strokeMiterlimit='10'
              ></path>
            </svg>

            <div className='absolute bottom-0  h-[2px] w-full bg-[#cccccc8b]  '></div>
          </div>
        </div>

        {/* Skills Content Area */}
        <div className=' gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mb-20'>
          {/* Add your skills content here */}
          <div className='bg-white/80 pt-2  min-w-[250px]  shadow-xl   px-4 max-w-[250px] md:max-w-[500px] lg:max-w-[700px]'>
            {/* <Image src={}/> */}
            <Image
              className=' w-full object-center border-black/10 border-2  object-contain '
              src={'/react.png'}
              alt='react'
              width={100}
              height={100}
            />
            <p className='text-center text-xl py-2 font-display text-primary'>
              React JS
            </p>
          </div>
          <div className='bg-white/80 pt-2   shadow-xl min-w-[250px]  px-4 max-w-[250px] md:max-w-[500px] lg:max-w-[700px]'>
            {/* <Image src={}/> */}
            <Image
              className=' w-full object-center border-black/10 border-2  object-contain'
              src={'/react.png'}
              alt='react'
              width={100}
              height={100}
            />
            <p className='text-center text-xl  py-2 font-display text-primary'>
              React JS
            </p>
          </div>
          <div className='bg-white/80 pt-2 object-contain   shadow-xl min-w-[250px]  px-4 max-w-[250px] md:max-w-[500px] lg:max-w-[700px]'>
            {/* <Image src={}/> */}
            <Image
              className=' w-full object-center border-black/10 border-2  object-cover object-'
              src={'/react.png'}
              alt='react'
              width={100}
              height={100}
            />
            <p className='text-center text-xl py-2 font-display text-primary'>
              React JS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
