import React, { createContext, useState, useContext } from "react"
import locales from "../../config/locales"

const LocaleContext = createContext("")

const determineDefaultLocale = () => {
  for (const lang in locales) {
    if (locales[lang].default) {
      return lang
    }
  }
}

const LocaleProvider = ({ children }) => {
  const defaultLocale = determineDefaultLocale()

  const [locale, setLocale] = useState(defaultLocale)

  function changeLocale(lang) {
    setLocale(lang)
  }

  return (
    <LocaleContext.Provider value={{ locale, defaultLocale, changeLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

const useLocale = () => {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error("useLocale must be used within an LocaleProvider")
  }
  return context
}

export { LocaleProvider, useLocale }
