import React from 'react'
import "../Styles/About.scss";
import ADA from '../Assets/ADA-35.jpg'
import { motion } from "framer-motion"



const About = () => {

  const ABOUT_BLOCK = 'about'
  return (
    <div className={`${ABOUT_BLOCK}`}>
      <div className={`${ABOUT_BLOCK}__container`}>
        <motion.div className= {`${ABOUT_BLOCK}__left-container`} initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0}}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        bounce: 0.3,
        duration: 3,
        delay: 0.5,
        ease: "linear",
      }}>
          <div className={`${ABOUT_BLOCK}__left`}>
            <div className={`${ABOUT_BLOCK}__title`}>Tomorrow's Another Day...</div>
          </div>
            <br/>
            <br/>
            <div className={`${ABOUT_BLOCK}__text-container`}>
              <div className={`${ABOUT_BLOCK}__text`}>Here at Another Day, we provide brand partnerships allowing clients to form relationships with brands. We curate editorial style content giving our clients the ability to unlock a true tasteful fashion sense in the eyes of the public. <br/><br/>We are in the business of rebranding not only a look or style, but a culture.</div>
            </div>
          </motion.div>
          <div className={`${ABOUT_BLOCK}__right`}>
            <motion.img className={`${ABOUT_BLOCK}__photo`} src={ADA} alt='ADA Team' initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        bounce: 0.3,
        duration: 3,
        delay: 1.5,
        ease: "linear",
      }} />
          </div>
      </div>

    </div>
  )
}

export default About