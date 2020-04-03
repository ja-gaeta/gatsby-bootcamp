import React from "react"

const Footer = ({ author }) => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <p>
        Criado por {author}, &copy; {year}
      </p>
    </footer>
  )
}

export default Footer
