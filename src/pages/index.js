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
          Hello World
        </h1>
        <Navbar></Navbar>
        <p>This is my personal blog about software development</p>
        <p>
          This is my digital journal.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
