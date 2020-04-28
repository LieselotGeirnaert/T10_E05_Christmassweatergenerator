import React from "react"

import style from "./content.module.css"

const Content = ({ slogan }) => {
  return (
    <p className={style.slogan}>{slogan}</p>
  )
}

export default Content
