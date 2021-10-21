import React from 'react'
import { graphql } from 'gatsby'
import { Flex, Box } from 'grid-styled'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import FlickrHero from 'react-flickr-hero'
import MediaQuery from 'react-responsive'

import { media } from '../utils/style'

import Layout from '../components/layout'
import NavBar from '../components/navbar'
import HeroText from '../components/heroText'
import SocialIcons from '../components/socialIcons'
import Portfolio from '../components/portfolio'
import Map from '../components/map'
import Button from '../components/button'
//import { Container } from '../components/Container'
import "katex/dist/katex.min.css"
//import Hovercard from "hovercard"
//const cards = new Hovercard({
//    lang: "en"
//});

const isBrowser = typeof window !== "undefined"

const SocialIconsStyled = styled(SocialIcons)`
  float: none;
  display: inline;
`
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
      font-size: 18px;
      letter-spacing: 2px;
      font-weight: 600;
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
  img {
    width: 15%;
    height: auto;
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
    font-size: 28px;
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
  ${media.xs`
    img {
      width: 50%;
    }
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
        h4 {
          margin-left: 5vw;
        }
        h3 {
          margin-left: 20vw;
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
      <div>
      <MediaQuery minDeviceWidth={768} >
        <FlickrHero
          api_key="ad3be2301d4f44a034ca1f2d6c6b1bfc"
          user_id="161538372@N02"
          album_id="72157711430913826"
          fillPage
        />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={767} >
        <FlickrHero
          api_key="ad3be2301d4f44a034ca1f2d6c6b1bfc"
          user_id="161538372@N02"
          album_id="72157715305777833"
          fillPage
        />
      </MediaQuery>
      </div>
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
        <picture>
          <source type="image/webp" srcset="profile_new.webp"/>
          <source type="image/png" srcset="profile_new.png"/>
          <img src="profile_new.png" alt="profile"/>
        </picture>
        <Title>About Me</Title>
        <Flex alignItems="center" flexDirection="column">
          <Box px={2} width={[1, 5 /8]}>
            <p>
               My name is Lucas Flores and I a have PhD in experimental elementary particle physics from the the University of Pennsylvania. In my PhD work I searched for new never before seen fundamental particles by analyzing large sets of real and simulated proton proton collision data using strong statistical likelihood techniques. This work was done as a part of the  <a href="https://en.wikipedia.org/wiki/ATLAS_experiment">ATLAS experiment</a>, a massive particle detector that sits along the <a href="https://en.wikipedia.org/wiki/Large_Hadron_Collider"> Large Hadron Collider</a> (LHC) at <a href="https://en.wikipedia.org/wiki/CERN"> CERN</a> located near Geneva, Switzerland, where I spent 3+ years living and working. Outside of work I like to make things (in code and of atoms), take photos, listen to podcasts about the nature of the mind, and to never speak in absolutes. Check out the blogfolio section to see some of the things I have made over the years.
            </p>
            <a href="resume.pdf"> <Button center >  résumé  </Button></a>
          </Box>
        </Flex>
      </Section>
      <a id="portfolio">Blogfolio</a>
      <Title small>Blogfolio</Title>
      <Portfolio items={props.data.allMarkdownRemark.edges} />

      <a id="experience">Experience</a>
      <Section center dark>
        <h4>Experience</h4>
        <span>Where I've worked.</span>
        <Item>
          <span>AUG 2015 - SEPT 2021</span>
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
        <Title>About Me</Title>

      <a id="tech">Research</a>
      <Section center>
        <h4>Research</h4>
        <h3>Selected Publications</h3>
        <span>Work I have published.</span>
        <Item>
          <span>2021</span>
          <h6>Search for trilepton resonances from chargino and neutralino pair production in √s=13 TeV pp collisions with the ATLAS detector</h6>
          <p>ATLAS Collaboration <br/>
               <a href="https://journals.aps.org/prd/abstract/10.1103/PhysRevD.103.112003"> PHYSICAL REVIEW D 103, 112003 (2021) </a> </p> 
        </Item>
        <Item>
          <span>2019</span>
          <h6>Electron and photon performance measurements with the ATLAS detector using the 2015-2017 LHC proton-proton collision data</h6>
          <p>ATLAS Collaboration <br/>
               <a href="https://iopscience.iop.org/article/10.1088/1748-0221/14/12/P12006"> JINST 14 P12006 </a> </p> 
        </Item>
        <Item>
          <span>2019</span>
          <h6>Electron reconstruction and identification in the ATLAS experiment using the 2015 and 2016 LHC proton-proton collision data at √s = 13 TeV</h6>
          <p>ATLAS Collaboration <br/>
               <a href="https://link.springer.com/article/10.1140%2Fepjc%2Fs10052-019-7140-6"> The European Physical Journal C </a> </p> 
        </Item>
        <h3>Talks and Posters</h3>
        <span>Work I have presented.</span>
        <Item>
          <span>2021</span>
          <h6>Talk at the APS Division of Particles and Fields Meeting</h6>
          <p>Search for chargino pair-production and chargino-neutralino production with R-Parity Violating decays in pp collisions at √s= 13 TeV with ATLAS <br/>
               <a href="https://indico.cern.ch/event/1034469/contributions/4427253/">  (contribution)</a>
               <a href="https://vimeo.com/manage/videos/613296314">  (recorded talk)</a> </p> 
        </Item>
        <Item>
          <span>2019</span>
          <h6>Poster at The 29th International Symposium on Lepton Photon Interactions at High Energies</h6>
          <p>The ATLAS Electron and Photon Trigger Performance in Run 2 <br/>
               <a href="https://indico.cern.ch/event/688643/contributions/3429780/">  (contribution)</a> </p> 
        </Item>
        <Item>
          <span>2019</span>
          <h6>Poster at the APS Division of Particles and Fields Meeting</h6>
          <p>A Search For 3-lepton Resonances In A Minimal SUSY B-L R-parity Violating Model <br/>
               <a href="https://indico.cern.ch/event/782953/contributions/3515495/">  (contribution)</a> </p> 
        </Item>
        <Item>
          <span>2019</span>
          <h6>Talk at the APS Division of Particles and Fields Meeting</h6>
          <p>A Search For 3-lepton Resonances In A Minimal SUSY B-L R-parity Violating Model <br/>
               <a href="https://indico.cern.ch/event/782953/contributions/3459978/">  (contribution)</a> </p> 
        </Item>
        <Item>
          <span>2017</span>
          <h6>Talk at the annual APS April Meeting</h6>
          <p>Electron Identification with the ATLAS Detector <br/>
               <a href="http://meetings.aps.org/Meeting/APR17/Session/R9.2">  (contribution)</a> </p> 
        </Item>
      </Section>

      <a id="education">Education</a>
      <Section dark center>
        <h4>EDUCATION</h4>
        <span>Education I've recieved.</span>
        <Item>
          <span>2017 - 2021</span>
          <h6>PhD, PARTICLE PHYSICS</h6>
          <p>University of Pennsylvania</p>
        </Item>
        <Item>
          <span>2015 - 2017</span>
          <h6>MSC, PARTICLE PHYSICS</h6>
          <p>University of Pennsylvania</p>
        </Item>
        <Item>
          <span>2010 - 2015</span>
          <h6>BSC, PHYSICS AND APPLIED MATHEMATICS (magna cum laude)</h6>
          <p>University of California Riverside</p>
        </Item>
      </Section>

      <a id="honoursAndAwards">Honors & Awards</a>
      <Section center>
        <h4>HONORS & AWARDS</h4>
        <span>A list of honors and awards I have recieved for my work.</span>
        <Item>
          <span>2014-2015</span>
          <h6>MARC U STAR SCHOLAR FELLOWSHIP</h6>
          <p>University of California Riverside</p>
        </Item>
        <Item>
          <span>2015</span>
          <h6>THE ROBERT T. POE MEMORIAL SCHOLARSHIP AWARD for outstanding bachelor of science graduate</h6>
          <p>University of California Riverside</p>
        </Item>
        <Item>
          <span>2014</span>
          <h6>BENJAMIN C.SHEN MEMORIAL UNDERGRADTUATE SCHOLARSHIP AWARD for outstanding academic achievment by a 3rd year undergraduate student </h6>
          <p>University of California Riverside</p>
        </Item>
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
    file(relativePath: { eq: "DSCF6289.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
