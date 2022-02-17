import React from 'react'
import { ContactCaption, ContactColumnOne, ContactColumnTwo, ContactContainer, ContactDescription, ContactWrapper } from './StyledContact'
import contact from "../../assets/images/contact/contact.svg"
const Contact = () => {
  return (
    <>
      <ContactWrapper>
                <ContactContainer>
                    {/*  BOX 1*/}
                    <ContactColumnOne>
                        {/* Head Title */}
                        <h3>
                            Contact
                            {/* <img src={yellowsnake} alt="" style={{position:"absolute", top: 15, right: -30, zIndex:-100}}/> */}

                        </h3>
                        {/* Description */}
                        <ContactDescription>
                            {/* Sub Description` */}
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit pellentesque<br/>
                                sodales egestas in nunc. Ipsum odio tincidunt nulla aliquam gravida fringilla<br/>
                                ornare ullamcorper non. A ac hac egestas ut odio neque. Scelerisque ullamcorper lectus<br/>
                                vitae varius mi elementum. 
                            </p> 
                        </ContactDescription>
                    </ContactColumnOne>
                    
                    {/* B0X 2 */}
                    <ContactColumnTwo>
                        {/* image */}
                        <div>
                            <ContactCaption src={contact} alt=""/>
                        </div>
                    </ContactColumnTwo>
                </ContactContainer>
            </ContactWrapper>
    </>
  )
}

export default Contact