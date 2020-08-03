import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Languages from "../Languages"
import menus from "../../config/menus"
import { useLocale } from "../LocaleProvider"

import * as H from "./styled"

const Header = () => {
  const { locale } = useLocale()

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <H.Header>
      <h1>
        <H.Title to="/">{data.site.siteMetadata.title}</H.Title>
      </h1>
      <Languages />
      <nav>
        <H.NavList>
          {Object.keys(menus).map((key, index) => {
            return (
              <li key={menus[key].id}>
                <H.NavItem to={menus[key].path}>
                  {menus[key].translations[locale.siteLanguage]}
                </H.NavItem>
              </li>
            )
          })}
        </H.NavList>
      </nav>
    </H.Header>
  )
}

export default Header
