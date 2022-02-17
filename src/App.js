import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import { Home } from "./screens";
import GlobalStyle from "./globalStyles"

function App() {
  return (
    <BrowserRouter>
		<GlobalStyle/>
		<Routes>
			<Route path="/" element={<Home/>}/>
		</Routes>
    </BrowserRouter>
      // <GlobalStyle/>
    // </ThemeProvider>
 
  );
}

export default App;