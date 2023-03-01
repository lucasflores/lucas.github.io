import React from 'react'
import Typist from 'react-typist'
import styled from 'styled-components'


const StyledTypist = styled(Typist)`
  color: #2262e;
  letter-spacing: 13px;
  max-width: 100%;
  font-size: 72px;
  line-height: 80px;
  font-weight: 100;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Raleway';
  top: 2%;
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
        <Typist.Delay ms={300} />
        <strong>A</strong> 
        <Typist.Delay ms={300} />
        <strong>b</strong> 
        <Typist.Delay ms={300} />
        <strong>o</strong> 
        <Typist.Delay ms={200} />
        <strong>u</strong> 
        <Typist.Delay ms={100} />
        <strong>t</strong> 
        <Typist.Delay ms={100} />
        <strong>  </strong> 
        <Typist.Delay ms={100} />
        <span>M</span> 
        <Typist.Delay ms={100} />
        <span>E</span> 
      </StyledTypist>
    )
  }
}

export default HeroText
