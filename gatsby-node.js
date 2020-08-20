const locales = require(`./src/locales/config.js`);

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const path = require("path");
  const diaryTemplate = path.resolve(`src/templates/diaryentry.js`);

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(`
    query {
      allDataJson {
        edges {
          node {
            Slug
            EntryDate
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    return;
  }

  // Create pages for each markdown file.
  result.data.allDataJson.edges.forEach(({ node }) => {
    const path = `/diary/${node.Slug}`;

    let basePageInfo = {
      path: path,
      component: diaryTemplate,
      // Use EntryDate as context to be able to query the contents
      context: {
        entryDate: node.EntryDate,
      },
    };

    generatePageInfos(basePageInfo).map(page => createPage(page));
  });
};

// Create language versions of pages. Based on:
// https://github.com/gatsbyjs/gatsby/issues/3853#issuecomment-365216769
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.match(/^\/[\w-\/]*\/?$/) && !page.path.includes("404")) {
    const i18nPages = generatePageInfos(page);
    deletePage(page);
    i18nPages.map(page => createPage(page));
  }
};

function generatePageInfos(defaultInfos) {
  return locales.map(loc => ({
    ...defaultInfos,
    context: {
      ...defaultInfos.context,
      language: loc.code,
    },
    path: loc.path + defaultInfos.path,
  }));
}
