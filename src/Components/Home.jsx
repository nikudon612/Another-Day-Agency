import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import { Grid } from '@splidejs/splide-extension-grid';
import '@splidejs/react-splide/css';
import '../Styles/Home.scss';
import Doja from '../Assets/ADA-13.jpg'
import team from '../Assets/ADA-32.jpg'
import pierre from '../Assets/ADA-4.jpg'
import wide from '../Assets/ADA-16.jpg'
import image5 from '../Assets/ADA-17.jpg'
import image6 from '../Assets/ADA-18.jpg'


// new Splide( '#splide' ).mount( { Grid } );

new Splide( '#splide', {
    grid: {
          rows: 2,
          cols: 2,
          gap : {
              row: '1rem',
              col: '1.5rem',
          },
    },
  } );

const Home = () => {
    const HOME_BLOCK = 'home'
  return (
    <div className={`${HOME_BLOCK}`}>
         <script type='text/javascript'>
            const splide = new Splide(".splide");
                splide.mount();
        </script>
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
                        <img src={wide} alt="magazine shoot"/>
                        <img src={pierre} alt="pierre bourne"/>
                    </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className={`${HOME_BLOCK}img__wrap`} >
                        <img src={team} alt="team"/>    
                    </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className={`${HOME_BLOCK}img__wrap`} >
                        <img src={image5} alt="magazine shoot"/>
                        <img src={image6} alt="magazine shoot"/>

                    </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </div>
  )
}

export default Home