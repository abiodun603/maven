import React from 'react'
import { Button, ContactBanner, ContactBannerWrapper, ContactCaption, ContactColumnOne, ContactColumnTwo, ContactContainer, ContactDescription, ContactForm, ContactFormContainer, ContactFormWrapper, ContactSocialIcon, ContactSocialLinks, ContactWrapper, FormWrapper, FromBx, Input, InputEmail } from './StyledContact'
import contact from "../../assets/images/contact/contact.svg"
import { MdLocationPin } from 'react-icons/md';
import { FaEnvelope } from 'react-icons/fa';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import {FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa"
import { COLORS, FONTS } from '../../assets/theme/theme';
import {HeaderBanner, ScrollTextarea } from '../../components';

const Contact = (props) => {
  return (
    <>  
        {/* Header Banner Component */}
        <HeaderBanner
            title = "Contact"
            src = {contact}
        >
            {/* <p> */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit pellentesque <br/> sodales egestas in nunc. Ipsum odio tincidunt nulla aliquam gravida fringilla<br/>ornare ullamcorper non. A ac hac egestas ut odio neque. Scelerisque ullamcorper lectus<br/>
            {/* </p> */}
        </HeaderBanner>
        {/* Form Wrapper */}
        <ContactFormContainer>
            <ContactFormWrapper>
                <ContactBanner>
                    <ContactBannerWrapper>
                        {/* title */}
                        <h3>Contact us</h3>
                        {/* Citys */}
                        <div className = "city">
                            <h4>UNITED STATES</h4>
                            <p>
                                #133, 630E Southlake Boulevard<br/>
                                Southlake, Texas 76092
                            </p>
                        </div>
                        {/* Citys */}
                        <div  className = "city">
                            <h4>CANADA</h4>
                            <p>
                                #223, 7240 Rue Waverly<br/>
                                Montreal, QC, H2R2Y8
                            </p>
                        </div>
                        {/* Directions */}
                        <div class="directions">
                            <p>Get Direction</p>
                            <div className = "contacts">
                                <FaEnvelope/>
                                <p>hello@mavencode.com</p>
                            </div>

                            <div className = "contacts">
                                <BsFillPhoneVibrateFill/>
                                <p>+234 12345678</p>
                            </div>

                            <div className = "contacts">
                                <MdLocationPin/>
                                <p>Get Direction</p>
                            </div>
                        </div>
                        {/* solcial line */}
                        <span
                            style= {{
                                ...FONTS.body4,
                                color: COLORS.secondary,
                                textAlign: "center",
                                display: 'block',
                                marginBottom: 10
                            }}
                        >Social Link</span>
                        <ContactSocialLinks>
                            <ContactSocialIcon>
                                <FaInstagram/>
                            </ContactSocialIcon>
                            <ContactSocialIcon>
                                <FaTwitter/>
                            </ContactSocialIcon>
                            <ContactSocialIcon>
                                <FaLinkedinIn/>
                            </ContactSocialIcon>
                        </ContactSocialLinks>

                    </ContactBannerWrapper>
                </ContactBanner>
                <FormWrapper>
                    <ContactForm>
                        <h2>Send a Message</h2>
                        <p>
                            Ready to begin your AI & ML Journey?<br/>
                            Contact us below to get started
                        </p>
                        <FromBx>
                            <Input 
                                name= "text"
                                type = "text " 
                                required
                                placeholder = "Name"   
                            />
                        </FromBx>
                        <FromBx>
                            <InputEmail
                                placeholder = "Email"
                                name = "email"
                                required
                            />
                        </FromBx>

                        <FromBx>
                            <Input 
                                name= "text"
                                type = "text " 
                                required
                                placeholder = "Phone number"   
                            />
                        </FromBx>
                        <ScrollTextarea/>
                        <FromBx>
                            <Button type="submit">Send</Button>
                        </FromBx>
                    </ContactForm>
                </FormWrapper>
            </ContactFormWrapper>
        </ContactFormContainer>
    </>
  )
}

export default Contact