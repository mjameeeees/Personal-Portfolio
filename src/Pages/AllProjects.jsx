import Project from "../components/Project";
import { Link } from "react-router-dom";
export default function AllProjects(){
    
 return(
        <> 
        <div className="flex flex-row justify-start align-center gap-5">
          <Link to="/" className="flex cursor-pointer pt-1">
          <img className="w-[25px] h-[25px]" src="./icons/arrow-back.png" alt="" />
          <p>Back to Home</p>
          </Link>
          <p className="font-bold text-2xl">Projects</p>
        </div>
          <Project/>
        </>
    )
}