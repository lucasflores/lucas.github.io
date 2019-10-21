import React from 'react'
import { graphql } from 'gatsby'
import { Flex, Box } from 'grid-styled'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import FlickrHero from 'react-flickr-hero'

import { media } from '../utils/style'

import Layout from '../components/layout'
import NavBar from '../components/navbar'
import HeroText from '../components/heroText'
import SocialIcons from '../components/socialIcons'
import Portfolio from '../components/portfolio'
import Showcase from '../components/showcase'
import Map from '../components/map'
import { Container } from '../components/Container'

const Content = styled.div`
  & > a {
    visibility: hidden;
    display: block;
    height: 0;
  }
  & > h1 {
    text-align: center;
  }
`

const Title = styled.h1`
  font-family: 'Raleway';
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  border: none;
  color: #292929;

  ${props =>
    props.small &&
    css`
      font-size: 12px;
      letter-spacing: 2px;
      font-weight: 700;
      line-height: 24px;
    `}
`

const Section = styled.div`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;

  a {
    font-family: 'Lato';
  }

  p {
    margin-bottom: 64px;
    font-size: large;
    color: #666;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Raleway';
    text-transform: uppercase;
    color: #292929;
  }

  h4 {
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #292929;
  }

  span {
    color: #666;
    opacity: 0.5;
    display: block;
  }

  & > div:last-child {
    border-bottom: none !important;
  }

  ${props =>
    props.insta &&
    css`
      width: 80%;
      margin: 0 auto;
      padding-top: 0px;
      padding-bottom: 20px;
   `}

  ${props =>
    props.map &&
    css`
      padding-top: 0px;
      padding-bottom: 0px;
   `}

  ${props =>
    props.center &&
    css`
      text-align: left;
      & > * {
        margin-left: 30vw;
      }
      h4 {
        margin-left: 20vw;
      }

      ${media.xs`
        & > div {
          margin-left: 3vw !important;
        }
    `}
    `}

  ${props =>
    props.dark &&
    css`
      background: #292929;
      * {
        color: #eee;
      }
      span {
        text-align: left;
        font-size: 16px;
        line-height: 28px;
        font-weight: 400;
        opacity: 0.5;
      }
      span,
      p {
        color: #fefefe !important;
      }
      h6 {
        color: #fff;
        font-weight: 700;
      }
      h4 {
        color: #fff;
      }
      div {
        border-bottom: 1px solid #333 !important;
      }
    `}
`

const Item = styled.div`
  width: 40%;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid #eee;
  h6 {
    letter-spacing: 2px;
    font-weight: 700;
    padding-top: 6px;
  }
  span,
  p {
    font-size: 13px;
    line-height: 24px;
    color: #666;
  }
  span {
    opacity: 0.75;
    float: right;
    text-transform: uppercase;
  }
  p {
    margin-bottom: 24px;
    opacity: 0.5;
  }
  ${media.xs`
    width: 90%;

  `}
`

export default props => {
  const content = (
    <Content>
      <FlickrHero
        api_key="ad3be2301d4f44a034ca1f2d6c6b1bfc"
        user_id="161538372@N02"
        album_id="72157711430913826"
        fillPage
      />
      <HeroText />
      <SocialIcons
        style={{
          position: 'absolute',
          margin: '0 auto',
          left: 0,
          right: 0,
          bottom: 16,
        }}
        icons={[
          {
            name: 'github-alt',
            href: 'https://github.com/lucasflores',
          },
          {
            name: 'linkedin',
            href: 'https://ie.linkedin.com/in/lucas-m-flores',
          },
          {
            name: 'gitlab',
            href: 'https://gitlab.cern.ch/luflores',
          },
        ]}
      />
      <a id="about-me">About Me</a>
      <Section>
        <Title>About Me</Title>
        <Flex alignItems="center" flexDirection="column">
          <Box px={2} width={[1, 1 / 2]}>
            <p>
               My name is Lucas Flores and I am currently pusuing my Ph.D at the University of Pennsylvania. 
               My PhD work is in experimental elementary high energy particle physics,
                working on the <a href="https://en.wikipedia.org/wiki/ATLAS_experiment">ATLAS experiment</a> located along the 
               <a href="https://en.wikipedia.org/wiki/Large_Hadron_Collider"> Large Hadron Collider</a> (LHC) at 
               <a href="https://en.wikipedia.org/wiki/CERN"> CERN</a> (a nuclear/accelerator research facility in Geneva, Switzerland). 
            </p>
          </Box>
        </Flex>
      </Section>
      <a id="portfolio">Portfolio</a>
      <Title small>Portfolio</Title>
      <Portfolio items={props.data.allMarkdownRemark.edges} />
      <a id="experience">Experience</a>
      <Section center dark>
        <h4>Experience</h4>
        <span>Where I've worked.</span>
        <Item>
          <span>AUG 2015 - CURRENT</span>
          <h6>UNIVERSITY OF PENNSYLVANIA</h6>
          <p>Reaserch Assistant</p>
        </Item>
        <Item>
          <span>AUG 2015 - JUNE 2016</span>
          <h6>UNIVERSITY OF PENNSYLVANIA</h6>
          <p>Lab Teaching Assistant</p>
        </Item>
        <Item>
          <span>JUNE 2012 - JUNE 2015</span>
          <h6>UNIVERISTY OF CALIFORNIA RIVERSIDE | RELATIVISTIC HEAVY ION COLLIDER</h6>
          <p>Undergraduate Researcher</p>
        </Item>
      </Section>
      <a id="tech">Tech</a>
      <Section center>
        <h4>Tech</h4>
        <span>Technologies I enjoy working with.</span>
        <Showcase
          images={
            props.data.allImageSharp ? props.data.allImageSharp.edges : []
          }
        />
      </Section>
      <a id="education">Education</a>
      <Section dark center>
        <h4>EDUCATION</h4>
        <span>Education I've recieved.</span>
        <Item>
          <span>2017 - Present</span>
          <h6>PhD PARTICLE PHYSICS</h6>
          <p>University of Pennsylvania</p>
        </Item>
        <Item>
          <span>2015 - 2017</span>
          <h6>MSC PARTICLE PHYSICS</h6>
          <p>University of Pennsylvania</p>
        </Item>
        <Item>
          <span>2010 - 2015</span>
          <h6>BSC PHYSICS AND APPLIED MATHEMATICS (magna cum laude)</h6>
          <p>University of California Riverside</p>
        </Item>
      </Section>
      <a id="honoursAndAwards">Honours & Awards</a>
      <Section center>
        <h4>HONORS & AWARDS</h4>
        <span>A list of honors and awards I have recieved for my work.</span>
        <Item>
          <span>2014</span>
          <h6>SOME AWARD FROM UCR I DONT REMEMBER</h6>
          <p>University of California Riverside</p>
        </Item>
      </Section>
      <Section insta>
        <Title small>Instagram</Title>
        <Container 
          nodes={props.data.allInstaNode} 
        />
      </Section>
      <Section map>
        <Map/>
      </Section>
    </Content>
  )
  return (
    <Layout location={props.location}>
      <NavBar main children={content.props.children} />
      {content}
    </Layout>
  )
}

export const pageQuery = graphql`
  query indexQueryAndScrapingQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          timeToRead
          excerpt(pruneLength: 120)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            image {
              childImageSharp {
                sizes(
                  maxWidth: 500
                  duotone: {
                    highlight: "#333333"
                    shadow: "#111111"
                    opacity: 65
                  }
                  ) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
    allImageSharp: allFile(filter: { relativePath: { regex: "/logos/" } }) {
      edges {
        node {
          id
          childImageSharp {
            sizes(maxWidth: 300, grayscale: true) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
    allFile(filter: { name: { regex: "/signature/" } }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 200, grayscale: true) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
    allInstaNode(filter: { username: { eq: "leeewcus" } }) {
      edges {
        node {
          id
          username
          likes
          caption
          comments
          localFile {
            childImageSharp {
              fluid(quality: 70, maxWidth: 300, maxHeight: 300) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          # Only available with the public api scraper
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
  }
`
