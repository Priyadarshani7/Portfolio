// eslint-disable-next-line

import Navbarr from "./Navbarr";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
// import Footer from "./Footer";
import './App.css';
import { BrowserRouter } from "react-router-dom";



function App() {
 return (
   <BrowserRouter>
   <div>

   <Navbarr/>
   <Home/>
   <About/>
  
  <Skills/>
  <Project/>
  {/* <br></br>
  <hr></hr>
  <Footer/> */}
</div>

</BrowserRouter>
 );
}

export default App;
