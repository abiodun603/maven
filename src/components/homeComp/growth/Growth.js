import React from "react"
import {GrowthContainer, GrowthsIcon, GrowthWrapper, GrowthIconContainer, GrowthIcon } from "./StyledGrowth"
import One from "../../../assets/images/home/1.svg"
import Two from "../../../assets/images/home/2.svg"
import Three from "../../../assets/images/home/3.svg"
import Four from "../../../assets/images/home/4.svg"
import Five from "../../../assets/images/home/5.svg"
import Six from "../../../assets/images/home/6.svg"
import Sev from "../../../assets/images/home/7.svg"
import Eig from "../../../assets/images/home/8.svg"
import Nin from "../../../assets/images/home/9.svg"
import Ten from "../../../assets/images/home/10.svg"
import Ele from "../../../assets/images/home/11.svg"
import Twe from "../../../assets/images/home/12.svg"
import Thi from "../../../assets/images/home/13.svg"
import Fou from "../../../assets/images/home/14.svg"
import Fit from "../../../assets/images/home/15.svg"
import Sixteen from "../../../assets/images/home/16.svg"
import Nineteen from "../../../assets/images/home/19.svg"

import amazon from "../../../assets/images/home/amazon.svg"
import microsoft from "../../../assets/images/home/microsoft.svg"
import can from "../../../assets/images/home/can.svg"
import spot from "../../../assets/images/home/spot.svg"

const Growth = () => {
    return (
        <>
          <GrowthWrapper>
                <GrowthContainer>
                    {/* column one */}
                        {/* title */}
                        <h2>Driving Growth For Organizaton<br/>and Business</h2>
                        {/* Description */}
                        <div>
                            <p>
                               We do our best to establish a lasting relationship with our clients which is goal<br/>
                               oriented and built on intergrity and trust for one another's enterprise
                            </p>
                        </div>
                        
                        {/* button */}
                        <GrowthIcon>
                            <GrowthIconContainer>
                                <img src={One} alt= ""/>
                            </GrowthIconContainer>
                            <GrowthIconContainer>
                                <img src={Two} alt= ""/>
                            </GrowthIconContainer>
                            <GrowthIconContainer>
                                <img src={Three} alt= ""/>
                            </GrowthIconContainer>
                            <GrowthIconContainer>
                                <img src={Four} alt= ""/>
                            </GrowthIconContainer>
                            <GrowthIconContainer>
                                <img src={Five} alt= ""/>
                            </GrowthIconContainer>
                            <GrowthIconContainer>
                                <img src={Six} alt= ""/>
                            </GrowthIconContainer>
                            {/* Another Six */}
                            <GrowthIconContainer>
                                <img src={Sev} alt= ""/>
                            </GrowthIconContainer>
                            <GrowthIconContainer>
                                <img src={Eig} alt= ""/>
                            </GrowthIconContainer>
                            <GrowthIconContainer>
                                <img src={Nin} alt= ""/>
                            </GrowthIconContainer>
                            <GrowthIconContainer>
                                <img src={Ten} alt= ""/>
                            </GrowthIconContainer>
                            <GrowthIconContainer>
                                <img src={Ele} alt= ""/>
                            </GrowthIconContainer>
                            <GrowthIconContainer>
                                <img src={Twe} alt= ""/>
                            </GrowthIconContainer>
                            <GrowthIconContainer>
                                <img src={Thi} alt= ""/>
                            </GrowthIconContainer>
                            <GrowthIconContainer>
                                <img src={Fou} alt= ""/>
                            </GrowthIconContainer>
                            <GrowthIconContainer>
                                <img src={Fit} alt= ""/>
                            </GrowthIconContainer>
                            <GrowthIconContainer>
                                <img src={Sixteen} alt= ""/>
                            </GrowthIconContainer>
                            <GrowthIconContainer>
                                <img src={Nineteen} alt= ""/>
                            </GrowthIconContainer>
                            {/* <GrowthIconContainer src = {google}  alt=""/>
                            <GrowthIconContainer src = {amazon}  alt=""/>
                            <GrowthIconContainer src = {microsoft}  alt=""/>
                            <GrowthIconContainer src = {can}  alt=""/>
                            <GrowthIconContainer src = {spot}  alt=""/>
                            <GrowthIconContainer src = {google}  alt=""/>
                            <GrowthIconContainer src = {amazon}  alt=""/>
                            <GrowthIconContainer src = {microsoft}  alt=""/>
                            <GrowthIconContainer src = {can}  alt=""/>
                            <GrowthIconContainer src = {spot}  alt=""/>
                            <GrowthIconContainer src = {google}  alt=""/>
                            <GrowthIconContainer src = {amazon}  alt=""/>
                            <GrowthIconContainer src = {microsoft}  alt=""/>
                            <GrowthIconContainer src = {can}  alt=""/>
                            <GrowthIconContainer src = {spot}  alt=""/>
                            <GrowthIconContainer src = {google}  alt=""/>
                            <GrowthIconContainer src = {amazon}  alt=""/>
                            <GrowthIconContainer src = {microsoft}  alt=""/>
                            <GrowthIconContainer src = {can}  alt=""/>
                            <GrowthIconContainer src = {spot}  alt=""/> */}
                        </GrowthIcon>
                </GrowthContainer>
            </GrowthWrapper>
        </>
    )
}

export default Growth