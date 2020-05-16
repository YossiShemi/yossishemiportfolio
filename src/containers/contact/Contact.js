import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import { Bounce } from "react-reveal";

export default function Contact() {
    return (

        <Bounce botton duration={2000} distance="20px">


        <div className="contact-margin-top" id="contact">
            <div className="contact-div-main">
                
            <div className="contact-image-div">
                    <img alt="Saad Working" src={require("../../images/contactMail.png")}></img>
                </div>
                
                <div className="contact-header">
                    <h1 className=" contact-title">{contactInfo.title}</h1>
                    <p className=" contact-subtitle">{contactInfo.subtitle}</p>
                    <div className="contact-text-div">
                    <a className="contact-detail" href={"tel:" + contactInfo.number}>{contactInfo.number}</a>
                        <br/><br/>
                        <a className="contact-detail-email"
                           href={"mailto:" + contactInfo.email_address}>{contactInfo.email_address}</a>
                        <br/><br/>
                        <SocialMedia/>
                    </div>
                </div>


               


            </div>
        </div>


        </Bounce>

    );
}
