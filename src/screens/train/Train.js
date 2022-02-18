import React from 'react'
import { FONTS } from '../../assets/theme/theme'

const Train = () => {
  return (
    <div
        style  = {{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...FONTS.h1
        }}
    >Training</div>
  )
}

export default Train