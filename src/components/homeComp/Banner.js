import React from "react"
import { Button } from ".."
import { BannerWrapper, BannerColumnOne, BannerColumnTwo, BannerContainer, BannerDescription, BannerAction, BannerCaption } from "./StyledBanner"
import suggest from "../../assets/images/home/suggest.svg"
const Banner = () => {
    return (
        <>
            <BannerWrapper>
                <BannerContainer>
                    {/*  BOX 1*/}
                    <BannerColumnOne>
                        {/* Head Title */}
                        <span style={{display: "flex"}}>
                            <span style={{display: "flex"}}>A1 <span> + </span> </span>
                            <span style={{display: "flex"}}> DEEPLEARNING <span> + </span></span> 
                            DATA ANALYTICS
                        </span>
                        <h3>
                            We Build Scalable Data <br/>PipeLine Infrastructure.
                            {/* <img src={yellowsnake} alt="" style={{position:"absolute", top: 15, right: -30, zIndex:-100}}/> */}

                        </h3>
                        {/* Description */}
                        <BannerDescription>
                            {/* Sub Description` */}
                            <p>
                                Unlockthe power of Artificail intelligence to deliver new<br/>
                                business insights and transform decision making by building<br/>
                                scalable data pipline infrastructures & deploy machine<br/>
                                learning and artificial intelligence solutions.
                            </p> 
                        </BannerDescription>
                                                       
                        {/* Action */}
                        <BannerAction>
                            {/* Button 1 */}
                            <Button
                                className= "btn--primary--solid"
                            >
                                Get started
                            </Button>
                        
                        </BannerAction>
                    </BannerColumnOne>
                    
                    {/* B0X 2 */}
                    <BannerColumnTwo>
                        {/* image */}
                        <div>
                            <BannerCaption src={suggest} alt=""/>
                        </div>
                    </BannerColumnTwo>
                </BannerContainer>
            </BannerWrapper>
        </>
    )
}

export default Banner