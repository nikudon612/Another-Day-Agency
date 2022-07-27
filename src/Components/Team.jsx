import React from 'react'
import '../Styles/Team.scss'
import Dae from '../Assets/ADA-34.jpg'
import Ral from '../Assets/ral_tokyo.jpg'
import Mango from '../Assets/ADA-14.jpg'

const Team = () => {
    const TEAM_BLOCK = 'team'
  return (
    <div className={`${TEAM_BLOCK}__team`} >
    <div className={`${TEAM_BLOCK}__team-container`}>
      <div className={`${TEAM_BLOCK}__team-title`}>Our Team</div>
      <div className={`${TEAM_BLOCK}__team_info-container`}>
      <div className={`${TEAM_BLOCK}__team-info`}>
        <div className={`${TEAM_BLOCK}__team-photo`}>
          <a href='https://www.instagram.com/watersideday1/' target='blank' rel='nonreferrer'>
              <img src={Dae} alt="MR. DAQUAN EARLE"/>
          </a>
        </div>
        <div className={`${TEAM_BLOCK}__team-text-container`}>
          <div className={`${TEAM_BLOCK}__team-name`}>Daequan Earl</div>
          <div className={`${TEAM_BLOCK}__team-desc`}>Founder and Lead Stylist</div>
        </div>
      </div>
      <div className={`${TEAM_BLOCK}__team-info`} id='ral'>
        <div className={`${TEAM_BLOCK}__team-photo`}>
            <a href='https://www.instagram.com/ral.ug/' target='blank' rel='nonreferrer'>
                <img src={Ral} alt="Ral Chime"/>
            </a>
            
        </div>
        <div className={`${TEAM_BLOCK}__team-text-container`}>
          <div className={`${TEAM_BLOCK}__team-name`} >Ral Chime</div>
          <div className={`${TEAM_BLOCK}__team-desc`}>Head Designer</div>
        </div>
      </div>
      <div className={`${TEAM_BLOCK}__team-info`}>
        <div className={`${TEAM_BLOCK}__team-photo`}>
          <a href="https://www.instagram.com/watersideday1/" target='blank' rel='nonreferrer'>
              <img src={Mango} alt="Chloe Mango"/>
          </a>
        </div>
        <div className={`${TEAM_BLOCK}__team-text-container`}>
          <div className={`${TEAM_BLOCK}__team-name`}>Chloe Mango</div>
          <div className={`${TEAM_BLOCK}__team-desc`}>Assistant Stylist</div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Team