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
  // Takes you to the contact page rather than mailto:-ing or copying directly.
  { label: 'Contact', href: '/contact', external: false },
  { label: 'CV', href: '/cv.pdf', external: false },
  { label: 'GitHub', href: 'https://github.com/wephy', external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/wephy', external: true },
  // { label: 'Scholar', href: 'https://scholar.google.com/citations?user=ldlTzbYAAAAJ', external: true },
] as const;

// Shown (and each copyable) on the contact page
export const EMAILS = [
  { label: 'personal', address: 'joe@wephy.com' },
  { label: 'college', address: 'joseph.webb@worc.ox.ac.uk' },
  { label: 'department', address: 'webb@maths.ox.ac.uk' },
] as const;

// Shown on the contact page only.
export const ORCID = '0000-0002-3473-5625';
export const SCHOLAR = 'ldlTzbYAAAAJ';


// Prefix an internal path with the configured base so links keep working
// whether the site is served from '/' or a project subpath like '/website'.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:|#)/.test(path)) return path;
  return base + (path.startsWith('/') ? path : '/' + path);
}
