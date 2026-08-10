export const INSTAGRAM_PROFILE = 'https://www.instagram.com/_shahilee/';

export type Video = {
  id: string;
  /** Title as posted. Malayalam titles are kept verbatim — that's the voice. */
  title: string;
  lang: 'en' | 'ml';
  /** One line on what a viewer actually walks away with. */
  note: string;
  /** Drop a 4:5 frame grab in /public/videos/ and point at it here. */
  poster?: string;
  permalink: string;
};

/**
 * Titles transcribed from the posts on @_shahilee.
 * To add a video: copy its permalink from Instagram (Share → Copy link),
 * save a frame grab to /public/videos/<id>.jpg, and add an entry here.
 */
export const videos: Video[] = [
  {
    id: 'claude-code-mcp',
    title: 'Integrating Claude Code & MCP for development automation',
    lang: 'en',
    note: 'Wiring MCP servers into a project that already exists.',
    permalink: INSTAGRAM_PROFILE,
  },
  {
    id: 'ai-agent-build',
    title: 'Oru AI Agent njn build cheythkne',
    lang: 'ml',
    note: 'Building an agent end to end, on camera, without cuts.',
    permalink: INSTAGRAM_PROFILE,
  },
  {
    id: 'claude-free',
    title: 'How to use Claude free — meaning unlimited chat',
    lang: 'en',
    note: 'What the free tier actually gets you, and where it stops.',
    permalink: INSTAGRAM_PROFILE,
  },
  {
    id: 'making-with-claude-code',
    title: "Let's see how we can build using Claude Code",
    lang: 'en',
    note: 'A first pass at the tool, from install to first real change.',
    permalink: INSTAGRAM_PROFILE,
  },
  {
    id: 'chatgpt-voice',
    title: 'ChatGPT samsarikunnaa pole samsarich',
    lang: 'ml',
    note: 'Getting a voice agent to hold a conversation that sounds human.',
    permalink: INSTAGRAM_PROFILE,
  },
];
