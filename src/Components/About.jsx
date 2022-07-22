import React from 'react'
import "../Styles/About.scss";
import Ral from '../Assets/Ral-summer-21.JPG'

const About = () => {

  const ABOUT_BLOCK = 'about'
  return (
    <div className={`${ABOUT_BLOCK}`}>
      <div className={`${ABOUT_BLOCK}__container`}>
        <div className= {`${ABOUT_BLOCK}__left-container`}>
          <div className={`${ABOUT_BLOCK}__left`}>
            <div className={`${ABOUT_BLOCK}__title`}>What Is Another Day?</div>
          </div>
            <br/>
            <br/>
            <div className={`${ABOUT_BLOCK}__text-container`}>
              <div className={`${ABOUT_BLOCK}__text`}>Here at ADA, we provide brand partnerships allowing clients to form relationships with brands. We do editorial style content giving said client the ability to unlock a true tasteful fashion sense in the eyes of the public. <br/><br/>We are in the business of rebranding not only a look or style, but a culture.</div>
            </div>
          </div>
          <div className={`${ABOUT_BLOCK}__right`}>
            <img className={`${ABOUT_BLOCK}__photo`} src={Ral} alt='ADA Team' />
          </div>
      </div>

    </div>
  )
}

export default About