# North Pole 2006 expedition web site (www.pohjoisnapa.fi)

This is the archive version of North Pole expedition web site; layout is from 2005 and has never been changed since.
The original web site was a custom, full blown CMS that had functionalities to add diary entries, skiing and weather
data, and gallery images. It was originally built on early ASP.NET WebForms, later on all the CMS features and live
database support was removed and replaced with static data files.

Original hosting was in Azure, and it leveraged Azure's SQL and CDN features.

This newest rewrite is based on [Gatsby JS](https://www.gatsbyjs.org) and hosted on Google Firebase
hosting to get cheap and easy SSL-secured CDN hosting. During rewrite some of HTML was modernized, but otherwise the
site was left intact.

Language translation setup is inspired from this [article](https://www.gatsbyjs.org/blog/2017-10-17-building-i18n-with-gatsby/).

## Develop

Run `gatsby develop` for normal development view. To build production site (for testing
purposes, see Deploy below) run `gatsby build`, then test the site with `gatsby serve`.
Build production site will be at folder /public, and can be copied from there to any
static (preferably CDN-based) hosting.

## Deploy

CI build and deployment has been set up for this site. Just push to master
branch to deploy. See .github/workflows/deploy.yml for specifics.

To deploy locally built site run `firebase deploy`.

## Misc

The folder "internet-archive" contains some archived pages from the internet discussing this trip.
