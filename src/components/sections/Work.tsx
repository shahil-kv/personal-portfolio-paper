'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

type Category = 'Company' | 'Hobby' | 'Startup';

const projectsData = [
  {
    id: 1,
    category: 'Startup',
    type: 'Product',
    title: 'Flaro AI Malayalam Calling Agent',
    description:
      'An AI-powered calling agent that can make calls in Malayalam to schedule appointments, conduct surveys, and provide customer support.',
    image: '/project.svg',
    viewLink: 'http://flaro.co',
    githubLink: 'https://github.com/shahil-kv/Flaro_Web',
  },
  {
    id: 2,
    category: 'Hobby',
    type: 'Unlink',
    title: 'An app to stop you from doom scrolling',
    description:
      'An open source application build for people how want to stop scrolling',
    image: '/unlink.png',
    viewLink: 'https://www.getunlink.com/',
    githubLink: 'https://github.com/UnlinkHq/Application/tree/develop',
  },
  {
    id: 3,
    category: 'Hobby',
    type: 'Personal Project',
    title: 'Secure Pass (Personal Password Manager)',
    description:
      'A secure password manager that helps users store and manage their passwords safely and conveniently.',
    image: '/project2.svg',
    viewLink: 'https://ilocks.web.app/',
    githubLink: 'https://github.com/shahil-kv/securePass',
  },
  
  {
    id: 4,
    category: 'Hobby',
    type: 'Hobby Project',
    title: 'Pure Vanila Javascript Illustrator App',
    description:
      'A pure vanilla javascript illustrator app that can be used to create illustrations for your next project.',
    image: '/project3.svg',
    viewLink: 'https://shahil-kv.github.io/illustractor/',
    githubLink: 'https://github.com/shahil-kv/illustractor',
  },
  {
    id: 5,
    category: 'Company',
    type: 'Company Project',
    title: 'PetroHSE',
    description:
      'Discover the powerful capabilities of PetroHSE, an integrated digital solution designed to enhance environmental, health, and safety management. By digitizing data and workflows, PetroHSE seamlessly fits into operational processes, improving safety, efficiency, and compliance. Advanced reporting tools enable automated',
    image: '/petrohse.jpg',
    viewLink: 'https://www.petroinfotech.com/#/products/petrohse',
    githubLink: '',
  },
  {
    id: 6,
    category: 'Company',
    type: 'Company Project',
    title: 'Petro ePermit',
    description:
      'A front-line Permit to Work (PTW) management solution designed to digitize workflows across the entire permit lifecycle. This standalone application automates permit processes, tracks responsibilities of individuals and teams, and manages all phases—from request and risk assessment to authorization, monitoring.',
    image: '/epermit.jpg',
    viewLink: 'https://www.petroinfotech.com/#/products/petro-epermit',
    githubLink: '',
  },
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Company');

  const filteredProjects = projectsData.filter(
    (project) => project.category === activeCategory
  );

  return (
    <div id='work' className='flex flex-col  justify-center items-center px-4   py-24  w-full '>
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

      {/* Toggler */}
      <div className='flex flex-wrap items-center gap-6 lg:gap-12 mt-10 mb-8 lg:mb-16 w-full lg:max-w-[63rem] font-display text-2xl lg:text-4xl'>
        {(['Company', 'Hobby', 'Startup'] as Category[]).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative transition-all duration-300 ${
              activeCategory === category
                ? 'text-primary'
                : 'text-text opacity-50 hover:opacity-100'
            }`}
          >
            {category}
            {activeCategory === category && (
              <svg
                viewBox='0 0 166.632 21.953'
                overflow='visible'
                className='absolute -bottom-2 left-0 w-full h-3 lg:h-4'
                preserveAspectRatio='none'
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
            )}
          </button>
        ))}
      </div>

      <div className='flex flex-col justify-center gap-14 w-full'>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className='flex flex-col lg:flex-row lg:gap-16 justify-center items-center w-full mb-10'>
              <div className='flex flex-col items-center justify-center max-w-[300px] lg:max-w-[650px] w-full mt-10'>
                <Image
                  className='h-auto object-fill bg-cover bg-no-repeat'
                  alt='work_images_temp'
                  src={project.image}
                  width={2520}
                  height={1540}
                />
              </div>
              <div className='w-full flex flex-col sm:px-6 lg:px-0 max-w-[350px] my-10 lg:my-32'>
                <p className='font-family-dm-sans text-left text-[13px] mt-10 w-[330px] text-text font-medium'>
                  {project.type}
                </p>
                <p className='font-family-dm-sans text-left text-[18px] w-[330px] text-primary font-medium'>
                  {project.title}
                </p>
                <p className='font-family-dm-sans lg:text-[16px] text-[14px] mt-2 mb-4 text-text font-medium w-[300px]'>
                  {project.description}
                </p>
                <div className='flex flex-col'>
                  <Link
                    href={project.viewLink}
                    target='_blank'
                    className='mb-4 cursor-pointer'
                    rel='noopener noreferrer'
                  >
                    <button className='text-left relative font-display w-[330px]'>
                      <Image
                        className='w-40 h-10 opacity-70'
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
                    href={project.githubLink}
                    target='_blank'
                    className='cursor-pointer'
                    rel='noopener noreferrer'
                  >
                    <button className='text-left relative font-display w-[330px]'>
                      <Image
                        className='w-40 h-10 opacity-70'
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
          ))
        ) : (
          <div className="flex justify-center items-center py-20 w-full text-text opacity-50 font-display text-2xl">
            No projects in this category yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;

