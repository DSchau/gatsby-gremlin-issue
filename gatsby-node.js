const path = require('path')

exports.createPages = async function createPages({ actions: { createPage }, graphql }) {
  const result = await graphql(`
    query GetAllContent {
      markdown:allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
    .then(result => result.data)

  result.markdown.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve('src/templates/md.js'),
      context: {
        slug: node.frontmatter.slug
      }
    })
  });
}
