import React from "react";
import tlf from "../../../assets/tlfLogo.png";
import linkedin from "../../../assets/linkedinLogo.png";
import gitHub from "../../../assets/githubLogo.png";

const Social = () => {
  return (
    <div id="socialCointainer">
      <div id="social">
        <img src={tlf}  alt="tlfLogo"/>
        <img src={linkedin} alt="linedinLogo"/>
        <img src={gitHub} alt="gitHubLogo"/>
      </div>
    </div>
  )
};

export default Social;
