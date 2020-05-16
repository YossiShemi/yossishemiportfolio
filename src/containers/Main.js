import React, { Component } from "react";
import Header from "./header/Header";
import Greeting from "./greeting/Greeting";
import Projecs from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Top from "./topbutton/Top";




export default class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Greeting />
        <Projecs/>
        <Contact/>
        <Footer/>
        <Top/>
      </div>
    );
  }
}
