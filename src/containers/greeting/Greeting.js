﻿import React from "react";
import "./Greeting.css";
import { greeting } from "../../portfolio";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button2 from "../../components/button/Button2";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";

export default function Greeting() {
  return (
    

    <Fade bottom duration={1000} distance="40px">
    

    <div className="greet-main" id="greeting">
      <div className="greeting-main">
       


        <div className="greeting-text-div">
            
            <h1 className="greeting-text">
              {greeting.title}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
           
            <SocialMedia />
            
            <div className="button-greeting-div">
              <Button2 text="Contact me" href="#contact" />
              <Button2 text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div>
        </div>



        <div className="greeting-image-div">
          <img src={require("../../images/manOnTable.svg")} alt="Man on Table"></img>
        </div>


      </div>
    </div>


    </Fade>


  );
}
