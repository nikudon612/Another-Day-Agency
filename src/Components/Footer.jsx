import React from 'react'
import { Link } from 'react-scroll'
import '../Styles/Footer.scss';

const FOOTER_BLOCK = 'footer';


const Footer = () => {

// const handleClick = () => {
//     window.scrollTo(0, 0);
//   };
  return (
    <div className={`${FOOTER_BLOCK}`}>
        <div className={`${FOOTER_BLOCK}__container`}>
            {/* <div className={`${FOOTER_BLOCK}__title`}>
                <p onClick={handleClick}>ADA</p>
            </div> */}
            <div>instagram</div>
            <div>
                <Link to="about" smooth={true} duration={750}></Link>
            </div>
            <div className={`${FOOTER_BLOCK}__right`}>
            <div>
                quote
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Footer