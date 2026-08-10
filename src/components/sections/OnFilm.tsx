import Image from 'next/image';
import Sheet from '../notebook/Sheet';
import Annotation from '../notebook/Annotation';
import { videos, INSTAGRAM_PROFILE } from '@/data/videos';

export default function OnFilm() {
  return (
    <Sheet id='film' marker='p.02'>
      <div className='relative'>
        <h2 className='t-title'>On film</h2>

        <p className='t-lead measure mt-5'>
          46 videos on building with AI tooling — Claude Code, MCP, agents that
          actually ship. Most of them in Malayalam, because that&apos;s who
          I&apos;m talking to.
        </p>

        <Annotation
          direction='left'
          className='mt-6 lg:absolute lg:top-1 lg:right-0 lg:mt-0'
        >
          5,965 people follow along
        </Annotation>
      </div>

      <ul className='mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'>
        {videos.map((video) => (
          <li key={video.id}>
            <a
              href={video.permalink}
              target='_blank'
              rel='noopener noreferrer'
              className='group block'
            >
              {/* Until a frame grab exists the card is typographic, not a
                  grey void. Drop a poster in and the photo takes over. */}
              <div
                className={`relative flex aspect-[4/5] flex-col justify-between border border-rule p-5 transition-colors group-hover:border-annotate ${
                  video.poster ? 'duotone' : 'bg-paper-deep'
                }`}
              >
                {video.poster && (
                  <Image
                    src={video.poster}
                    alt=''
                    fill
                    sizes='(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 22rem'
                    className='object-cover'
                  />
                )}

                <span className='t-label relative z-10'>
                  {video.lang === 'ml' ? 'Malayalam' : 'English'}
                </span>

                {!video.poster && (
                  <h3 className='t-heading relative z-10 text-[1.3rem] leading-[1.15] transition-colors group-hover:text-annotate'>
                    {video.title}
                  </h3>
                )}
              </div>

              {video.poster && (
                <h3 className='t-heading mt-3 transition-colors group-hover:text-annotate'>
                  {video.title}
                </h3>
              )}

              <p className='t-body mt-3 text-[0.9375rem] leading-relaxed'>
                {video.note}
              </p>
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
        Watch all 46 on Instagram ↗
      </a>
    </Sheet>
  );
}
