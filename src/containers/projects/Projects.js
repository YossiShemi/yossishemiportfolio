import React from "react";
import "./Projects.css";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";


export default function Projects() {
  return (

    <Fade bottom duration={1000} distance="20px">

    <div className="main" id="projects">
      
        <h1 className="project-title">Github Projects</h1>

        <div className="repo-cards-div-main">
            
            <a className="linkProject"  href="https://yossishemi.github.io/backgammonWeb/#/" target="blank">
            <div className="project">
            <img src={require("../../images/backgammonProject.png")} className="projectImg" alt="Project"/> <br/>
             <p className="textProject"> Backgammon Game </p> 
            </div>
            </a>

            <a className="linkProject"  href="/" target="blank">
            <div className="project">
            <img src={require("../../images/workProject.png")} className="projectImg" alt="Project"/> <br/>
             <p className="textProject"> Comming Soon</p> 
            </div>
            </a>

            <a className="linkProject"  href="/" target="blank">
            <div className="project">
            <img src={require("../../images/workProject.png")} className="projectImg" alt="Project"/> <br/>
             <p className="textProject"> Comming Soon</p> 
            </div>
            </a>

      

        </div>

        <Button text={"More Projects"} className="project-button" href="https://github.com/YossiShemi" newTab={true}  />
    </div>

    </Fade>

  );
}
