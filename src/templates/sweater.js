import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Content from "../components/content"
import SEO from "../components/seo"

import style from "./sweater.module.css"

export default ({ pageContext }) => {  
  return (
    <Layout>
      <SEO title="Christmas Sweater Slogan" />
      <Content {...pageContext} />
      <p className={style.designer}> - designed by "{pageContext.designer}"</p>
      <Link to="/create" className={style.button}>
        Create your own slogan
      </Link>
    </Layout>
  )
}