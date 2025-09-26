import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Work = () => {
  return (
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
              src={'/project.svg'}
              width={2520}
              height={1540}
            />
          </div>
          <div className='w-full flex flex-col sm:px-6 lg:px-0  max-w-[350px]'>
            <p className='font-family-dm-sans text-left text-[13px] mt-10 w-[330px] text-text font-medium'>
              Product
            </p>
            <p className='font-family-dm-sans text-left text-[18px] w-[330px] text-primary font-medium'>
              Flaro AI Malayalam Calling Agent
            </p>
            <p className='font-family-dm-sans lg:text-[16px] text-[14px] mt-2 mb-4 text-text font-medium w-[300px]'>
              An AI-powered calling agent that can make calls in Malayalam to
              schedule appointments, conduct surveys, and provide customer
              support.
            </p>
            <div className='flex  flex-col '>
              <Link
                href='http://flaro.co'
                target='_blank'
                className='mb-4'
                rel='noopener noreferrer'
              >
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
              </Link>
              <Link
                href='https://github.com/shahil-kv/Flaro_Web'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='text-left relative font-display w-[330px]'>
                  <Image
                    className='w-40 h-10 opacity-70 '
                    src={'/button.png'}
                    alt='button'
                    width={1220}
                    height={392}
                  />
                  <p className='absolute left-10 lg:left-5 lg:top-1 top-2 text-text lg:text-2xl'>
                    Github
                  </p>
                  <Image
                    className='max-w-[70px] hidden lg:block absolute -top-3 left-34'
                    src={'/github.svg'}
                    alt='github'
                    width={70}
                    height={55}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col  justify-center  gap-14  w-full'>
        <div className='flex flex-col lg:flex-row lg:gap-16 justify-center items-center w-full'>
          <div className='flex flex-col   items-center justify-center max-w-[300px] lg:max-w-[650px] w-full  mt-10'>
            <Image
              className='  h-auto object-fill  bg-cover bg-no-repeat'
              alt='work_images_temp'
              src={'/project2.svg'}
              width={2520}
              height={1540}
            />
          </div>
          <div className='w-full flex flex-col sm:px-6 lg:px-0  max-w-[350px] my-10 lg:my-32'>
            <p className='font-family-dm-sans text-left text-[13px] mt-10 w-[330px] text-text font-medium'>
              Personal Project
            </p>
            <p className='font-family-dm-sans text-left text-[18px] w-[330px] text-primary font-medium'>
              Secure Pass (Personal Password Manager)
            </p>
            <p className='font-family-dm-sans lg:text-[16px] text-[14px] mt-2 mb-4 text-text font-medium w-[300px]'>
              A secure password manager that helps users store and manage their
              passwords safely and conveniently.
            </p>
            <div className='flex  flex-col '>
              <Link
                href='https://ilocks.web.app/'
                target='_blank'
                className='mb-4 cursor-pointer'
                rel='noopener noreferrer'
              >
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
              </Link>
              <Link
                href='https://github.com/shahil-kv/securePass'
                target='_blank'
                rel='noopener noreferrer cursor-pointer'
              >
                <button className='text-left relative font-display w-[330px]'>
                  <Image
                    className='w-40 h-10 opacity-70 '
                    src={'/button.png'}
                    alt='button'
                    width={1220}
                    height={392}
                  />
                  <p className='absolute left-10 lg:left-5 lg:top-1 top-2 text-text lg:text-2xl'>
                    Github
                  </p>
                  <Image
                    className='max-w-[70px] hidden lg:block absolute -top-3 left-34'
                    src={'/github.svg'}
                    alt='github'
                    width={70}
                    height={55}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col  justify-center  gap-14  w-full'>
        <div className='flex flex-col lg:flex-row lg:gap-16 justify-center items-center w-full'>
          <div className='flex flex-col   items-center justify-center max-w-[300px] lg:max-w-[650px] w-full  mt-10'>
            <Image
              className='  h-auto object-fill  bg-cover bg-no-repeat'
              alt='work_images_temp'
              src={'/project3.svg'}
              width={2520}
              height={1540}
            />
          </div>
          <div className='w-full flex flex-col sm:px-6 lg:px-0  max-w-[350px]'>
            <p className='font-family-dm-sans text-left text-[13px] mt-10 w-[330px] text-text font-medium'>
              Hobby Project
            </p>
            <p className='font-family-dm-sans text-left text-[18px] w-[330px] text-primary font-medium'>
              Pure Vanila Javascript Illustrator App
            </p>
            <p className='font-family-dm-sans lg:text-[16px] text-[14px] mt-2 mb-4 text-text font-medium w-[300px]'>
              A pure vanilla javascript illustrator app that can be used to
              create illustrations for your next project.
            </p>
            <div className='flex  flex-col '>
              <Link
                href='https://shahil-kv.github.io/illustractor/'
                target='_blank'
                className='mb-4'
                rel='noopener noreferrer'
              >
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
              </Link>
              <Link
                href='https://github.com/shahil-kv/illustractor'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='text-left relative font-display w-[330px]'>
                  <Image
                    className='w-40 h-10 opacity-70 '
                    src={'/button.png'}
                    alt='button'
                    width={1220}
                    height={392}
                  />
                  <p className='absolute left-10 lg:left-5 lg:top-1 top-2 text-text lg:text-2xl'>
                    Github
                  </p>
                  <Image
                    className='max-w-[70px] hidden lg:block absolute -top-3 left-34'
                    src={'/github.svg'}
                    alt='github'
                    width={70}
                    height={55}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
