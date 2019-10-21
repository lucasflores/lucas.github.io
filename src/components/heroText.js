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
  top: 40%;
  left: 50%;
  ${media.md`
  left: 25%;
  top: 40%;
`}
  ${media.xs`
  left: 3%;
  top: 15%;
  letter-spacing: 12px;
`}
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
        <strong>I Do Particle Physics</strong> 
        <Typist.Backspace count={19} delay={300} />
        <span> Take Photos</span>
        <Typist.Backspace count={11} delay={300} />
        <span> Travel a decent amount</span>
        <Typist.Backspace count={22} delay={300} />
        <span> Can do a handstand</span>
        <Typist.Delay ms={100} />
        <span>.</span>
        <Typist.Delay ms={200} />
        <span>.</span>
        <Typist.Delay ms={300} />
        <span>.</span>
        <Typist.Backspace count={29} delay={10} />
        <strong>But Mostly I Just</strong> Watch Netflix
      </StyledTypist>
    )
  }
}

export default HeroText
