export const INSTAGRAM_PROFILE = 'https://www.instagram.com/_shahilee/';
export const INSTAGRAM_HANDLE = '@_shahilee';
/* Rounded on purpose: this is a static export, so nothing can keep an
   exact count current. Bump it when it's meaningfully wrong. */
export const FOLLOWERS = '~6,000';
export const VIDEO_COUNT = 46;

export type Video = {
  id: string;
  /** Title as posted. Malayalam titles stay verbatim — that's the voice. */
  title: string;
  lang: 'en' | 'ml';
  /** One line on what a viewer walks away with. */
  note: string;
  poster: string;
  permalink: string;
};

/**
 * The three pinned posts on @_shahilee.
 * To swap one out: save a 4:5 frame grab to /public/videos/, then replace
 * the entry here along with its permalink (Instagram → Share → Copy link).
 */
export const videos: Video[] = [
  {
    id: 'claude-code-mcp',
    title: 'Claude Code and MCP, wired into one workflow',
    lang: 'en',
    note: 'Figma, Vercel and GitHub driving an automated development cycle.',
    poster: '/videos/claude-code-mcp.jpg',
    permalink: INSTAGRAM_PROFILE,
  },
  {
    id: 'making-with-claude-code',
    title: "Let's see how we can build using Claude Code",
    lang: 'en',
    note: 'From install to the first real change in an existing project.',
    poster: '/videos/making-with-claude-code.jpg',
    permalink: INSTAGRAM_PROFILE,
  },
  {
    id: 'claude-free',
    title: 'How to use Claude free — meaning unlimited chat',
    lang: 'en',
    note: 'What the free tier actually gets you, and exactly where it stops.',
    poster: '/videos/claude-free.jpg',
    permalink: INSTAGRAM_PROFILE,
  },
];
