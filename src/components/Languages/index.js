import React from "react"
import { navigate } from "gatsby"
import locales from "../../config/locales"
import { useLocale } from "../LocaleProvider"

import * as L from "./styled"

const Languages = () => {
  // Grab the locale (passed through context) from the Locale Provider
  // through useLocale() hook
  const { changeLocale } = useLocale()
  const activeLocale = useLocale().locale
  const defaultLocale = useLocale().defaultLocale

  function handleClickLanguage(e, locale) {
    e.preventDefault()
    if (activeLocale === locale) return

    // Rewrite the URL so we can go no deeper than two levels (excl. locale)
    const url = window.location.pathname.split("/")
    const index = url.indexOf(activeLocale)
    if (index > -1) {
      url.splice(index, 1)
    }
    changeLocale(locale)

    if (url.length > 2) url.splice(url.length - 1)

    const newUrl =
      locale === defaultLocale ? url.join("/") : `/${locale}${url.join("/")}`

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
                activeLocale === locales[key].siteLanguage ? "is-active" : ""
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
