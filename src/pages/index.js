import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Olá.</h1>
      <h2>Meu nome é Gaeta, estudando Gatsby na calma Taubaté.</h2>
      <p>
        Precisa de um desenvolvedor?{" "}
        <Link to="/contact">Entre em contato.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
