import React from "react";
import {Carousel} from "react-bootstrap";
import analize_medicale from "./media_resources/home_carousel_images/analize_medicale.jpg";
import consultatii from "./media_resources/home_carousel_images/consultatii.jpg";
import real_time_data_update from "./media_resources/home_carousel_images/real-time-data-update.jpg";
import './home_page_style.css'
const HomeCarousel = () =>{
    return(
        <Carousel>
            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
                    src={analize_medicale}
                    alt="analize_medicale"
                />
                <Carousel.Caption>
                    <h3 id="carousel_caption">Analize realizate cu tehnologii de ultimă generație</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
                    src={consultatii}
                    alt="consultatii"
                />
                <Carousel.Caption>
                    <h3 id="carousel_caption">Consultații și aparatură de calitate</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
                    src={real_time_data_update}
                    alt="real_time_data_update"
                />
                <Carousel.Caption>
                    <h3 id="carousel_caption">Actualizare în timp real și securizată a datelor</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default  HomeCarousel;