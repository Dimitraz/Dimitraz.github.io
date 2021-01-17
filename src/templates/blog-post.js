import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.section``
const Header = styled.header``
const Navigation = styled.nav``

const Heading = styled.h1`
  padding: 0;
  margin: 0;
`

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <Header>
        <Heading itemProp="headline">{post.frontmatter.title}</Heading>
        {post.frontmatter.date}
      </Header>

      <Container dangerouslySetInnerHTML={{ __html: post.html }} />

      <Navigation>
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </Navigation>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
