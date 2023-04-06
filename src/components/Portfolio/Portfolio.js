import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Portfolios from './Portfolio.png'
import AboutPage from './aboutpage.png'
import BMI from './BMI.png'
import Login from './Login1.png'
import NP from './Notes_Password.png'
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Portfolios} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={AboutPage} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BMI} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Login} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={NP} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;