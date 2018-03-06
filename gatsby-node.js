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
                  Subject_en
                  Subject_fi
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create pages for each markdown file.
        result.data.allDataJson.edges.forEach(({ node }) => {
          const entryDate = node.EntryDate;
          const path = `/diary/${node.Slug}`;
          
          createPage({
            path: path,
            component: diaryTemplate,
            layout: `index`,
            // Use EntryDate as context to be able to query the contents
            context: {
              entryDate: node.EntryDate,
            },
          });
        });
      })
    );
  });
};