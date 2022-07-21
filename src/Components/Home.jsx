import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../Styles/Home.scss';
import work_slider from '../Assets/image_slider.png'
import Doja from '../Assets/ADA-13.jpg'
import team from '../Assets/ADA-32.jpg'
import pierre from '../Assets/ADA-4.jpg'

const Home = () => {
    const HOME_BLOCK = 'home'
  return (
    <div className={`${HOME_BLOCK}`}>
        <div className={`${HOME_BLOCK}__container`}>
            <div className={`${HOME_BLOCK}__img__container`}>
                {/* <img src={work_slider} alt="slider" /> */}
                <Splide aria-label="My Favorite Images">
                    <SplideSlide>
                        <div className={`${HOME_BLOCK}img__wrap`} >
                            <img className={`${HOME_BLOCK}img__img`} src={Doja} alt="doja"/>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className={`${HOME_BLOCK}img__wrap`} >
                        <img src={team} alt="team"/>
                    </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className={`${HOME_BLOCK}img__wrap`} >
                        <img src={pierre} alt="pierre bourne"/>
                    </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </div>
  )
}

export default Home