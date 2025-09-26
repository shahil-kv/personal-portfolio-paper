'use client';
import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react';
import {
  motion,
  useScroll,
  MotionValue,
  transform,
  motionValue,
} from 'framer-motion';

type Skill = {
  name: string;
  icon: string;
};

const skills: Skill[] = [
  { name: 'React JS', icon: '/react.png' },
  { name: 'Next.js', icon: '/react.png' },
  { name: 'TypeScript', icon: '/react.png' },
  { name: 'JavaScript', icon: '/react.png' },
  { name: 'Tailwind CSS', icon: '/react.png' },
  { name: 'Framer Motion', icon: '/react.png' },
];

type SkillItemProps = {
  skill: Skill;
  index: number;
  scrollYProgress: MotionValue<number>;
  animationDone: boolean;
};

const SkillItem = ({
  skill,
  index,
  scrollYProgress,
  animationDone,
}: SkillItemProps) => {
  const x = motionValue(600);
  const y = motionValue(100);
  const rotate = motionValue(0);

  useEffect(() => {
    const finalX = 150 + (index % 3) * 250;
    const finalY = -50 + Math.floor(index / 3) * 250;

    if (animationDone) {
      x.set(finalX);
      y.set(finalY);
      rotate.set(0);
      return;
    }

    const updatePositions = (latest: number) => {
      const tiltStart = 0.1;
      const tiltEnd = 0.2;
      const fallStart = 0.2;
      const fallEnd = fallStart + 0.2 + index * 0.05;

      const bucketX = 600;
      const bucketY = -450;

      const fallStartX = bucketX - 100;
      const fallStartY = bucketY + 50;

      if (latest < tiltStart) {
        x.set(bucketX);
        y.set(bucketY + index * 50);
        rotate.set(0);
      } else if (latest >= tiltStart && latest <= tiltEnd) {
        const progress = transform(latest, [tiltStart, tiltEnd], [0, 1]);
        x.set(transform(progress, [0, 1], [bucketX, fallStartX]));
        y.set(transform(progress, [0, 1], [bucketY + index * 50, fallStartY]));
        rotate.set(transform(progress, [0, 1], [0, -60]));
      } else if (latest > fallStart && latest < fallEnd) {
        const progress = transform(latest, [fallStart, fallEnd], [0, 1]);
        x.set(transform(progress, [0, 1], [fallStartX, finalX]));
        y.set(transform(progress, [0, 1], [fallStartY, finalY]));
        rotate.set(transform(progress, [0, 1], [-60, 0]));
      } else {
        x.set(finalX);
        y.set(finalY);
        rotate.set(0);
      }
    };

    const unsubscribe = scrollYProgress.onChange(updatePositions);
    updatePositions(scrollYProgress.get());

    return () => unsubscribe();
  }, [scrollYProgress, x, y, rotate, index, animationDone]);

  return (
    <motion.div style={{ y, x, rotate }} className='absolute z-20'>
      <div className='bg-white/80 pt-2  min-w-[200px]  shadow-xl   px-4 max-w-[200px]'>
        <Image
          className=' w-full object-center border-black/10 border-2  object-contain '
          src={skill.icon}
          alt={skill.name}
          width={100}
          height={100}
        />
        <p className='text-center text-xl py-2 font-display text-primary'>
          {skill.name}
        </p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });
  const [animationDone, setAnimationDone] = useState(false);

  const lastItemIndex = skills.length - 1;
  const animationEndThreshold = 0.2 + 0.2 + lastItemIndex * 0.05;

  const bucketRotate = motionValue(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (animationDone) {
      bucketRotate.set(0);
      return;
    }

    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest >= animationEndThreshold) {
        setAnimationDone(true);
      } else if (latest >= 0.1 && latest <= 0.2) {
        const newRotate = transform(latest, [0.1, 0.2], [0, -60]);
        bucketRotate.set(newRotate);
      } else if (latest < 0.1) {
        bucketRotate.set(0);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, animationDone, bucketRotate, animationEndThreshold]);

  return (
    <div
      ref={containerRef}
      className='relative w-full max-w-[1150px] min-h-[70rem] mb-30 lg:mb-40'
    >
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
              Skills
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
              skills mean nothing until they build something real.
            </p>
          </div>
          <motion.div
            style={{ rotate: bucketRotate }}
            className='relative lg:block hidden'
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
          </motion.div>
        </div>

        {/* Skills Content Area */}
        <div className='hidden lg:block'>
          <>
            {skills.map((skill, index) => (
              <SkillItem
                key={skill.name}
                skill={skill}
                index={index}
                scrollYProgress={scrollYProgress}
                animationDone={animationDone}
              />
            ))}
          </>
        </div>
        <div className='gap-8 grid grid-cols-1 md:grid-cols-2 justify-items-center mb-20 px-4 lg:hidden'>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className='bg-white/80 pt-2 min-w-[250px] shadow-xl px-4 max-w-[250px]'
            >
              <Image
                className='w-full object-center border-black/10 border-2 object-contain'
                src={skill.icon}
                alt={skill.name}
                width={100}
                height={100}
              />
              <p className='text-center text-xl py-2 font-display text-primary'>
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
