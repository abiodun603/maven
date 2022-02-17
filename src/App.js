import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import { About, Blog, Career, Case, Contact, Home, Product, Service, Train } from "./screens";
import GlobalStyle from "./globalStyles"
import { Footer, Navbar} from "./components";

function App() {
  return (
    <BrowserRouter>
		<GlobalStyle/>
    {/* Navbar Component */}
		<Navbar/>
		<Routes>
			<Route path="/" exact element={<Home/>}/>
      <Route path="/case" element={<Case/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/train" element={<Train/>}/>
      <Route path="/career" element={<Career/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
		</Routes>
    {/* Footer Component */}
    <Footer/>
    </BrowserRouter>
      // <GlobalStyle/>
    // </ThemeProvider>
 
  );
}

export default App;