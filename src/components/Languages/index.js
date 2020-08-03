import React from "react"
import { navigate } from "gatsby"
import locales from "../../config/locales"
import { useLocale } from "../LocaleProvider"

import * as L from "./styled"

const Languages = () => {
  // Grab the locale (passed through context) from the Locale Provider
  // through useLocale() hook
  const { locale, changeLocale } = useLocale()

  function handleClickLanguage(e, language) {
    e.preventDefault()
    if (locale.siteLanguage === language) return

    // Rewrite the URL so we can go no deeper than two levels (excl. locale)
    const url = window.location.pathname.split("/")
    const index = url.indexOf(locale.siteLanguage)
    if (index > -1) {
      url.splice(index, 1)
    }
    if (url.length > 2) {
      url.splice(url.length - 1)
    }

    const newUrl = !locale.default
      ? url.join("/")
      : `/${language}${url.join("/")}`

    changeLocale(language)

    return navigate(newUrl)
  }

  return (
    <div>
      {Object.keys(locales).map((key, index) => {
        return (
          <L.LanguageButton
            key={locales[key].siteLanguage}
            onClick={e => handleClickLanguage(e, locales[key].siteLanguage)}
          >
            <span
              className={
                locale.siteLanguage === locales[key].siteLanguage
                  ? "is-active"
                  : ""
              }
            >
              {locales[key].siteLanguageFull}{" "}
            </span>
          </L.LanguageButton>
        )
      })}
    </div>
  )
}

export default Languages
