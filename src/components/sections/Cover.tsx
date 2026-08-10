import Image from 'next/image';
import Sheet from '../notebook/Sheet';
import Annotation from '../notebook/Annotation';

export default function Cover() {
  return (
    <Sheet marker='p.01'>
      {/* The photo track is a fixed width — a `fill` image has no intrinsic
          size, so an `auto` track would collapse to zero. */}
      <div className='grid gap-10 sm:grid-cols-[minmax(0,1fr)_11rem] sm:items-end sm:gap-10 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16'>
        <div>
          <p className='t-label'>Developer · Founder · Automation builder</p>

          <h1 className='t-display mt-5'>Shahil</h1>

          <p className='t-lead measure mt-7'>
            I build automation for businesses drowning in manual work — then
            film myself doing it, mostly in Malayalam.
          </p>

          <p className='t-label mt-8'>
            Kerala, India
            <span className='mx-2 text-rule'>/</span>
            No hype, just real
          </p>
        </div>

        <div className='max-w-[13rem] sm:max-w-none'>
          <div className='duotone relative aspect-[4/5] w-full border border-rule'>
            <Image
              src='/shahilimage.JPG'
              alt='Shahil'
              fill
              sizes='(max-width: 640px) 13rem, (max-width: 1024px) 11rem, 15rem'
              className='object-cover'
              priority
            />
          </div>

          <Annotation direction='up' className='mt-2'>
            same phone as the videos
          </Annotation>
        </div>
      </div>
    </Sheet>
  );
}
