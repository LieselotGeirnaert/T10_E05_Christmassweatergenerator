import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./index.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <p className={style.title}>Previous slogans</p>
    <ul className={style.container}>
      {data.allContentfulSweater.edges.map(({ node }) => (
        <li className={style.listitem} key={node.id}>
          <Link to={`sweater/${node.id}`} className={style.link}>- designed by "{node.designer}"</Link>
        </li>
      ))}
    </ul>
    <Link to="/create" className={style.button}>
      Create your own slogan
    </Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allContentfulSweater {
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
