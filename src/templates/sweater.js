import React from "react"
import Layout from "../components/layout"
import Content from "../components/content"
import style from "./sweater.module.css"
import { Link } from "gatsby"
import SEO from "../components/seo"

export default ({ pageContext }) => {
  console.log(pageContext);

  
  return (
    <Layout>
      <SEO title="Je hebt een vuistje gekregen" />
      <Content {...pageContext} />
      <p className={style.designer}> - designed by "{pageContext.designer}"</p>
      <Link to="/create" className={style.button}>
        Create your own slogan
      </Link>
    </Layout>
  )
}
