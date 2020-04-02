import React from "react"

import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contato</h1>
      <p>
        Posso ser encontrado em{" "}
        <a
          href="https://twitter.com/GaetaJa"
          target="_blank"
          rel="noopener noreferrer"
        >
          @GaetaJa
        </a>{" "}
        no Twitter!
      </p>
    </Layout>
  )
}

export default ContactPage
