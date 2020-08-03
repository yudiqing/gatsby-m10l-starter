import React from "react"
import { graphql } from "gatsby"
import Head from "../components/Head"
import Layout from "../components/Layout"
import Img from "gatsby-image"

import blogPostStyles from "./blog.module.scss"

export const query = graphql`
  query($slug: String, $locale: String, $dateFormat: String) {
    markdownRemark(fields: { slug: { eq: $slug }, locale: { eq: $locale } }) {
      frontmatter {
        title
        date(formatString: $dateFormat, locale: $locale)
        language
        description
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt
      html
      timeToRead
    }
  }
`

function getTtrText(ttr, language) {
  let unitText = ""
  const plural = ttr > 1

  if (language === "nl") unitText = plural ? "minuten" : "minuut"
  if (language === "en") unitText = plural ? "minutes" : "minute"

  return ttr + " " + unitText
}

const Blog = props => {
  const post = props.data.markdownRemark
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  const title = post.frontmatter.title
  const date = post.frontmatter.date
  const language = post.frontmatter.language
  const meta = {}
  const description = post.frontmatter.description
  const ttr = post.timeToRead
  const ttrText = getTtrText(ttr, language)

  return (
    <Layout>
      <Head
        title={title}
        language={language}
        meta={meta}
        description={description}
      />
      <div className={blogPostStyles.gridContainer}>
        <div className={blogPostStyles.postImage}>
          <Img fluid={featuredImgFluid} alt={description} />
        </div>
        <div className={blogPostStyles.postTitle}>
          <h1>{title}</h1>
        </div>
        <div className={blogPostStyles.postTitleLeft}>
          <p>{date}</p>
        </div>
        <div className={blogPostStyles.postTitleRight}>
          <p>{ttrText}</p>
        </div>
        <div
          className={blogPostStyles.postBody}
          dangerouslySetInnerHTML={{
            __html: props.data.markdownRemark.html,
          }}
        ></div>
      </div>
    </Layout>
  )
}

export default Blog
