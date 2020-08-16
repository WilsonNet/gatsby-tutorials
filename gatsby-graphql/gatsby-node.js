const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      query Users {
        allRandomUser {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  )

  return result.data.allRandomUser.edges.forEach(edge => {
    createPage({
      path: `/users/#{edge.node.id}`,
      component: path.resolve(`src/templates/user.js`),
      context: {
        id: edge.node.id,
      },
    })
  })
}
