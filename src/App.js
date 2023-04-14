// eslint-disable-next-line

import Navbarr from "./Navbarr";
import Home from "./Home";
import About from "./About";
// import Skills from "./Skills";
// import Footer from "./Footer";
import './App.css';
import { BrowserRouter } from "react-router-dom";


function App() {
 return (
   <BrowserRouter>
   <div>

   <Navbarr/>
  
  
 <Home/>
 <br></br>
  <br></br>

 
  <About/>
  <br></br>
  {/* <Skills/>
  <br></br>
  <hr></hr>
  <Footer/> */}
</div>

</BrowserRouter>
 );
}

export default App;
