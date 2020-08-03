import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import locales from "../../config/locales"
import { useLocale } from "../LocaleProvider"

import * as F from "./styled"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const copyright = locales[useLocale().locale].copyright

  return (
    <F.Footer>
      <p>
        &copy; 2020 - {data.site.siteMetadata.author} - {copyright}.
      </p>
    </F.Footer>
  )
}

export default Footer
