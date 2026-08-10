import Image from 'next/image';
import Sheet from '../notebook/Sheet';
import Annotation from '../notebook/Annotation';
import {
  videos,
  INSTAGRAM_PROFILE,
  FOLLOWERS,
  VIDEO_COUNT,
} from '@/data/videos';

export default function OnFilm() {
  return (
    <Sheet id='film' marker='p.02'>
      <h2 className='t-title'>On film</h2>

      <p className='t-lead measure mt-5'>
        {VIDEO_COUNT} videos on building with AI tooling — Claude Code, MCP,
        agents that actually ship. Mostly in Malayalam, because that&apos;s who
        I&apos;m talking to.
      </p>

      <p className='t-label mt-6'>
        {FOLLOWERS} following along
        <span className='mx-2 text-rule'>/</span>
        Pinned three
      </p>

      <Annotation direction='down' className='mt-7'>
        start with this one
      </Annotation>

      {/* A swipe strip on phones, a grid from 640px up. Three 4:5 posters
          stacked full-width is ~1300px of scrolling on a handset. */}
      <ul className='strip mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 sm:overflow-visible lg:grid-cols-3'>
        {videos.map((video) => (
          <li
            key={video.id}
            className='w-[74%] shrink-0 snap-start sm:w-auto'
          >
            <a
              href={video.permalink}
              target='_blank'
              rel='noopener noreferrer'
              className='group block'
            >
              <div className='duotone duotone--reveal relative aspect-[4/5] w-full border border-rule transition-colors group-hover:border-annotate'>
                <Image
                  src={video.poster}
                  alt=''
                  fill
                  sizes='(max-width: 640px) 74vw, (max-width: 1024px) 46vw, 22rem'
                  className='object-cover'
                />
              </div>

              <div className='mt-3 flex items-center gap-3'>
                <span className='t-label shrink-0'>
                  {video.lang === 'ml' ? 'Malayalam' : 'English'}
                </span>
                <span className='h-px flex-1 bg-rule' />
              </div>

              <h3 className='t-heading mt-2 transition-colors group-hover:text-annotate'>
                {video.title}
              </h3>

              <p className='t-body mt-1 text-[0.9375rem]'>{video.note}</p>
            </a>
          </li>
        ))}
      </ul>

      <a
        href={INSTAGRAM_PROFILE}
        target='_blank'
        rel='noopener noreferrer'
        className='lnk t-label mt-10 inline-block'
      >
        Watch all {VIDEO_COUNT} on Instagram ↗
      </a>
    </Sheet>
  );
}
