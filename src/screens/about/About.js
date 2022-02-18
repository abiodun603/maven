import React from 'react'
import { AboutWrapper } from './StyledAbout'
import { serviceObjOne,serviceObjTwo, serviceObjThree } from '../../assets/data/service'
import AboutDesc from '../../components/aboutComp/AboutDesc'
import { HeaderBanner } from '../../components'
import about from "../../assets/images/about/aboutBanner.svg"

const About = () => {
  return (
    <>
    {/*  Header Banner Component */}
      <HeaderBanner
          title = "About Us"
          src = {about}
        >
          {/* <p> */}
          We build scalable data pipeline infrastructure & deploy machine learning and artificial<br/> intelligence models. MavenCode is a provider of consulting services and expertise for<br/>building and implementing large scale distributed reactive backend systems for processing<br/>massive large scale datasets.            {/* </p> */}
      </HeaderBanner>
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