import { Link } from 'gatsby'
import React from 'react'

import Logo from './profile_new.png'

const Sidebar = ({ siteMetadata }) => (
  <>
    <aside className="sidebar">
      <header>
        <div className="about">
          <div className="cover-author-image">
            <Link to="/">
              <img src={Logo} alt={siteMetadata.author} />
            </Link>
          </div>
          <div className="author-name">{siteMetadata.author}</div>
          <p>{siteMetadata.description}</p>
        </div>
        <section className="contact">
          <ul>
              <li>
                <Link to="/aboutme">
                  <i className="fa fa-user-circle-o" aria-hidden="true" /> about me 
                </Link>
              </li>
          </ul>
          <ul>
              <li>
                <Link to="/">
                  <i className="fa fa-book" aria-hidden="true" /> posts 
                </Link>
              </li>
          </ul>
          <p></p>
          <ul>
            {siteMetadata.social.github && (
              <li>
                <a
                  href={`https://github.com/${siteMetadata.social.github}`}
                  target="_blank"
                >
                  <i className="fa fa-github" aria-hidden="true" /> github
                </a>
              </li>
            )}
          </ul>
          <ul>
            {siteMetadata.social.linkedin && (
              <li>
                <a
                  href={`https://linkedin.com/in/${siteMetadata.social.linkedin}`}
                  target="_blank"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" /> linkedIn
                </a>
              </li>
            )}
          </ul>
          <ul>
            {siteMetadata.social.email && (
              <li>
                <a href={`mailto:${siteMetadata.social.email}`} target="_blank">
                  <i className="fa fa-envelope-o" aria-hidden="true" /> email
                </a>
              </li>
            )}
          </ul>
        </section>
      </header>
      <footer>
        <div className="copyright">
          <p>
            {new Date().getFullYear()} &copy; {siteMetadata.author}
          </p>
        </div>
      </footer>
    </aside>
  </>
)

export default Sidebar
