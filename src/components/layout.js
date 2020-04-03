import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header title={data.site.siteMetadata.title} />
        {children}
      </div>
      <Footer author={data.site.siteMetadata.author} />
    </div>
  )
}

export default Layout
