import React, { Component } from 'react'
import { Link } from 'gatsby'
import "../css/navbar.css"


export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div>
            <ul>
                <li>
                <Link to="/">
                  Home
                </Link>
                </li>
                <li>
                <Link to="/blog/">
                  Blog
                </Link>
                </li>
                <li>
                <Link to="/projects/">
                  Projects
                </Link>
                </li>
                <li> <Link to="/about/">
                  About
                </Link></li>
                <li>
                <Link to="https://github.com/istvan-tamas/">
                  github
                </Link>
                </li>
            </ul>
        </div>
      </nav>
    )
  }
}
