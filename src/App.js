// eslint-disable-next-line

import Navbarr from "./Navbarr";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import './App.css';
import { BrowserRouter } from "react-router-dom";


function App() {
 return (
   <BrowserRouter>
   <div>

   <Navbarr/>
  <br></br>
  <br></br>
  <br></br>
  
 <Home/>
 <br></br>
  <br></br>

 
  <About/>
</div>
<Skills/>
</BrowserRouter>
 );
}

export default App;
