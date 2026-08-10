'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type Page = { marker: string; label: string; short?: string; href: string };

const pages: Page[] = [
  { marker: 'p.01', label: 'Cover', href: '/' },
  { marker: 'p.02', label: 'On film', href: '/#film' },
  {
    marker: 'p.03',
    label: "Where I've worked",
    short: 'Experience',
    href: '/#experience',
  },
  { marker: 'p.04', label: 'Built', href: '/#built' },
  { marker: 'p.05', label: 'Stack', href: '/#stack' },
  { marker: 'p.06', label: 'Find me', href: '/#find-me' },
  { marker: 'p.00', label: 'About', href: '/about' },
];

/** The handful worth showing inline when there's room for them. */
const inlinePages = pages.filter((p) =>
  ['/#film', '/#experience', '/#built', '/#find-me', '/about'].includes(p.href)
);

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className='sticky top-0 z-50 border-b border-rule bg-paper-deep/94 backdrop-blur-[3px]'>
        <div className='mx-auto flex h-14 w-full max-w-[var(--shell-max)] items-center justify-between gap-4 px-[var(--edge)]'>
          <Link href='/' className='t-label !text-ink whitespace-nowrap'>
            Shahil KV
          </Link>

          <nav className='hidden md:block'>
            <ul className='flex items-center gap-7'>
              {inlinePages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className='lnk t-label'>
                    {page.short ?? page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile: the notebook's index. */}
          <button
            type='button'
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls='page-index'
            className='t-label flex items-center gap-2 md:hidden'
          >
            Index
            <span aria-hidden='true' className='flex flex-col gap-[3px]'>
              <span className='block h-px w-4 bg-ink-soft' />
              <span className='block h-px w-4 bg-ink-soft' />
              <span className='block h-px w-4 bg-ink-soft' />
            </span>
          </button>
        </div>
      </header>

      {open && (
        <div
          id='page-index'
          className='fixed inset-0 z-[60] flex flex-col bg-paper md:hidden'
        >
          <div className='flex h-14 shrink-0 items-center justify-between border-b border-rule px-[var(--edge)]'>
            <span className='t-label'>Index</span>
            <button
              type='button'
              onClick={() => setOpen(false)}
              className='t-label !text-annotate'
            >
              Close
            </button>
          </div>

          <nav className='flex-1 overflow-y-auto px-[var(--edge)]'>
            <ul>
              {pages.map((page) => (
                <li key={page.href} className='border-b border-rule'>
                  <Link
                    href={page.href}
                    onClick={() => setOpen(false)}
                    className='flex items-baseline gap-4 py-5'
                  >
                    <span className='t-label w-10 shrink-0'>{page.marker}</span>
                    <span className='t-title text-[1.75rem]'>{page.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
