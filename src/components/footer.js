import React from "react"

import footerStyles from "./footer.module.scss"

const Footer = ({ author }) => {
  const year = new Date().getFullYear()
  return (
    <footer className={footerStyles.footer}>
      <p>
        Criado por {author}, &copy; {year}
      </p>
    </footer>
  )
}

export default Footer
