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

## Misc

The folder "internet-archive" contains some archived pages from the internet discussing this trip.
