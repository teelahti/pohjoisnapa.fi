# North Pole 2006 expedition web site (www.pohjoisnapa.fi)

This is the archive version of North Pole expedition web site; layout is from 2005 and has never been changed since.
The original web site was a custom, full blown CMS that had functionalities to add diary entries, skiing and weather
data, and gallery images. It was originally built on early ASP.NET WebForms, later on all the CMS features and live
database support was removed and replaced with static data files.

Original hosting was in Azure, and it leveraged Azure's SQL and CDN features.

Recent rewrite was based on [Gatsby JS](https://www.gatsbyjs.org) and hosted on Google Firebase
hosting to get cheap and easy SSL-secured CDN hosting. During rewrite some of HTML was modernized, but otherwise the
site was left intact.

Current, newest rewrite is based on Astro. Again, some modernization was done, but site is still old and ugly. Hosting is still at Google firebase.

## Develop

Run `yarn run dev` for normal development view. To build production site (for testing
purposes, see Deploy below) run `yarn run build`, then test the site e.g. with `yarn run preview`.
Build production site will be at folder /dist, and can be copied from there to any
static (preferably CDN-based) hosting.

## Deploy

CI build and deployment has been set up for this site. Just push to master
branch to deploy. See .github/workflows/deploy.yml for specifics.

To deploy locally built site run `firebase deploy`.

## Maintenance

This is a **frozen archive**; there will never be new content. Dependencies are
intentionally pinned to exact versions and should **not** be routinely updated.
Update a dependency only if a concrete problem affects building or hosting the
site (e.g. a security issue in the build toolchain or a hosting/CI requirement).

The site ships **no client-side dependencies**: the image gallery uses a small
hand-written CSS scroll-snap carousel (see `src/components/Gallery.astro`) instead
of a third-party slider library. The Nix flake pins a stable nixpkgs release rather
than `nixos-unstable` so the dev toolchain does not drift.

### Reader-mode compatibility

Diary entries (`src/components/Diary.astro`) are structured so that Safari
Reader — and other reading apps that use the arc90 Readability heuristics —
recognise them as articles **without altering the visual layout**:

- Each post is a single semantic `<article>` carrying schema.org `BlogPosting`
  microdata, and the layout wrapper is a `<main>` (not an `<article>`) so the
  post is the one unambiguous article on the page.
- The entry body is injected with `<Fragment set:html>` rather than a wrapping
  `<div>`, so the paragraphs sit directly inside the article. Reader scores by
  paragraph length/density and is confused by deeply nested wrapper divs.
- Previous/next links are a `<p class="diaryentry-siblings">` — not a
  `<footer>`, `<nav>`, or a `"nav"`-classed `<div>` — so Reader keeps them in
  the reading view instead of pruning them as navigation chrome.

Very short entries (roughly one or two sentences) still won't trigger Reader:
that is an inherent minimum-length threshold in every reader implementation,
not something the markup can override.

## Misc

The folder "internet-archive" contains some archived pages from the internet discussing this trip.
