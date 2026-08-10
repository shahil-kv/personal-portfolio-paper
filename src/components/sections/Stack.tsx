import Sheet from '../notebook/Sheet';
import { stack } from '@/data/projects';

export default function Stack() {
  return (
    <Sheet id='stack' marker='p.04'>
      <h2 className='t-title'>Stack</h2>

      <p className='t-lead measure mt-5'>
        What I reach for. Nothing here is a percentage bar — either I&apos;ve
        shipped something with it or it isn&apos;t on the list.
      </p>

      <dl className='mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2'>
        {stack.map((group) => (
          <div
            key={group.group}
            className='border-t border-rule pt-4'
          >
            <dt className='t-label'>{group.group}</dt>
            <dd className='mt-3 flex flex-wrap gap-1.5'>
              {group.items.map((item) => (
                <span key={item} className='tag'>
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Sheet>
  );
}
