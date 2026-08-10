import type { Metadata } from 'next';
import Sheet from '@/components/notebook/Sheet';
import Annotation from '@/components/notebook/Annotation';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Shahil KV — developer and founder from Kerala building automation, AI calling agents and the videos that explain them.',
};

export default function About() {
  return (
    <Sheet marker='p.00'>
      <h1 className='t-title'>About</h1>

      <div className='measure mt-8 space-y-6'>
        <p className='t-lead'>
          I&apos;m a developer and founder from Kerala. I build automation for
          businesses that are still doing things by hand, and I film the process
          so other people can copy it.
        </p>

        <p className='t-body'>
          Most of my work sits in the same place: a repetitive process, a person
          spending hours on it, and software that could have handled it. That
          led to Flaro, a calling agent that speaks Malayalam so small
          businesses stop losing customers to a phone nobody answers. Before
          that I spent two years on health-and-safety and permit-to-work systems
          for oil and gas sites, which is where I learned that the hard part is
          never the code.
        </p>

        <p className='t-body'>
          The videos started as notes to myself. I was learning Claude Code, MCP
          and agent tooling, and recording it turned out to be the fastest way
          to find the parts I didn&apos;t understand. Most of them are in
          Malayalam, because the people I most want to reach aren&apos;t served
          by English tutorials.
        </p>
      </div>

      <div className='relative mt-14 border-t border-rule pt-8'>
        <h2 className='t-heading'>What I&apos;ve automated</h2>

        <ul className='measure mt-5 space-y-2'>
          {[
            'A Malayalam-speaking AI calling agent that books appointments and runs surveys',
            'Permit-to-work approvals across request, risk assessment and sign-off',
            'Slack and Discord bots wired into internal tooling',
            'Email sequences and data-parsing pipelines that used to be spreadsheets',
          ].map((item) => (
            <li key={item} className='t-body flex gap-3'>
              <span className='mt-[0.6em] h-px w-4 shrink-0 bg-rule' />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Annotation
          direction='upLeft'
          className='mt-6 xl:absolute xl:top-6 xl:right-0 xl:mt-0'
        >
          all of these started as something someone did by hand
        </Annotation>
      </div>
    </Sheet>
  );
}
