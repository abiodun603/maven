import React from 'react'
import { Button } from '../..'
import { StartContainer, StartWrapper } from './StyledStart'

const Start = () => {
  return (
    <>
        <StartWrapper>
            <StartContainer>
                <p>Do you have an awesome project?</p>
                <Button
                    className= "btn--primary--solid"
                >
                    Get started
                </Button>
            </StartContainer>
        </StartWrapper>
    </>
  )
}

export default Start