import React from "react"
import { navigate } from "gatsby"
import { useLocale } from "../components/LocaleProvider"

const IndexPage = () => {
  const { locale } = useLocale()

  const homePage = locale.default ? "/home" : `${locale.path}/home`

  return <div>{navigate(homePage)}</div>
}

export default IndexPage
