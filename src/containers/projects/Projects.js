import React from "react";
import "./Project.css";
import Button2 from "../../components/button/Button2";
import { Fade } from "react-reveal";


export default function Projects() {
  return (

    <Fade bottom duration={1000} distance="20px">

    <div className="main" id="projects">
      
        <h1 className="project-title">Github Projects</h1>

        <div className="repo-cards-div-main">
            
            <a className="linkProject"  href="https://yossishemi.github.io/backgammonWeb/#/" target="blank">
            <div className="project">
            <img src={require("../../images/backgammonWeb.png")} className="projectImg" alt="Project"/> <br/>
             <p> Backgammon Game </p> 
            </div>
            </a>

            <a className="linkProject"  href="/" target="blank">
            <div className="project">
            <img src={require("../../images/workProject.png")} className="projectImg" alt="Project"/> <br/>
             <p> Comming Soon</p> 
            </div>
            </a>

            <a className="linkProject"  href="/" target="blank">
            <div className="project">
            <img src={require("../../images/workProject.png")} className="projectImg" alt="Project"/> <br/>
             <p> Comming Soon</p> 
            </div>
            </a>

      

        </div>

        <Button2 text={"More Projects"} className="project-button" href="https://github.com/YossiShemi" newTab={true}  />
    </div>

    </Fade>

  );
}
