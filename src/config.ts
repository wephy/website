// Single source of truth for site-wide text and links.
// Edit these and the whole site updates.

export const SITE = {
  name: 'Joseph Webb',
  handle: 'webb',
  role: 'Mathematician · Physicist · Programmer',
  // The one-liner under your name on the home page. Plain text; wrap a phrase
  // in *asterisks* to give it the accent colour.
  intro:
  'I am currently a Mathematics PhD student at the University of Oxford. I work on *optimisation* and *machine learning*, supervised by <a class="ext" href="https://people.maths.ox.ac.uk/cartis/" target="_blank" rel="noopener">Coralia Cartis</a>.', 
  description:
  'Joseph Webb — mathematician, physicist, and programmer. Writing and projects.',
} as const;

// Links shown on the home page and in the footer. `external: true` adds the ↗.
export const LINKS = [
  { label: 'CV', href: '/cv.pdf', external: false },
  { label: 'Email', href: 'mailto:joe@wephy.com' },
  { label: 'GitHub', href: 'https://github.com/wephy', external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/wephy', external: true },
] as const;

// Prefix an internal path with the configured base so links keep working
// whether the site is served from '/' or a project subpath like '/website'.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  return base + (path.startsWith('/') ? path : '/' + path);
}
