import React from "react"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <p>Criado por José A. Gaeta Mendes, &copy; {year}</p>
    </footer>
  )
}

export default Footer
