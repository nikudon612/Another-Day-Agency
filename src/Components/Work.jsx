import React from 'react'
import Mona from '../Assets/ADA-15.jpg'
import Doja from '../Assets/ADA-13.jpg'
import Wave from '../Assets/ADA-29.jpg'
import asap from '../Assets/ADA-9.jpg'
import pierre from '../Assets/ADA-21.jpg'
import pierre2 from '../Assets/ADA-4.jpg'
import pierre3 from '../Assets/ADA-20.jpg'
import '../Styles/Work.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide'

// const splide = new Splide('.work', {
//     type: 'slide',
//     autoplay: true,
//     start: 1,
//     speed: 500,

// }).mount();

const Work = () => {
    const WORK_BLOCK = 'work'
  return (
    <div className={`${WORK_BLOCK}`}>
       
        <div className={`${WORK_BLOCK}__container`}>
            <div className={`${WORK_BLOCK}__project-container`}>
            <div className={`${WORK_BLOCK}__project`}>
                <div className={`${WORK_BLOCK}__example`}>
                    <Splide aria-label="My Favorite Images">
                        <SplideSlide>
                            <a href='https://www.youtube.com/watch?v=jG6PY7yKpBQ&ab_channel=HarlemFetty' target="_blank" rel="noreferrer"> 
                             <img src={Mona} alt='Fetty wap music video'/>
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href='https://www.youtube.com/watch?v=jG6PY7yKpBQ&ab_channel=HarlemFetty' target="_blank" rel="noreferrer"> 
                             <img src={Doja} alt="doja"/>
                            </a>
                        </SplideSlide>

                    </Splide>
                </div>
                <div className={`${WORK_BLOCK}__desc-container`} >
                <div className={`${WORK_BLOCK}__title`}>Mona Lisa - Fetty Wap</div>
                <div className={`${WORK_BLOCK}__desc`}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
                </div>
            </div>
            </div>
            
            <div className={`${WORK_BLOCK}__project-container`}>
            <div className={`${WORK_BLOCK}__project`}>
                <div className={`${WORK_BLOCK}__example`}>
                    <a href='https://www.youtube.com/watch?v=PoK2m6Mu53A&ab_channel=Nas' target="_blank" rel="noreferrer"> 
                        <img src={Wave} alt='Wave god music video'/>
                    </a>
                </div>
                <div className={`${WORK_BLOCK}__desc-container`} >
                <div className={`${WORK_BLOCK}__title`}>Wave Gods - Nas, A$AP Rocky, DJ Premier & Hit Boy</div>
                <div className={`${WORK_BLOCK}__desc`}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
                </div>            </div>
            </div>

            <div className={`${WORK_BLOCK}__project-container`}>
            <div className={`${WORK_BLOCK}__project`}>
                <div className={`${WORK_BLOCK}__example`}>
                    <a href='https://www.youtube.com/watch?v=xiVqKFDqxyg&ab_channel=SNOT' target="_blank" rel="noreferrer"> 
                        <img src={Doja} alt='doja music video'/>
                    </a>
                </div>
                <div className={`${WORK_BLOCK}__desc-container`} >
                <div className={`${WORK_BLOCK}__title`}>Doja - A$AP Rocky & $NOT</div>
                <div className={`${WORK_BLOCK}__desc`}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
                </div>
            </div>
            </div>

            <div className={`${WORK_BLOCK}__project-container`}>
            <div className={`${WORK_BLOCK}__project`}>
                <div className={`${WORK_BLOCK}__example`}>
                    <a href='https://www.youtube.com/watch?v=SOouEZKEJKo&ab_channel=PierreBourneVEVO' target="_blank" rel="noreferrer"> 
                        <img src={pierre2} alt='Pierre Bourne'/>
                    </a>   
                 </div>
                <div className={`${WORK_BLOCK}__desc-container`} >
                <div className={`${WORK_BLOCK}__title`}>Couch/Drunk&Nasty - Pierre Bourne and Sharc</div>
                <div className={`${WORK_BLOCK}__desc`}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
                </div>            </div>
            </div>

            <div className={`${WORK_BLOCK}__project-container`}>
            <div className={`${WORK_BLOCK}__project`}>
                <div className={`${WORK_BLOCK}__example`}>
                    <a href='https://www.youtube.com/watch?v=CE8VuI3Dhus&ab_channel=TM88VEVO' target="_blank" rel="noreferrer"> 
                        <img src={pierre3} alt='Pierre Bourne'/>
                    </a>                
                </div>
                <div className={`${WORK_BLOCK}__desc-container`} >
                <div className={`${WORK_BLOCK}__title`}>Pop Out - Pierre Bourne and TM 88</div>
                <div className={`${WORK_BLOCK}__desc`}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
                </div>             </div>
            </div>

            <div className={`${WORK_BLOCK}__project-container`}>
            <div className={`${WORK_BLOCK}__project`}>
                <div className={`${WORK_BLOCK}__example`}>
                    <a href='https://www.youtube.com/watch?v=wfC-EiSCne8&ab_channel=ASAPTwelvyy' target="_blank" rel="noreferrer"> 
                        <img src={asap} alt='12vy'/>
                    </a>                    
                </div>
                <div className={`${WORK_BLOCK}__desc-container`} >
                <div className={`${WORK_BLOCK}__title`}>What A Day - A$AP 12vy</div>
                <div className={`${WORK_BLOCK}__desc`}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
                </div>            </div>
            </div>

            <div className={`${WORK_BLOCK}__project-container`}>
            <div className={`${WORK_BLOCK}__project`}>
                <div className={`${WORK_BLOCK}__example`}>
                    <a href='https://www.youtube.com/watch?v=mV30rcc30o4&ab_channel=PierreBourne' target="_blank" rel="noreferrer"> 
                        <img src={pierre} alt='Pierre Bourne'/>
                    </a>
                </div>
                <div className={`${WORK_BLOCK}__desc-container`} >
                <div className={`${WORK_BLOCK}__title`}>4u - Pierre Bourne</div>
                <div className={`${WORK_BLOCK}__desc`}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
                </div>             </div>
            </div>
        </div>
    </div>
  )
}

export default Work