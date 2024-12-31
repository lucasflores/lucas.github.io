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
	  <p> I am a Senior AI Scientist and Engineer at Albeado (<a href="https://albeado.com/team/core-team/"> https://albeado.com/team/core-team/</a>), focused on the research and development of sophisticated and novel data-driven algorithms in the field of causal inference, leading in the application of novel causal AI and ML solutions for Albeado’s partners. I hold a PhD in experimental high energy particle physics from the University of Pennsylvania. During my PhD I worked at the The European Organization for Nuclear Research (CERN) where I performed searches for theorized subatomic particles in petabytes of physics data produced by the Large Hadron Collider (LHC) physics experiment. Check out my blog posts to see some of the things I have made over the years.</p>
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
    <Map defCenter={{ lat: 37.784298, lng: -122.423073 }} />
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
