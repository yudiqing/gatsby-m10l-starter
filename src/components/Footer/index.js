import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useLocale } from "../LocaleProvider"

import * as F from "./styled"

const Footer = () => {
  const { locale } = useLocale()

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <F.Footer>
      <p>
        &copy; 2020 - {data.site.siteMetadata.author} - {locale.copyright}.
      </p>
    </F.Footer>
  )
}

export default Footer
