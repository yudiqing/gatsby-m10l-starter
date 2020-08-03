import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"

const AboutPage = () => {
  const title = "About"
  const language = "en"
  const meta = {}
  const description = ""

  return (
    <Layout>
      <Head
        title={title}
        language={language}
        meta={meta}
        description={description}
      />
      <h1>{title}</h1>
    </Layout>
  )
}

export default AboutPage
