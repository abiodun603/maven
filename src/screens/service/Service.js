import React from 'react'
import { FONTS } from '../../assets/theme/theme'

const Service = () => {
  return (
    <div
        style  = {{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...FONTS.h1
        }}
    >Service</div>
  )
}

export default Service