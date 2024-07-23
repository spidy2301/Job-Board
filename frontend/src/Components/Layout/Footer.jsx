import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import {  FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import "./Footer.css"
const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Job Board.</div>
      <div>
          
        <Link /*to={"https://www.linkedin.com/in/shiva-pandey-9b19b4250/"} */target="_blank">
          <FaLinkedin />
        </Link>
        <Link /*to={"https://www.instagram.com/_shiva__pandey/"}*/ target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
