import React from 'react'
import { Link } from 'react-scroll'
import '../Styles/Footer.scss';
import insta from "../Assets/Instagram.svg"

const FOOTER_BLOCK = 'footer';


const Footer = () => {

const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={`${FOOTER_BLOCK}`}>
          <div className={`${FOOTER_BLOCK}__container`}>
              <div className={`${FOOTER_BLOCK}__leftcon`}>
            <div className={`${FOOTER_BLOCK}__title`}>
                <p onClick={handleClick}>ADA</p>
            </div>
            <div className={`${FOOTER_BLOCK}__socials`} >
                <a href='https://www.instagram.com/watersideday1/' target="_blank" rel="noreferrer">
                    <img src={insta} alt="instagram"  />
                </a>
                  </div>
                </div>
            <div>
                <Link to="about" smooth={true} duration={750}></Link>
            </div>
            <div className={`${FOOTER_BLOCK}__right`}>
            <div>
                ANOTHER DAY AGENCY ©2022 
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Footer