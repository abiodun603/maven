import React from "react"
import {PartnerContainer, PartnersIcon, PartnerWrapper, PatnersIconContainer } from "./StyledPartner"
import google from "../../../assets/images/home/google.svg"
import amazon from "../../../assets/images/home/amazon.svg"
import microsoft from "../../../assets/images/home/microsoft.svg"
import can from "../../../assets/images/home/can.svg"
import spot from "../../../assets/images/home/spot.svg"

const Partner = () => {
    return (
        <>
          <PartnerWrapper>
                <PartnerContainer>
                    {/* column one */}
                        {/* title */}
                        <h2>Our trusted Partners</h2>
                        {/* Description */}
                        <div>
                            <p>
                               MavenCode has partnered with Google Cloud, Amazon AWS, ThoughSpot, and<br/>
                               Microsoft to offer our customers diversity and far ranging expertise when choosing a<br/>
                               Cloud Service Provider
                            </p>
                        </div>
                        
                        {/* button */}
                        <PartnersIcon>
                            <PatnersIconContainer src = {google}  alt=""/>
                            <PatnersIconContainer src = {amazon}  alt=""/>
                            <PatnersIconContainer src = {microsoft}  alt=""/>
                            <PatnersIconContainer src = {can}  alt=""/>
                            <PatnersIconContainer src = {spot}  alt=""/>
                        </PartnersIcon>
                </PartnerContainer>
            </PartnerWrapper>
        </>
    )
}

export default Partner