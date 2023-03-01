import React from 'react'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

import DefaultLayout from '../components/layout'
import SEO from '../components/seo'

import 'katex/dist/katex.min.css'

const BlogPostTemplate = ({ data, location, children }) => {
    const post = data.mdx
let disqusConfig = {
    identifier: post.id,
    title: post.frontmatter.title.mdx,
  }
    return (
      <DefaultLayout>
        <SEO title={post.frontmatter.title.mdx} description={post.excerpt} />
        <div className="clearfix post-content-box">
          <article className="article-page">
            <div className="page-content">
              {post.frontmatter.img && (
                <div className="page-cover-image">
                  <figure>
                    <GatsbyImage
                      image={
                        post.frontmatter.img.childImageSharp.gatsbyImageData
                      }
                      className="page-image"
                      key={
                        post.frontmatter.img.childImageSharp.gatsbyImageData.src
                      }
                      alt=""
                    />
                  </figure>
                </div>
              )}
              <div className="wrap-content">
                <header className="header-page">
                  <h1 className="page-title">{post.frontmatter.title}</h1>
                  <div className="page-date">
                    <span>{post.frontmatter.date}</span>
                  </div>
                </header>
                <div itemProp="articleBody">{children}</div>
                  <div className="page-footer">
                    <div className="page-tag">
                      {post.frontmatter.tags &&
                        post.frontmatter.tags.map((tag) => (
                          <span key={tag}>
                            <Link className="tag" to={`/tags/${kebabCase(tag)}/`}>
                               {tag}
                            </Link>
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
      <CommentCount config={disqusConfig} placeholder={'...'} />
      <Disqus config={disqusConfig} />
              </div>
          </article>
        </div>
      </DefaultLayout>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "YYYY, MMM DD")
        tags
        img {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, formats: [AUTO, AVIF, WEBP])
          }
        }
      }
    }
  }
`
