'use client';

import { motion, useReducedMotion } from 'framer-motion';

type Direction = 'up' | 'upRight' | 'upLeft' | 'downRight' | 'left';

const ARROWS: Record<Direction, { viewBox: string; d: string; w: string }> = {
  up: {
    viewBox: '0 0 24 44',
    d: 'M13 43 C 11 31 13 19 12 6 M12 6 L6 16 M12 6 L18 15',
    w: '1.4rem',
  },
  upRight: {
    viewBox: '0 0 64 40',
    d: 'M3 37 C 15 31 29 23 45 8 M45 8 L31 10 M45 8 L45 22',
    w: '3.5rem',
  },
  upLeft: {
    viewBox: '0 0 64 40',
    d: 'M61 37 C 49 31 35 23 19 8 M19 8 L33 10 M19 8 L19 22',
    w: '3.5rem',
  },
  downRight: {
    viewBox: '0 0 64 40',
    d: 'M3 4 C 15 11 29 20 45 33 M45 33 L31 31 M45 33 L45 19',
    w: '3.5rem',
  },
  left: {
    viewBox: '0 0 64 24',
    d: 'M61 12 C 47 13 25 11 6 12 M6 12 L18 6 M6 12 L18 18',
    w: '3.25rem',
  },
};

type Props = {
  children: React.ReactNode;
  direction?: Direction;
  /** Positioning is the caller's job — this component only draws. */
  className?: string;
};

/**
 * The signature element. A red-pencil note plus a drawn arrow that points
 * at something real on the page. Draws itself in once, on scroll.
 * Never decorative — if the note isn't saying something true, don't use it.
 */
export default function Annotation({
  children,
  direction = 'upRight',
  className = '',
}: Props) {
  const reduced = useReducedMotion();
  const arrow = ARROWS[direction];
  const vertical = direction === 'up';
  const arrowFirst = vertical || direction === 'upLeft' || direction === 'left';

  return (
    <motion.span
      className={`pointer-events-none flex gap-1.5 ${
        vertical ? 'flex-col items-start' : 'items-end'
      } ${className}`}
      initial={reduced ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.4 }}
      aria-hidden='true'
    >
      {arrowFirst && <Arrow arrow={arrow} reduced={!!reduced} />}
      <span className='anno max-w-[15rem]'>{children}</span>
      {!arrowFirst && <Arrow arrow={arrow} reduced={!!reduced} />}
    </motion.span>
  );
}

function Arrow({
  arrow,
  reduced,
}: {
  arrow: { viewBox: string; d: string; w: string };
  reduced: boolean;
}) {
  return (
    <svg
      viewBox={arrow.viewBox}
      style={{ width: arrow.w }}
      className='h-auto shrink-0 overflow-visible'
      fill='none'
    >
      <motion.path
        className='anno__path'
        d={arrow.d}
        initial={reduced ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: '-8%' }}
        transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.1 }}
      />
    </svg>
  );
}
