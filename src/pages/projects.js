import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Projects extends React.Component {
  render() {
    const { data  } = this.props

    return (
      <Layout location={this.props.location}>
        <h3>Current projects</h3>
  
      </Layout>
    )
  }
}

export default Projects