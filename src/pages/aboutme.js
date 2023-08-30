// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files

import React from 'react'
import { Link, graphql } from 'gatsby'
import Map from '../components/map.js'
import { GatsbyImage } from 'gatsby-plugin-image'
import HeroText from '../components/heroText'
import { kebabCase } from 'lodash'

import Layout from '../components/layout'
const AboutMePage = ({ data }) => {
  return (
    <Layout>
      <div className="content-box clearfix" style={{ textAlign: 'center' }}>
        <div className="aboutme" >
          <HeroText style={{ textAlign: 'center' }}/>
	  <p>My name is Lucas Flores and I a have PhD in experimental elementary particle physics from the the University of Pennsylvania. In my PhD work I searched for new never before seen fundamental particles by analyzing large sets of real and simulated proton proton collision data using strong statistical likelihood techniques. This work was done as a part of the  ATLAS experiment, a massive particle detector that sits along the  Large Hadron Collider (LHC) at  CERN located near Geneva, Switzerland, where I spent 3+ years living and working. Outside of work I like to make things (in code and of atoms), take photos, listen to podcasts about the nature of the mind, and to never speak in absolutes. Check out my blog posts to see some of the things I have made over the years.</p>
        <section className="contact">
          <ul style={{ textAlign: 'center' }}>
              <li>
                <a href="/resume.pdf">
                 <i className="fa fa-file-text" aria-hidden="true" /> Résumé
                </a>
              </li>
              <li>
                <a href="/CV.pdf">
                 <i className="fa fa-file-text" aria-hidden="true" /> CV
                </a>
              </li>
          </ul>
        </section>
        </div>
    <Map defCenter={{ lat: 26.224690, lng: 2.110898 }} />
      </div>
    </Layout>
  )
}

export default AboutMePage

export const pageQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: {frontmatter: {tags: SELECT}}) {
        fieldValue
        totalCount
      }
    }
  }
`
