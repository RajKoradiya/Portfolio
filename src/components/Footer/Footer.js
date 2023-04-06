import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>rajkoradiya003@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/rajkoradiya03/" target="_blank"><Insta color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/raj-koradiya-5b2b5b214/" target="_blank"><LinkedIn color="white" size={"3rem"} /></a>
          <a href="https://github.com/RajKoradiya" target="_blank"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;