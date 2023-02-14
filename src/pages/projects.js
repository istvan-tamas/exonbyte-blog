import React, { Component } from 'react'
import Layout from '../components/layout'

export default class projects extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}></Layout>
    )
  }
}
