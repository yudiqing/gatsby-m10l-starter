import React from "react"
import Header from "../Header"
import Footer from "../Footer"

import "../../config/styles/index.scss"
import * as L from "./styled.js"

const Layout = props => {
  return (
    <L.Container>
      <L.Content>
        <Header />
        {props.children}
      </L.Content>
      <Footer />
    </L.Container>
  )
}

export default Layout
