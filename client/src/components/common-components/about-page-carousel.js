import React from "react";
import { Carousel } from "react-bootstrap";
import poza_medic1 from "../media_resources/about_page_images/poza-medic1.png";
import poza_medic2 from "../media_resources/about_page_images/poza-medic2.png";
import poza_medic3 from "../media_resources/about_page_images/poza-medic3.png";
import "./styles/about_page_style.css";

const AboutPageCarousel = () => {
  return (
    <Carousel variant="dark" id="aboutPageCarousel">
      <Carousel.Item interval={1600}>
        <img
          style={{
            maxWidth: "15rem",
            maxHeight: "15rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="d-flex"
          src={poza_medic3}
          alt="medic1"
        />
        <h5 className="text-black text-center">Dr. oncolog Mihaela Miclea</h5>
        <p className="text-center text-black mb-lg-5 fs-4 font-italic lead">
          <i>„Mediplus inseamna pur si simplu profesionalism.“</i>
        </p>
      </Carousel.Item>
      <Carousel.Item interval={1600}>
        <img
          style={{
            maxWidth: "15rem",
            maxHeight: "15rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="d-flex"
          src={poza_medic2}
          alt="medic2"
        />
        <h5 className="text-black text-center">
          Dr. oftalmolog Virgil Marinescu
        </h5>
        <p className="text-center text-black mb-lg-5 fs-4 font-italic lead">
          <i>
            „Mediplus ofera solutii bune pentru planificarea si desfasurarea
            eficienta a activitatilor interne din spital.“
          </i>
        </p>
      </Carousel.Item>
      <Carousel.Item interval={1600}>
        <img
          style={{
            maxWidth: "15rem",
            maxHeight: "15rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="d-flex"
          src={poza_medic1}
          alt="medic3"
        />
        <h5 className="text-black text-center">Dr. cardiolog Cosmin Popov</h5>
        <p className="text-center text-black mb-lg-5 fs-4 font-italic lead">
          <i>
            „Functionalitatile oferite de Mediplus imbunatatesc extrem de mult
            managementul spitalului“
          </i>
        </p>
      </Carousel.Item>
    </Carousel>
  );
};

export default AboutPageCarousel;
