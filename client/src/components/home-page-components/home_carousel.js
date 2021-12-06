import React from "react";
import { Carousel } from "react-bootstrap";
import analize_medicale from "../media_resources/home_carousel_images/analize_medicale.jpg";
import consultatii from "../media_resources/home_carousel_images/consultatii.jpg";
import real_time_data_update from "../media_resources/home_carousel_images/real-time-data-update.jpg";
import "./styles/home_page_style.css";
import styled from "styled-components";
const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={analize_medicale}
          alt="analize_medicale"
        />
        <Carousel.Caption>
          <CarouselCaption>
            Analize realizate cu tehnologii de ultimă generație
          </CarouselCaption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img className="d-block w-100" src={consultatii} alt="consultatii" />
        <Carousel.Caption>
          <CarouselCaption>
            Consultații și aparatură de calitate
          </CarouselCaption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={real_time_data_update}
          alt="real_time_data_update"
        />
        <Carousel.Caption>
          <CarouselCaption>Actualizare în timp real a datelor</CarouselCaption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const CarouselCaption = styled.h1`
  text-shadow: 1.5px 0 0 #000, 0 -2px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
  padding-bottom: 20px;
`;

export default HomeCarousel;
