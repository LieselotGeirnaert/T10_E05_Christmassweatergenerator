const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allContentfulSweater{
          edges {
            node {
              id: contentful_id
              designer
              slogan
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  result.data.allContentfulSweater.edges.forEach(({ node }) => {
    createPage({
      path: node.id,
      component: path.resolve(`./src/templates/sweater.js`),
      context: {
        id: node.id,
        designer: node.designer,
        slogan: node.slogan,
      },
    })
  })
}
