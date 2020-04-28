import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { useQueryParam, StringParam } from "use-query-params";

import Layout from "../components/layout"
import Content from "../components/content"
import ShareUrl from "../components/shareUrl"
import SEO from "../components/seo"

import style from "./show.module.css"

const ShowPage = ({ location }) => {
	const [slogan, setSlogan] = useState(null);
	const [id] = useQueryParam("id", StringParam);
	
	const domain = location.origin ? location.origin : ""
	
	useEffect(() => {
		const getData = async () => {
			const r = await fetch(`/.netlify/functions/show?id=${id}`)
			const data = await r.json()

			setSlogan(data);
		}
		getData();
	}, [id])

	return (
		<Layout>
			<SEO title="Share your slogan" />
			{ slogan ? (
				<>
					<Content {...slogan} />
					<p className={style.designer}> - designed by "{slogan.designer}"</p>
          <ShareUrl value={`${domain}/sweater/${id}`} />
				</>
			) : (
        <p className={style.loading}>Sweater is loading...</p>
      )}
		</Layout>
	)
}


export default ShowPage
