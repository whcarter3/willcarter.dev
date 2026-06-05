/* ============================================================================
   Sample content for the blog UI kit.
   NOTE: Body copy is illustrative placeholder written in Will's voice. The
   memorial post is intentionally gentle and non-specific — replace with your
   own words. Nothing here asserts real biographical detail beyond the public
   site (frontend engineer, father, disc golfer, Nintendo fan, KC).
   ========================================================================== */

const POSTS = [
  {
    id: 'gradient-hook',
    title: 'The little hook that paints sunshine',
    date: '2026-05-28',
    dateLabel: 'May 28, 2026',
    readingTime: '6 min',
    tags: ['react', 'css', 'craft'],
    excerpt:
      'Every button on this site has a tiny sun living inside it. Here is the 40-line custom hook that follows your cursor and paints a gradient wherever you point.',
    featured: true,
    cover: '#FE9000',
    category: 'Tech',
  },
  {
    id: 'for-her',
    title: 'For her',
    date: '2026-05-10',
    dateLabel: 'May 10, 2026',
    readingTime: '4 min',
    tags: ['family', 'grief', 'love'],
    excerpt:
      'Some things are too big for a changelog. This one is for my daughter — a small, permanent place on the internet to keep some of the light.',
    category: 'Family',
  },
  {
    id: 'accessible-by-default',
    title: 'Accessible by default, not as an afterthought',
    date: '2026-04-22',
    dateLabel: 'Apr 22, 2026',
    readingTime: '9 min',
    tags: ['a11y', 'react-aria', 'process'],
    excerpt:
      'After a decade shipping SaaS, here is the case for starting from react-aria primitives instead of bolting ARIA on at the end — and what it costs you when you don\u2019t.',
    category: 'Tech',
  },
  {
    id: 'disc-golf-flow',
    title: 'What disc golf taught me about shipping',
    date: '2026-04-03',
    dateLabel: 'Apr 3, 2026',
    readingTime: '5 min',
    tags: ['disc-golf', 'hobbies', 'process'],
    excerpt:
      'You can\u2019t muscle a drive and you can\u2019t muscle a release. Both reward a calm setup, a committed line, and letting go at exactly the right moment.',
    category: 'Hobbies',
  },
  {
    id: 'switch-dad',
    title: 'Co-op mode: raising a player two',
    date: '2026-03-15',
    dateLabel: 'Mar 15, 2026',
    readingTime: '4 min',
    tags: ['nintendo', 'family', 'gaming'],
    excerpt:
      'The first time the controller did exactly what they wanted it to do, the whole room lit up. Thoughts on patience, Kirby, and handing over player two.',
    category: 'Family',
  },
  {
    id: 'state-of-state',
    title: 'I migrated XState to Jotai and lived to tell',
    date: '2026-02-26',
    dateLabel: 'Feb 26, 2026',
    readingTime: '11 min',
    tags: ['react', 'state', 'performance'],
    excerpt:
      'Load times went from fifteen seconds to under five. Here is the honest, unglamorous story of what we ripped out, what we kept, and what I\u2019d do differently.',
    category: 'Tech',
  },
];

// Full body for the featured article (rendered on the post page).
const FEATURED_BODY = [
  { t: 'p', c: 'Open any page on this site and run your cursor across a button. The little burst of yellow-into-orange isn\u2019t a background image and it isn\u2019t a video. It\u2019s a radial gradient that recalculates its center every time the pointer moves — a tiny sun that follows your hand.' },
  { t: 'p', c: 'I\u2019ve shipped a lot of serious things over the years. This is not one of them. It\u2019s about forty lines of code and it makes me grin every single time. Here\u2019s how it works.' },
  { t: 'h2', c: 'The whole idea' },
  { t: 'p', c: 'A radial gradient takes a center point. If we recompute that point from the mouse position relative to the element, the gradient appears to follow the cursor. That\u2019s the entire trick.' },
  { t: 'pre', c: "const handleMouseMove = (e) => {\n  const rect = ref.current?.getBoundingClientRect();\n  const x = e.clientX - rect.left;\n  const y = e.clientY - rect.top;\n  setGradient(\n    `radial-gradient(circle at ${x}px ${y}px, #FFDD4A, #FF9000)`\n  );\n};" },
  { t: 'p', c: 'Wrap that in a hook, return the gradient string alongside the event handlers and a ref, and suddenly any element can hold sunshine.' },
  { t: 'blockquote', c: 'Good craft is mostly small joys that nobody asked for and everybody feels.' },
  { t: 'h2', c: 'Making it theme-aware' },
  { t: 'p', c: 'When I built Nightfall — the dark mode that feels like a sunset dissolving into a starlit sky — I didn\u2019t want the gradient to glow the same noon-yellow. So the stops swap with the theme: gold, to coral, to magenta, to a deep dusk purple. Same hook, different hour of the day.' },
  { t: 'p', c: 'That\u2019s the thing about a good primitive. You write it once, on a Tuesday, for fun — and then it quietly carries your whole brand around for years.' },
];

Object.assign(window, { POSTS, FEATURED_BODY });
