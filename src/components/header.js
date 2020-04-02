import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <h1>The Great Gatsby Bootcamp</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
