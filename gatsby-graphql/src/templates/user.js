import React from "react"
import { graphql } from "gatsby"

const User = ({ data }) => {
  const user = data.allRandomUser.edges[0].node
  return <div>Hello {user.name.first} </div>
}

export default User

export const query = graphql`
  query User($id: String) {
    allRandomUser(filter: { id: { eq: $id } }) {
      edges {
        node {
          name {
            first
          }
        }
      }
    }
  }
`
