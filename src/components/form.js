import React from "react"

import style from "./form.module.css"

const Form = () => {
  return (
    <form method="POST" action="/post" className={style.form}>
      <label htmlFor="slogan" className={style.wrapper}>
        <span className={style.label}>Your slogan:</span>
        <textarea
          rows="5"
          id="slogan"
          name="slogan"
          className={style.area}
          required
        ></textarea>
      </label>
      <label htmlFor="designer" className={style.wrapper}>
        <span className={style.label}>Designed by:</span>
        <input
          type="text"
          id="designer"
          name="designer"
          className={style.text}
          placeholder="Carefully designed by..."
          required
        />
      </label>
      <input
        type="submit"
        value="Create your slogan"
        className={style.button}
      />
    </form>
  )
}

export default Form
