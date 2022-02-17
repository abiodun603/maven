import React from 'react'
import { 
    AboutContainer, 
    AboutTitle,
    AboutDescription,
    AboutImage,
    AboutImageContainer,
    AboutTitleContainer
} from './StyledAbout'

const AboutDesc = ({imageStart, title, subtitle, description, img, alt}) => {
    return (
        <>
            <AboutContainer imageStart = {imageStart}>
                <AboutTitleContainer>
                    <div>
                        <AboutTitle>{title}</AboutTitle>
                        <AboutDescription>
                            {description}
                        </AboutDescription>
                    </div>
                </AboutTitleContainer>
                <AboutImageContainer >
                    <AboutImage src={img} alt={alt}/>
                </AboutImageContainer>
            </AboutContainer>
        </>
    )
}

export default AboutDesc
