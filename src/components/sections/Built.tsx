import Image from 'next/image';
import Sheet from '../notebook/Sheet';
import Annotation from '../notebook/Annotation';
import { projects } from '@/data/projects';

export default function Built() {
  const clientCount = projects.filter((p) => p.kind === 'Client work').length;
  const openCount = projects.filter((p) => p.kind === 'Open source').length;

  return (
    <Sheet id='built' marker='p.04'>
      <h2 className='t-title'>Built</h2>

      <p className='t-lead measure mt-5'>
        Client work, a startup, and things I made because I wanted to know how
        they worked.
      </p>

      <p className='t-label mt-6'>
        {clientCount} client
        <span className='mx-2 text-rule'>/</span>1 startup
        <span className='mx-2 text-rule'>/</span>
        {openCount} open source
      </p>

      <Annotation direction='down' className='mt-7'>
        newest freelance work is first
      </Annotation>

      <ol className='mt-5'>
        {projects.map((project) => (
          <li
            key={project.id}
            className='grid gap-x-8 gap-y-4 border-t border-rule py-8 sm:grid-cols-[5rem_minmax(0,1fr)] lg:grid-cols-[5rem_minmax(0,1fr)_9rem]'
          >
            <div className='t-label pt-1'>{project.year}</div>

            <div>
              <div className='flex flex-wrap items-baseline gap-x-3'>
                <h3 className='t-heading'>{project.name}</h3>
                <span className='t-label'>{project.kind}</span>
              </div>

              <p className='mt-1 font-mono text-[0.8125rem] text-ink-soft'>
                {project.role}
              </p>

              <p className='t-body measure mt-3'>{project.summary}</p>

              <ul className='mt-4 flex flex-wrap gap-1.5'>
                {project.stack.map((item) => (
                  <li key={item} className='tag'>
                    {item}
                  </li>
                ))}
              </ul>

              <div className='mt-5 flex flex-wrap gap-x-6 gap-y-2'>
                {project.live && (
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='lnk t-label'
                  >
                    Visit ↗
                  </a>
                )}
                {/* Rendered only when it exists — closed-source work has none. */}
                {project.github && (
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='lnk t-label'
                  >
                    Source ↗
                  </a>
                )}
              </div>
            </div>

            {/* Only real screenshots get a frame. */}
            {project.image && (
              <div className='duotone relative hidden aspect-[4/3] w-full self-start border border-rule lg:block'>
                <Image
                  src={project.image}
                  alt=''
                  fill
                  sizes='9rem'
                  className='object-cover'
                />
              </div>
            )}
          </li>
        ))}
      </ol>
    </Sheet>
  );
}
