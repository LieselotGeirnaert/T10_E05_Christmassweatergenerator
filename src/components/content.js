import React from "react"

import style from "./content.module.css"

const Content = ({ slogan }) => {
  return (
    <div className={style.container}>
      <p className={style.slogan}>{slogan}</p>
    </div>
  )
}

export default Content
