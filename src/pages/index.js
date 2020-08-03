import React from "react"
import { navigate } from "gatsby"
import { useLocale } from "../components/LocaleProvider"

const IndexPage = () => {
  const { locale } = useLocale()

  const homePage = locale.default ? "/home" : `${locale.path}/home`

  if (typeof window !== "undefined") navigate(homePage)

  return <div></div>
}

export default IndexPage
