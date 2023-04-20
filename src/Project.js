
import project1 from "./project1.png";
import project2 from "./project2.png";
import {AiOutlineFundProjectionScreen} from "react-icons/ai";
export default function Project(){
    return(
     <div  className="project-section">
     <h1 id="project"className="projectline"><AiOutlineFundProjectionScreen/>Projects</h1>
     <div className="cards">
<div className="card" id="card1">
<img className="project1" src={project1} alt="p-1"/>
<p>Portfolio Website</p>
<button> <a href="https://www.priyadarshani.co/">View</a></button>
</div>

<div className="card" id="card2">
<img className="project2" src={project2} alt="p-2"/>
<p>To-Do-List</p>
<button  > <a href="https://to-do-list-by-piyu.netlify.app/">View</a></button>
</div>
     </div>
    </div>
          
    );
}