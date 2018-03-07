/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */


// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const path = require('path');
  const moment = require('moment');

  return new Promise((resolve, reject) => {
    const diaryTemplate = path.resolve(`src/templates/diaryentry.js`);
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(`
          query IndexQuery {
            allDataJson {
              edges {
                node {
                  Slug
                  EntryDate
                }
              }
            }
          }
        `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create pages for each markdown file.
        result.data.allDataJson.edges.forEach(({ node }) => {
          const entryDate = node.EntryDate;
          const path = `/diary/${node.Slug}`;

          let basePageInfo = {
              path: path,
              component: diaryTemplate,
              layout: `index`,
              // Use EntryDate as context to be able to query the contents
              context: {
                entryDate: node.EntryDate,
              }
            };

          generatePageInfos(basePageInfo).map(page => createPage(page));
        });
      })
    );
  });
};

// Create language versions of pages. Based on:
// https://github.com/gatsbyjs/gatsby/issues/3853#issuecomment-365216769
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators;

  return new Promise((resolve, reject) => {

    if (page.path.match(/^\/[\w-\/]*\/?$/) && !page.path.includes("404")) {
      const i18nPages = generatePageInfos(page);
      deletePage(page);
      i18nPages.map(page => createPage(page));
    }

    resolve();
  });
}

function generatePageInfos(defaultInfos) {

  const pageFI = {
    ...defaultInfos,
    context: {
      ...defaultInfos.context,
      language: "fi"
    },
    // Use the original path for FI
    path: defaultInfos.path
  };

  const pageEN = {
    ...defaultInfos,
    context: {
      ...defaultInfos.context,
      language: "en"
    },
    // Use altered path for EN
    path: "/en" + defaultInfos.path
  };

  return [pageFI, pageEN];
}
