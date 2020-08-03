import React from "react"
import { navigate } from "gatsby"
import { useLocale } from "../components/LocaleProvider"

const IndexPage = () => {
  const activeLocale = useLocale().locale
  const defaultLocale = useLocale().defaultLocale
  const homePage =
    activeLocale !== defaultLocale ? `${activeLocale}/home` : "/home"

  return <div>{navigate(homePage)}</div>
}

export default IndexPage
