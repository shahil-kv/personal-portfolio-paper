import Sheet from '../notebook/Sheet';
import Annotation from '../notebook/Annotation';
import { INSTAGRAM_PROFILE, INSTAGRAM_HANDLE } from '@/data/videos';

const PHONE_DISPLAY = '+91 70123 26928';
const PHONE_E164 = '917012326928';

const channels = [
  {
    label: 'WhatsApp',
    handle: PHONE_DISPLAY,
    href: `https://api.whatsapp.com/send/?phone=%2B${PHONE_E164}&text&type=phone_number&app_absent=0`,
    note: 'Fastest way to get an answer',
  },
  {
    label: 'Instagram',
    handle: INSTAGRAM_HANDLE,
    href: INSTAGRAM_PROFILE,
    note: 'Where new builds go up first',
  },
  {
    label: 'GitHub',
    handle: 'shahil-kv',
    href: 'https://github.com/shahil-kv',
    note: 'Source for everything open',
  },
  {
    label: 'Résumé',
    handle: 'PDF, one page',
    href: '/Shahil%20Resume.pdf',
    note: 'The formal version',
  },
];

export default function FindMe() {
  return (
    <Sheet id='find-me' marker='p.06'>
      <h2 className='t-title'>Find me</h2>

      <p className='t-lead measure mt-5'>
        Working on something that should be automated and isn&apos;t? Tell me
        what it is.
      </p>

      <Annotation direction='down' className='mt-7'>
        whatsapp gets the fastest reply
      </Annotation>

      <ul className='mt-5'>
        {channels.map((channel) => (
          <li key={channel.label} className='border-t border-rule'>
            <a
              href={channel.href}
              target='_blank'
              rel='noopener noreferrer'
              className='group grid gap-x-8 gap-y-1 py-5 sm:grid-cols-[7rem_minmax(0,1fr)_auto] sm:items-baseline'
            >
              <span className='t-label'>{channel.label}</span>
              <span className='t-heading transition-colors group-hover:text-annotate'>
                {channel.handle}
              </span>
              <span className='t-body text-[0.9375rem]'>{channel.note}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className='mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-rule pt-8'>
        <span className='stamp'>Kerala, India · GMT+5:30</span>
        <span className='t-label'>Shahil KV — {new Date().getFullYear()}</span>
      </div>
    </Sheet>
  );
}
