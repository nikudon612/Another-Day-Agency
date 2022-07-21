import React, { useState } from 'react'
import { Link } from 'react-scroll'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import '../Styles/NavBar.scss';

const NAVBAR_BLOCK = 'navbar';


const NavBar = () => {
const [show, setShow] = useState(false);

const handleClick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  };
  return (
    <div className={`${NAVBAR_BLOCK}`}>
        <div className={`${NAVBAR_BLOCK}__title`}>
            <p onClick={handleClick}>Another Day Agency</p>
        </div>
        <div className={`${NAVBAR_BLOCK}__dropdown`}>
        <button className={`${NAVBAR_BLOCK}__btn`} id="toggle" onClick={() => setShow(!show)}>
            {show ? <CloseIcon /> : <MenuIcon />}
        </button>
            <div className={`${NAVBAR_BLOCK}__links`} id={show ? "hidden" : ""}>
                <div className={`${NAVBAR_BLOCK}__link`}>
                    <Link to="work" smooth={true} duration={750}>
                        Work
                    </Link>
                </div>
                <div className={`${NAVBAR_BLOCK}__link`}>
                    <Link to="about" smooth={true} duration={750}>
                        About
                    </Link>
                </div>
                <div className={`${NAVBAR_BLOCK}__link`}>
                    <Link to="team__team" smooth={true} duration={750}>
                        Team
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar