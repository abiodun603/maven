import React from 'react'
import { HeaderCaption, HeaderColumnOne, HeaderColumnTwo, HeaderContainer, HeaderDescription, HeaderWrapper } from './StyledBanner'

const HeadBanner = (props) => {
  return (
    <>
        <HeaderWrapper>
            <HeaderContainer>
                {/*  BOX 1*/}
                <HeaderColumnOne>
                    {/* Head Title */}
                    <h3>
                        {props.title}
                        {/* <img src={yellowsnake} alt="" style={{position:"absolute", top: 15, right: -30, zIndex:-100}}/> */}
                    </h3>
                    {/* Description */}
                    <HeaderDescription>
                        {/* Sub Description` */}
                        <p>
                            {props.children}
                        </p> 
                    </HeaderDescription>
                </HeaderColumnOne>
                
                {/* B0X 2 */}
                <HeaderColumnTwo>
                    {/* image */}
                    <div>
                        <HeaderCaption src={props.src} alt=""/>
                    </div>
                </HeaderColumnTwo>
            </HeaderContainer>
        </HeaderWrapper>
    </>
  )
}

export default HeadBanner