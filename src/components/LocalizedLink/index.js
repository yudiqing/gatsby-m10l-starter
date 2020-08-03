import React from "react"
import { Link } from "gatsby"
import { useLocale } from "../LocaleProvider"

// Use the globally available context to choose the right path
const LocalizedLink = ({ to, ...props }) => {
  const { locale } = useLocale()
  let path = to
  // If it's the default language, don't do anything
  // If it's another language, add the "path"
  // However, if the homepage/index page is linked don't add the "to"
  // Because otherwise this would add a trailing slash
  if (!(locale.default || to === `/`)) path = `/${locale.path}${to}`

  return <Link {...props} to={path} />
}

export default LocalizedLink
