import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>Sobre mim</h1>
      <p>No momento aproveitando a quarentena do Coronavírus para estudar.</p>
      <p>
        <Link to="/contact">Quer trabalhar comigo?</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
