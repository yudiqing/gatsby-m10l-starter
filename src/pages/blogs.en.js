import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"
import LocalizedLink from "../components/LocalizedLink"

import blogsPageStyles from "./blogs.module.scss"

const BlogsPage = () => {
  const title = "Blogposts"
  const language = "en"
  const meta = {}
  const description = ""

  const blogs = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { language: { eq: "en" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              date(fromNow: true)
            }
            html
            excerpt
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head
        title={title}
        language={language}
        meta={meta}
        description={description}
      />
      <h1>{title}</h1>
      <ol className={blogsPageStyles.blogsList}>
        {blogs.allMarkdownRemark.edges.map(edge => {
          return (
            <li
              key={edge.node.fields.slug}
              className={blogsPageStyles.blogsItem}
            >
              <LocalizedLink to={`/blogs/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </LocalizedLink>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogsPage
