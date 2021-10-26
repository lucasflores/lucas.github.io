import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Flex, Box } from '@rebass/grid'
import scrollToElement from 'scroll-to-element'
import FlickrLightbox from 'react-flickr-lightbox'

import Name from './name'
import Button from './button'
import SocialIcons from './socialIcons'

const Base = styled.div`
  height: fit-contents;
  padding: 0;
  background: #292929;
`

const FooterText = styled.div`
  padding-top: 0px;
  color: #fff;
  text-align: left;
  a {
    color: #9880dc;
  }
  h6 {
    font-family: 'Raleway';
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    padding-top: 0px;
  }
`

const SocialIconsStyled = styled(SocialIcons)`
  margin-left: -8px;
  text-align: left;
`

const CenteredButtonBox = styled(Box)`
  margin: 2em auto;
`

const GalleryContainer = styled.div`
  & > div > div {
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`

class Footer extends React.Component {
  render() {
    return (
      <Base {...this.props}>
        <Flex flexWrap="wrap" justifyContent="space-around">
          <Box px={2} width={[0.9,215,215,215]} >
            <Flex flexDirection="column">
              <Box>
                <Name block />
              </Box>
              <Box>
                <SocialIconsStyled
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
              </Box>
            </Flex>
          </Box>
          <Box width={[0.5,100,100,100]} order={[1,0,0,0]}>
            <Flex justifyContent="center" flexDirection="column">
              <CenteredButtonBox>
                <Button
                  onClick={() => {
                    scrollToElement('html')
                  }}
                  small="small"
                  dark="dark"
                  opaque="opaque"
                >
                  Top
                </Button>
              </CenteredButtonBox>
            </Flex>
          </Box>
          <Box px={2} width={[0.90,215,215,215]} >
            <Flex flexDirection="column">
              <Box> 
                <FooterText>
                  <h6>
                    <a href="mailto:lucasmacrorieflores@gmail.com"> lucasmacrorieflores@gmail.com </a> <br></br> 
                    <br></br>
                    <br></br>
                    Route F.Bloch 22 <br></br> 
                    1217 Meyrin <br></br>
                    Switzerland <br></br>
                  </h6>
                </FooterText>
              </Box> 
            </Flex>
          </Box>
        </Flex>
      </Base>
    )
  }
}

export default Footer
