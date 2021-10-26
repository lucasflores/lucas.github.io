import React from 'react'
import { graphql } from 'gatsby'
import TimeAgo from 'react-timeago'
import { Flex, Box } from '@rebass/grid'
import { media } from '../utils/style'
import styled, { createGlobalStyle } from 'styled-components'

import Breadcrumb from '../components/breadcrumb'
import Bar from '../components/bar'
import "katex/dist/katex.min.css"
import { DiscussionEmbed } from "disqus-react"

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

const Tags = styled.ol`
  float: right;
  list-style: none;
  margin: 0;
  & li a,
  & li {
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    color: #222;


  }
  & > li + li:before {
    padding: 0 8px;
    font-weight: 400;
    color: #444;
    content: '|';
  }
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  min-width: 0;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 5vh;
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

export const disqusConfig = ({ slug, title }) => ({
  shortname: process.env.GATSBY_DISQUS_NAME,
  config: { identifier: title },
})

export default ({ data, location }) => {
  const post = data.markdownRemark
  const crumbs = [
    { name: 'home', link: '/' },
    { name: 'blogfolio', link: '/#blogfolio' },
    { name: post.frontmatter.title, link: location.pathname },
  ]
  const tags = post.frontmatter.tags.map(function(tag) {
    return <li key={tag}>{tag}</li>
  })
  const { frontmatter, excerpt, body, timeToRead } = post
  const { title, slug, cover, showToc } = frontmatter
  return (
    <div>
      <Body>
      <GlobalStyle />
      <Header>
        <Flex flexWrap="wrap">
          <Box px={2} width={[1, 2 / 3, 1 / 3]}>
            <Title>{post.frontmatter.title}</Title>
          </Box>
          <Box px={2} width={[1, 2 / 3]}>
            <Breadcrumb crumbs={crumbs} />
          </Box>
          <Box px={2} width={[1]}>
            <Bar />
          </Box>
        </Flex>
      </Header>
      <Content>
        <TimeToRead>{post.timeToRead} min read</TimeToRead>
        <Tags>{tags}</Tags>
        <Bar />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <DiscussionEmbed {...disqusConfig({ slug, title })} />
        <Timestamp>
          Posted: <TimeAgo date={post.frontmatter.date} />
        </Timestamp>
      </Content>
      <Footer/>
      </Body>
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date
        tags
      }
    }
  }
`
