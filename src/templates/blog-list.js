import React, { useReact, useState } from 'react'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'
import { GatsbyImage } from 'gatsby-plugin-image'

import DefaultLayout from '../components/layout'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    //const allPosts = data.allMdx.edges
    const posts = data.allMdx.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : `../${currentPage - 1}`
    const nextPage = `../${currentPage + 1}`

    //----
//    const emptyQuery = ""
//    const [state, setState] = useState({
//        filteredData: [],
//        query: emptyQuery,
//    })
//    const handleInputChange = event => {
//    console.log(event.target.value)
//    const query = event.target.value
//    const { data } = this.props
//
//    const posts = data.allMdx.edges || []
//
//    const filteredData = posts.filter(post => {
//      const { description, title, tags } = post.node.frontmatter
//      return (
//        description.toLowerCase().includes(query.toLowerCase()) ||
//        title.toLowerCase().includes(query.toLowerCase()) ||
//        (tags &&
//          tags
//            .join("")
//            .toLowerCase()
//            .includes(query.toLowerCase()))
//      )
//    })
//
//    setState({
//      query,
//      filteredData,
//    })
//    }
//
//    const { filteredData, query } = state
//    const hasSearchResults = filteredData && query !== emptyQuery
//    const posts = hasSearchResults ? filteredData : allPosts
       // <div className="searchBox">
       //   <input
       //     className="searchInput"
       //    type="text"
       //     aria-label="Search"
       //     placeholder="Type to filter posts..."
       //     onChange={handleInputChange}
       //    />
       //  </div>
    //----

    return (
      <DefaultLayout>
        <SEO
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className="content-box clearfix">


          {posts.map(({ node }) => {
            return (
              <article className="post" key={node.fields.slug}>
                {node.frontmatter.img &&
                  node.frontmatter.img.childImageSharp &&
                  node.frontmatter.img.childImageSharp.gatsbyImageData && (
                    <Link to={node.fields.slug} className="post-thumbnail">
                      <GatsbyImage
                        image={
                          node.frontmatter.thumbimg.childImageSharp.gatsbyImageData
                        }
                        className="page-image"
                        key={
                          node.frontmatter.img.childImageSharp.gatsbyImageData
                            .src
                        }
                        alt=""
                      />
                    </Link>
                  )}
                <div className="post-content">
                  <h2 className="post-title">
                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  </h2>
                  <p>{node.excerpt}</p>
                  <span className="post-date">
                    {node.frontmatter.date}&nbsp;&nbsp;—&nbsp;
                  </span>
                  <span className="post-words">
                      {node.fields.timeToRead.text}
                  </span>
                  <span className="page-tag">
                    {node.frontmatter.tags &&
                      node.frontmatter.tags.map((tag) => (
                        <span key={tag}>
                          <Link className="tag" to={`/tags/${kebabCase(tag)}/`}>
                            {tag}
                          </Link>
                        </span>
                      ))}
                  </span>
                </div>
              </article>
            )
          })}
          <div className="container">
            <nav className="pagination" role="navigation">
              <ul>
                {!isFirst && (
                  <p>
                    <Link to={prevPage} rel="prev" className="newer-posts">
                      ← Previous Page
                    </Link>
                  </p>
                )}
                <p>
                  <span className="page-number">
                    Page {currentPage} of {numPages}
                  </span>
                </p>
                {!isLast && (
                  <p>
                    <Link to={nextPage} rel="next" className="older-posts">
                      Next Page →
                    </Link>
                  </p>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: {frontmatter: {date: DESC}}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          fields {
            slug
            timeToRead { 
              minutes
              text
              time
              words
            }
          }
          frontmatter {
            date(formatString: "YYYY, MMM DD")
            title
            tags
            thumbimg {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: FULL_WIDTH
                  formats: [AUTO, AVIF, WEBP]
                  transformOptions: {fit: FILL, cropFocus: ATTENTION} 
                )
              }
            }
            img {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: FULL_WIDTH
                  formats: [AUTO, AVIF, WEBP]
                  transformOptions: {fit: FILL, cropFocus: ATTENTION} 
                )
              }
            }
          }
        }
      }
    }
  }
`
