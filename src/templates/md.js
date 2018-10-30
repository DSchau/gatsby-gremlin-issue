import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default function Md({ data: { markdown }}) {
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: markdown.html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query GetMarkdown($slug: String!) {
    markdown:markdownRemark(frontmatter:{slug:{eq:$slug}}) {
      html
    }
  }
`