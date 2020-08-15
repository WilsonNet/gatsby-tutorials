import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>
      This is a GraphQl simple tutorial from The Opinionated Guide To React by
      Sara Vieras
    </h1>
    <p>Here are some users from Random Users</p>
    <ul
      style={{
        listStyleType: "none",
        display: "flex",
        content: "space-between",
        flexWrap: "wrap",
      }}
    >
      {data.allRandomUser.edges.map(({ node }) => (
        <li
          style={{
            flexShrink: 0,
            marginLeft: '40px',
            marginRight: '40px',
            width: '100%',
            display: "flex",
            alignItems: "center",
            border: "2px solid rgba(0, 0, 0, 0.5)",
            maxWidth: "300px",
          }}
        >
          <img
            src={node.picture.thumbnail}
            style={{ display: "block", marginRight: "10px" }}
            alt={node.name.first}
          />
          {node.name.first} {node.name.last}
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query Users {
    allRandomUser {
      edges {
        node {
          id
          name {
            first
            last
          }
          picture {
            thumbnail
          }
        }
      }
    }
  }
`
