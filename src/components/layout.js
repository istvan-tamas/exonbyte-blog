import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Navbar from "./navbar"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`

    let header
    
    return (
      <Wrapper>
        <h1 style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(20),
          }}>exonbyte blog</h1>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <Navbar></Navbar>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()} exonbyte
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
