import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css"
import {TiSocialInstagramCircular,TiSocialLinkedin,TiSocialTwitter,TiSocialFacebook} from "react-icons/ti"

const Footer = () => {
  return (
    <>
     <div className=" footerwrap footer-wrapper">
     <div className="footer-wrapper">
        <img src="moviomate logo dark.png"></img>
        <div style={{width:"0.2px",height:"90px",backgroundColor:"rgb(155, 153, 153)",margin:"0 10px"}}></div>
        <div>
          <div>
          <Link to="/tvshows">About</Link>
          <Link to="/tvshows">Benefit</Link>
          <Link to="/tvshows">career</Link>
          <Link to="/tvshows">Support</Link>
          </div>
          <span>2023 flimate .All right reserved</span>
        </div>
      </div>
      <div style={{width:"400px"}}>
        <p>About the company</p>
        <p>Helping us all achieve critical net-zero goals.
             Our Global Net-Zero Lead, Anthony Ma, has one career 
             ambition in mind—to drive real, impactful sustainable change.</p>
        <p></p>
        <TiSocialInstagramCircular/>
        <TiSocialFacebook/>
        <TiSocialLinkedin/>
        <TiSocialTwitter/>
      </div>
     </div>
    </>
  );
};

export default Footer;
