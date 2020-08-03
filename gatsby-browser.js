import React from "react"
import { LocaleProvider } from "./src/components/LocaleProvider"

export const wrapPageElement = ({ element, props }) => {
  return <LocaleProvider {...props}>{element}</LocaleProvider>
}
