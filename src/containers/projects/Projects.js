import React from "react";
import "./Project.css";
import Button2 from "../../components/button/Button2";
import { Fade } from "react-reveal";
import Paper from '@material-ui/core/Paper';


export default function Projects() {
  return (

    <Fade bottom duration={1000} distance="20px">

    <div className="main" id="projects">
      
        <h1 className="project-title">Github Projects</h1>

        <div className="repo-cards-div-main">
        <Paper className="project" elevation={5}>
        <img src={require("../../images/backgammonWeb.png")} className="working"/> <br/>
          <a className="linkProject" href="https://yossishemi.github.io/backgammonWeb/#/" target="blank"> Go To Backgammon Game</a>
        </Paper>
        <Paper className="project" elevation={5}>
        <img src={require("../../images/working.jpg")} className="working"/> <br/>
           Comming Soon .. <br/>
        </Paper>
        <Paper className="project" elevation={5}>
        <img src={require("../../images/working.jpg")} className="working"/> <br/>
           Comming Soon .. <br/>
        </Paper>
        </div>

        <Button2 text={"More Projects"} className="project-button" href="https://github.com/YossiShemi" newTab={true}  />
    </div>

    </Fade>

  );
}
