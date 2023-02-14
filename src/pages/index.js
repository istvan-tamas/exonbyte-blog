import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Navbar from "../components/navbar"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "exonbyte blog"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `exonbyte`, `javascript`, `react`, `software development`]}
        />
        <h1>
          A biochemist in the world of computer science.
        </h1>
        
        <p>Starter blog about software development</p>
        <Link to="/blog/">
          <Button marginTop="35px">Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
