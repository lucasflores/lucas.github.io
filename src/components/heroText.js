import React from 'react'
import styled, { css } from 'styled-components'
import Typist from 'react-typist'

import { media } from '../utils/style'

const StyledTypist = styled(Typist)`
  color: #fff;
  letter-spacing: 17px;
  max-width: 100%;
  font-size: 72px;
  line-height: 80px;
  font-weight: 100;
  text-transform: uppercase;
  font-family: 'Raleway';
  position: absolute;
  top: 28%;
  left: 30%;
  ${media.md`
  left: 25%;
  top: 28%;
`}
  ${media.xs`
  left: 3%;
  top: 15%;
  letter-spacing: 12px;
  font-size: 45px;
  line-height: 50px;
`}
  a {
    color: #ffffff;
  }
  & a {
    transition: color .4s ease-in;
  }
  a:hover {
    color: #ffee00;
    text-decoration: none;
  }
`

class HeroText extends React.Component {
  render() {
    if (this.props.text) {
      return (
        <Typist>
          <StyledTypist {...this.props}>
            <strong>
              {this.props.text.split(' ').slice(0, 1)}
              <br />
            </strong>
            {this.props.text
              .split(' ')
              .slice(1)
              .join(' ')}
          </StyledTypist>
        </Typist>
      )
    }
    return (
      <StyledTypist cursor={{ show: false }} {...this.props}>
        <Typist.Delay ms={4000} />
        <strong>Hello!</strong> 
        <Typist.Delay ms={500} />
        <span> I'm Lucas</span> 
        <strong>.</strong> 
        <Typist.Delay ms={1000} />
        <Typist.Backspace count={1} />
        <Typist.Delay ms={500} />
        <strong>,</strong> 
        <Typist.Delay ms={1500} />
        <span> And this is my website</span> 
        <strong>.</strong> 
        <Typist.Delay ms={1250} />
        <Typist.Backspace count={41} delay={200} />
        <Typist.Delay ms={800} />
        <strong><a href="https://www.flickr.com/photos/161538372@N02/albums/72157711430913826">:)</a></strong>
      </StyledTypist>
    )
  }
}

export default HeroText
