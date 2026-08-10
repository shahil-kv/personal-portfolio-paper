import Link from 'next/link';

const pages = [
  { marker: 'p.02', label: 'On film', href: '/#film' },
  { marker: 'p.03', label: 'Built', href: '/#built' },
  { marker: 'p.04', label: 'Stack', href: '/#stack' },
  { marker: 'p.05', label: 'Find me', href: '/#find-me' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 border-b border-rule bg-paper-deep/94 backdrop-blur-[3px]'>
      <div className='mx-auto flex h-14 w-full max-w-[var(--shell-max)] items-center justify-between gap-4 px-[var(--edge)]'>
        <Link href='/' className='t-label !text-ink whitespace-nowrap'>
          Shahil KV
        </Link>

        <nav>
          <ul className='flex items-center gap-4 sm:gap-7'>
            {pages.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className='lnk t-label'>
                  <span className='hidden sm:inline'>{page.label}</span>
                  <span className='sm:hidden'>{page.marker}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link href='/about' className='lnk t-label'>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
