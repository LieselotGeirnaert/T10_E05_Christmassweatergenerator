import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import Content from "../components/content"
// import ShareUrl from "../components/shareUrl"
// import SEO from "../components/seo"

import { useQueryParam, StringParam } from "use-query-params";

import style from "./show.module.css"

const ShowPage = () => {
	const [slogan, setSlogan] = useState(null);
	const [id] = useQueryParam("id", StringParam);
	
	console.log(slogan);
	// const domain = location.origin ? location.origin : ""
	
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
			{/* <SEO title="Share your slogan" /> */}
			{ slogan ? (
				<>
          {/* <ShareUrl value={`${domain}/sweater/${id}`} /> */}
					<Content {...slogan} />
				</>
			) : (
        <p className={style.loading}>Sweater is loading...</p>
      )}
		</Layout>
	)
}


export default ShowPage
