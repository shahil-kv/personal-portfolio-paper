import Sheet from '../notebook/Sheet';
import Annotation from '../notebook/Annotation';
import { experience } from '@/data/experience';

export default function Experience() {
  return (
    <Sheet id='experience' marker='p.03'>
      <h2 className='t-title'>Where I&apos;ve worked</h2>

      <p className='t-lead measure mt-5'>
        Four years, three cities and one company of my own. Freelance work sits
        at the top because it&apos;s what I&apos;m doing right now.
      </p>

      <Annotation direction='down' className='mt-7'>
        two of these are running at the same time
      </Annotation>

      <ol className='mt-5'>
        {experience.map((role) => (
          <li key={role.id} className='border-t border-rule py-7'>
            <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
              <h3 className='t-heading'>{role.title}</h3>
              {role.current && (
                <span className='font-mono text-[0.625rem] tracking-[0.16em] text-stamp uppercase'>
                  Now
                </span>
              )}
            </div>

            <p className='mt-1 flex flex-wrap items-baseline gap-x-2'>
              {role.href ? (
                <a
                  href={role.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='lnk font-mono text-[0.9375rem] text-ink'
                >
                  {role.org} ↗
                </a>
              ) : (
                <span className='font-mono text-[0.9375rem] text-ink'>
                  {role.org}
                </span>
              )}
              <span className='t-label'>{role.type}</span>
            </p>

            <p className='t-label mt-2'>
              {role.period}
              <span className='mx-2 text-rule'>/</span>
              {role.location}
            </p>

            {role.note && <p className='t-body measure mt-3'>{role.note}</p>}
          </li>
        ))}
      </ol>
    </Sheet>
  );
}
