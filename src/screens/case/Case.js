import React from 'react'
import { FONTS } from '../../assets/theme/theme'

const Case = () => {
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
    >Use Case</div>
  )
}

export default Case