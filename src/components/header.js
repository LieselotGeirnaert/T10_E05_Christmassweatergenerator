import { Link } from "gatsby"

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./header.module.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)

  return (
    <header>
      <h1 className={style.container}>
        <Link className={style.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
    </header>
  )
}

export default Header
