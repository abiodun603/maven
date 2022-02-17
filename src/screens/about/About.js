import React from 'react'
import { FONTS } from '../../assets/theme/theme'
import { AboutWrapper } from './StyledAbout'
import { serviceObjOne,serviceObjTwo, serviceObjThree } from '../../assets/data/service'
import AboutDesc from '../../components/aboutComp/AboutDesc'

const About = () => {
  return (
    <>
      {/* =========== SERVICE ============= */}
      <AboutWrapper>
          <AboutDesc {...serviceObjOne}/>
          <AboutDesc {...serviceObjTwo}/>
          <AboutDesc {...serviceObjThree}/>
      </AboutWrapper>
    </>
  )
}

export default About