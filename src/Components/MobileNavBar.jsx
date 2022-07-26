import React from 'react'
import { Link } from "react-scroll";
import "../Styles/MobileNavBar.scss";

const MNAV_BLOCK = "mobileNav";

const MobileNavBar = () => {
  return (
      <div className={`${MNAV_BLOCK}`}>
          <div className={`${MNAV_BLOCK}__container`}>
              <div className={`${MNAV_BLOCK}__list-container`}>
                <div className={`${MNAV_BLOCK}__list-items`}>
                        <Link to="work" smooth={true} duration={750}>Work</Link>
                  </div>
                  <div className={`${MNAV_BLOCK}__list-items`}>
                        <Link to="about" smooth={true} duration={750}>About</Link>
                  </div>
                  <div className={`${MNAV_BLOCK}__list-items`}>
                        <Link to="team__team" smooth={true} duration={750}>Team</Link>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default MobileNavBar