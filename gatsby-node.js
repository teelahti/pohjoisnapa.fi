const diaryTemplate = require("path").resolve(`src/templates/diaryentry.js`);
const locales = require(`./src/locales/config.js`);

// Implement the Gatsby API “createPages” to create pages from data.
exports.createPages = async ({ actions: { createPage }, graphql }) => {
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
    throw result.errors;
  }

  // Create pages for each diary entry
  result.data.allDataJson.edges.forEach(({ node }) => {
    let basePage = {
      path: `/diary/${node.Slug}`,
      component: diaryTemplate,
      // Use EntryDate as context to be able to query the contents at page implementation
      context: {
        entryDate: node.EntryDate,
      },
    };

    i18nPages(basePage).map(page => createPage(page));
  });
};

// Create language versions of static (non-diary) pages. Based on:
// https://github.com/gatsbyjs/gatsby/issues/3853#issuecomment-365216769
exports.onCreatePage = ({ page, actions: { createPage, deletePage } }) => {
  if (page.path.match(/^\/[\w-\/]*\/?$/) && !page.path.includes("404")) {
    const p = i18nPages(page);
    deletePage(page);
    p.map(page => createPage(page));
  }
};

const i18nPages = page =>
  locales.map(loc => ({
    ...page,
    context: {
      ...page.context,
      language: loc.code,
    },
    path: loc.path + page.path,
  }));
