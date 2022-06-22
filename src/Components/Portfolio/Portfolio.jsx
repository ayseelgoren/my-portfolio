import React, { useContext } from "react";
import { themeContext } from "../../Context";
import { Swiper, SwiperSlide } from "swiper/react";

import WeatherApp from "../../img/weather-app.png";
import Todos from "../../img/todos.png";
import Scrum from "../../img/scrum.png";
import RentCar from "../../img/rentcar.png";

import "swiper/css";
import "./Portfolio.css";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="Portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Projects Done</span>
      <span>Portfolio</span>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={WeatherApp} alt="" height="200rem" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Todos} alt="" height="200rem" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Scrum} alt="" height="200rem" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={RentCar} alt="" height="200rem" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
