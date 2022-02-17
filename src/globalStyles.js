import { createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle `
    *{
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');        
        font-family: 'Poppins', sans-serif;    
    }

    body{
        font-family: 'Poppins', sans-serif;    
    }

    a{
        text-decoration: none;
    }
`

export default GlobalStyle;