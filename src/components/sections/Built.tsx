import Sheet from '../notebook/Sheet';
import Annotation from '../notebook/Annotation';
import { projects } from '@/data/projects';

export default function Built() {
  return (
    <Sheet id='built' marker='p.03'>
      <h2 className='t-title'>Built</h2>

      <p className='t-lead measure mt-5'>
        Client work, a startup, and things I made because I wanted to know how
        they worked.
      </p>

      <ol className='mt-12'>
        {projects.map((project, i) => (
          <li
            key={project.id}
            className='grid gap-x-8 gap-y-3 border-t border-rule py-8 sm:grid-cols-[5.5rem_minmax(0,1fr)]'
          >
            <div className='t-label pt-1'>{project.year}</div>

            <div className='relative'>
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

              {i === 0 && (
                <Annotation
                  direction='upLeft'
                  className='mt-5 xl:absolute xl:top-0 xl:right-0 xl:mt-0 xl:translate-x-[calc(100%+1.5rem)]'
                >
                  this one is the day job now
                </Annotation>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Sheet>
  );
}
