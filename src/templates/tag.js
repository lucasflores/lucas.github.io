
import React from "react"
import PropTypes from "prop-types"
import { rhythm } from "../utils/typography"
// Components
import { Link, graphql } from "gatsby"


import TimeAgo from 'react-timeago'
import { Flex, Box } from '@rebass/grid'
import { media } from '../utils/style'
import styled, { createGlobalStyle } from 'styled-components'

import Breadcrumb from '../components/breadcrumb'
import Bar from '../components/bar'
import "katex/dist/katex.min.css"

import Footer from '../components/footer'

import SocialIcons from '../components/socialIcons'

const GlobalStyle = createGlobalStyle`
  @import "//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

  html {
    max-width: 100vw;
    overflow-x: hidden;
  }
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  img {
    margin-bottom: 0;
  }
`

const imgRight = styled.div`
  & > div {
    float: right;
    width: 54%;
    padding-left:25px;
  }
`

const Header = styled.div`
  height: fit-contents;
  padding: 0;
  background: #292929;
  position: relative;
  overflow: hidden;

  & > div {
    padding-top: 30px;
    margin: auto;
    max-width: 1100px;
  }
`


const Content = styled.div`
  min-height: 100vh ;
  margin: 0 auto;
  max-width: 960px;
  min-width: 0;
  hr {
    margin: 0 0 40px;
  }
`

const Title = styled.h1`
  margin-top: 0;
  text-transform: capitalize;
  color: #fff;
`

const Timestamp = styled.i`
  float: right;
`

const TimeToRead = styled.h5`
  text-transform: uppercase;
  margin-top: 0.5em;
  display: inline-block;
`


const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
        } tagged with "${tag}"`
    return (
        <div>
      	<Body>
      	<GlobalStyle/>
      	<Content>
            <h1>{tagHeader}</h1>
            <ul>
                {edges.map(({ node }) => {
                    const { slug } = node.fields
                    const { title } = node.frontmatter
                    return (
                        <article key={node.fields.slug}>
                            <header>
                                <h3
                                    style={{
                                    }}
                                >
                                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                                        {title}
                                    </Link>
                                </h3>
                            </header>
                            <section>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html:  node.excerpt,
                                    }}
                                />
                            </section>
                        </article>
                    )
                })}
            </ul>
      	</Content>
      	<Footer/>
     	</Body>
        </div>
    )
}
Tags.propTypes = {
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                        }),
                        fields: PropTypes.shape({
                            slug: PropTypes.string.isRequired,
                        }),
                    }),
                }).isRequired
            ),
        }),
    }),
}
export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
            excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            date
          }
        }
      }
    }
  }
`
