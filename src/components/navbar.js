import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class navbar extends Component {
  render() {
    return (
      <nav>
        <div>
            <ul>
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
