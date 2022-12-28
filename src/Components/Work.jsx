import React from 'react'
import Mona from '../Assets/ADA-15.jpg'
import Doja from '../Assets/ADA-13.jpg'
import Snot from '../Assets/ADA-35.jpeg'
import Snot2 from '../Assets/ADA-36.jpeg'
import Wave from '../Assets/ADA-29.jpg'
import Wave2 from '../Assets/ADA-30.jpg'
import Wave3 from '../Assets/ADA-31.jpg'
import Wave4 from '../Assets/ADA-32.jpg'
import Wave5 from '../Assets/ADA-27.jpg'
import Wave6 from '../Assets/ADA-26.jpg'
import asap from '../Assets/ADA-37.jpeg'
import asap2 from '../Assets/ADA-38.jpeg'
import asap3 from '../Assets/ADA-39.jpeg'
import asap4 from '../Assets/ADA-40.jpeg'
import pierre from '../Assets/ADA-21.jpg'
import pierre2 from '../Assets/ADA-4.jpg'
import pierre3 from '../Assets/ADA-20.jpg'
import '../Styles/Work.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { motion } from "framer-motion"

const featured = {
    id: 1,
    link: 'https://www.youtube.com/watch?v=xiVqKFDqxyg&ab_channel=SNOT',
    image: Doja,
    title: "Doja by $not",
    info: '',
};

const firstRow = [
    {
        id: 1,
        link: 'https://www.youtube.com/watch?v=xiVqKFDqxyg&ab_channel=SNOT',
        image: Mona,
        title: "Mona by Fetty Wap",
        info: '',  
    },
    {
        id: 2,
        link: 'https://www.youtube.com/watch?v=wfC-EiSCne8&ab_channel=ASAPTwelvyy',
        image: asap,
        title: "... by A$AP Twelvyy",
        info: '',  
    }
]

const secondRow = [
    {
        id: 1,
        link: 'https://www.youtube.com/watch?v=PoK2m6Mu53A&ab_channel=Nas',
        image: Wave,
        title: "Wave Gods by Nas",
        info: '',  
    },
    {
        id: 2,
        link: 'https://www.youtube.com/watch?v=SOouEZKEJKo&ab_channel=PierreBourneVEVO',
        image: pierre,
        title: "Couch/Drunk by Pierre Bourne",
        info: '',  
    }
]




const Work = () => {
    const WORK_BLOCK = 'work'
  return (
      <motion.div className={`${WORK_BLOCK}`} initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        bounce: 0.3,
        duration: 3,
        delay: 0.5,
        ease: "linear",
      }}>
          <div className='grid'>
              <div className='featured'>
                  <div className='intro-text'>
                      <div className='intro-con'>
                          <div>Styling &
                              <br/>Creative Direction</div>
                          {/* <div>more text about what yall do</div> */}
                      </div>
                  </div>
                  <div className='featured-image'>
                      <a href={featured.link} target="_blank" rel="noreferrer">
                      <div className='desc'>
                              {featured.title}
                        </div>
                         <img src={featured.image} alt='featured client'/>
                      </a>
                      
                  </div>
              </div>
              <div className='twotwo'>
                  <div className='two-con'>
                      {firstRow.map((project) => (
                      <div className='one'>
                      <a href={project.link} target="_blank" rel="noreferrer">
                      <div className='half-desc'>
                          {project.title}
                    </div>
                        <img src={project.image} alt=''/>  
                      </a>
                </div>
                      ))}
                     
                  </div>
                  <div className='two-second'>
                      {secondRow.map((project) => (
                          <div className='three'>
                          <a href={project.link} target="_blank" rel="noreferrer" className='wave-a'>
                          <div className='half-desc'>
                              {project.title}
                        </div>
                              <img src={project.image} alt='' />
                          </a>
                    </div>
                      ))}
                    
                  </div>
                  
              </div>
          </div>
       
        {/* <div className={`${WORK_BLOCK}__container`}>
            <div className={`${WORK_BLOCK}__project-container`}>
            <div className={`${WORK_BLOCK}__project`}>
                <div className={`${WORK_BLOCK}__example`}>
                    <Splide aria-label="My Favorite Images" options={{
                    type: 'loop',
                }}>
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
                <Splide aria-label="My Favorite Images" options={{
                    type: 'loop',
                }}>
                        <SplideSlide>
                            <a href='https://www.youtube.com/watch?v=PoK2m6Mu53A&ab_channel=Nas' target="_blank" rel="noreferrer"> 
                                <img src={Wave} alt='Wave god music video'/>
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href='https://www.youtube.com/watch?v=PoK2m6Mu53A&ab_channel=Nas' target="_blank" rel="noreferrer"> 
                             <img src={Wave2} alt="Wave god music video"/>
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href='https://www.youtube.com/watch?v=PoK2m6Mu53A&ab_channel=Nas' target="_blank" rel="noreferrer"> 
                             <img src={Wave3} alt="Wave god music video"/>
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href='https://www.youtube.com/watch?v=PoK2m6Mu53A&ab_channel=Nas' target="_blank" rel="noreferrer"> 
                             <img src={Wave4} alt="Wave god music video"/>
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href='https://www.youtube.com/watch?v=PoK2m6Mu53A&ab_channel=Nas' target="_blank" rel="noreferrer"> 
                             <img src={Wave5} alt="Wave god music video"/>
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href='https://www.youtube.com/watch?v=PoK2m6Mu53A&ab_channel=Nas' target="_blank" rel="noreferrer"> 
                             <img src={Wave6} alt="Wave god music video"/>
                            </a>
                        </SplideSlide>
                    </Splide>
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
                <Splide aria-label="My Favorite Images" options={{
                    type: 'loop',
                }}>
                        <SplideSlide>
                            <a href='https://www.youtube.com/watch?v=xiVqKFDqxyg&ab_channel=SNOT' target="_blank" rel="noreferrer"> 
                                <img src={Doja} alt='doja music video'/>
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href='https://www.youtube.com/watch?v=xiVqKFDqxyg&ab_channel=SNOT' target="_blank" rel="noreferrer"> 
                             <img src={Snot} alt="doja music video"/>
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href='https://www.youtube.com/watch?v=xiVqKFDqxyg&ab_channel=SNOT' target="_blank" rel="noreferrer"> 
                             <img src={Snot2} alt="doja music video"/>
                            </a>
                        </SplideSlide>
                    </Splide>
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
                <Splide aria-label="My Favorite Images" options={{
                    type: 'loop',
                }}>
                        <SplideSlide>
                            <a href='https://www.youtube.com/watch?v=SOouEZKEJKo&ab_channel=PierreBourneVEVO' target="_blank" rel="noreferrer"> 
                                <img src={pierre2} alt='Pierre Bourne'/>
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href='https://www.youtube.com/watch?v=SOouEZKEJKo&ab_channel=PierreBourneVEVO' target="_blank" rel="noreferrer"> 
                             <img src={Doja} alt="doja"/>
                            </a>
                        </SplideSlide>
                    </Splide>
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
                <Splide aria-label="My Favorite Images" options={{
                    type: 'loop',
                }}>
                        <SplideSlide>
                            <a href='https://www.youtube.com/watch?v=CE8VuI3Dhus&ab_channel=TM88VEVO' target="_blank" rel="noreferrer"> 
                                <img src={pierre3} alt='Pierre Bourne'/>
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href='https://www.youtube.com/watch?v=CE8VuI3Dhus&ab_channel=TM88VEVO' target="_blank" rel="noreferrer"> 
                             <img src={Doja} alt="doja"/>
                            </a>
                        </SplideSlide>
                    </Splide>               
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
                <Splide aria-label="My Favorite Images" options={{
                    type: 'loop',
                }}>
                        <SplideSlide>
                            <a href='https://www.youtube.com/watch?v=wfC-EiSCne8&ab_channel=ASAPTwelvyy' target="_blank" rel="noreferrer"> 
                                <img src={asap} alt='12vy'/>
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href='https://www.youtube.com/watch?v=wfC-EiSCne8&ab_channel=ASAPTwelvyy' target="_blank" rel="noreferrer"> 
                             <img src={asap2} alt="12vy"/>
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href='https://www.youtube.com/watch?v=wfC-EiSCne8&ab_channel=ASAPTwelvyy' target="_blank" rel="noreferrer"> 
                             <img src={asap3} alt="12vy"/>
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href='https://www.youtube.com/watch?v=wfC-EiSCne8&ab_channel=ASAPTwelvyy' target="_blank" rel="noreferrer"> 
                             <img src={asap4} alt="12vy"/>
                            </a>
                        </SplideSlide>
                    </Splide>                   
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
                <Splide aria-label="My Favorite Images" options={{
                    type: 'loop',
                }}>
                        <SplideSlide>
                            <a href='https://www.youtube.com/watch?v=mV30rcc30o4&ab_channel=PierreBourne' target="_blank" rel="noreferrer"> 
                                <img src={pierre} alt='Pierre Bourne'/>
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href='https://www.youtube.com/watch?v=mV30rcc30o4&ab_channel=PierreBourne' target="_blank" rel="noreferrer"> 
                             <img src={Doja} alt="doja"/>
                            </a>
                        </SplideSlide>
                    </Splide> 
                </div>
                <div className={`${WORK_BLOCK}__desc-container`} >
                <div className={`${WORK_BLOCK}__title`}>4u - Pierre Bourne</div>
                <div className={`${WORK_BLOCK}__desc`}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
                </div>
                </div>
            </div>
        </div> */}
    </motion.div>
  )
}

export default Work