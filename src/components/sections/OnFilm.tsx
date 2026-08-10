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
        {VIDEO_COUNT} videos{' '}
        on building with AI tooling — Claude Code, MCP,
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

      <ul className='mt-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'>
        {videos.map((video) => (
          <li key={video.id}>
            <a
              href={video.permalink}
              target='_blank'
              rel='noopener noreferrer'
              className='group block'
            >
              <div className='duotone relative aspect-[4/5] w-full border border-rule transition-colors group-hover:border-annotate'>
                <Image
                  src={video.poster}
                  alt=''
                  fill
                  sizes='(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 22rem'
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
        className='lnk t-label mt-12 inline-block'
      >
        Watch all {VIDEO_COUNT} on Instagram ↗
      </a>
    </Sheet>
  );
}
