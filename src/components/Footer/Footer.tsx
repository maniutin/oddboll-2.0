import "./Footer.scss";
import React from "react";

import IgLogo from "../../assets/social_logos/ig_logo.png";
import MixcloudLogo from "../../assets/social_logos/mixcloud_logo.svg";
import ScLogo from "../../assets/social_logos/sc_logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social-links">
        <a
          href="https://www.instagram.com/odddboll/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          <img
            src={IgLogo}
            alt="instagram logo"
            className="footer-social-icon"
          />
        </a>
        <a
          href="https://soundcloud.com/oddboll"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          <img
            src={ScLogo}
            alt="soundcloud logo"
            className="footer-social-icon"
          />
        </a>
        <a
          href="https://www.mixcloud.com/kettle_whistle/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          <img
            src={MixcloudLogo}
            alt="mixcloud logo"
            className="footer-social-icon"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
