import React from "react";
import "./styles/services_prices_style.css";
import Container from "react-bootstrap/Container";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import { TableCell } from "@material-ui/core";
import TableBody from "@mui/material/TableBody";
import Paper from "@material-ui/core/Paper";
import "./styles/about_page_style.css";
import hospital_image from "../media_resources/about_page_images/about-hospital-img.png";
import { Col, Row } from "react-bootstrap";
import carol_davila from "../media_resources/about_page_images/carol-davila.png";
import clinic_cluj from "../media_resources/about_page_images/clinic-cluj.png";
//import coltea from "../media_resources/about_page_images/coltea.png";
import louis_turcanu from "../media_resources/about_page_images/louis-turcan-timisoara.png";
import pelican_oradea from "../media_resources/about_page_images/pelican-oradea.png";
import sf_maria from "../media_resources/about_page_images/sf-maria.png";
//import spital_cluj_2 from "../media_resources/about_page_images/spital-cluj-2.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "bootstrap";
import HomeCarousel from "../home-page-components/home_carousel";
import AboutPageCarousel from "./about-page-carousel";

const AboutPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h5 className="fs-2 mt-2" id="aboutPageHeader">
            Informatii generale
          </h5>
          <p>
            Aplicatia Mediplus a fost lansata initial in anul 2015 cu scopul de
            a gestiona mai usor procesele interne din cadrul Spitalului Clinic
            de Urgenta pentru copii Louis Turcanu din Timisoara. Datorita
            activitatilor tot mai complexe desfasurate la nivel intern,
            aplicatia s-a dezvoltat continuu oferind tot mai multe
            functionalitati cu o complexitate tot mai ridicata.
            Functionalitatile oferite de aplicatie sunt destinate in principal
            personalului medical din interiorul institutiilor medicale, dar sunt
            oferite functionalitati care pot fi folosite direct de catre
            pacienti, fara sa fie nevoie de interventia neaparata a unui medic.{" "}
            <br /> <br /> In prezent aplicatia este folosita de mai multe
            spitale din Romania, majoritatea fiind spitale mari in care se
            desfasoara zilnic un numar mare de procese - operatii, consultatii,
            internari si externari din saloane, precum si altele.{" "}
          </p>
        </Col>
        <Col>
          <img
            src={hospital_image}
            className="img-fluid shadow-2-strong mt-3"
            alt=""
            style={{ maxWidth: "30rem" }}
          />
        </Col>
      </Row>
      <br />
      <br />

      <div className="container">
        <div className="heading">Counting Upto the Limit</div>
        <div className="counter-container">
          <div className="counter">
            <h3 data-target="15000" className="count">
              0
            </h3>
            <h6>Work Hours</h6>
          </div>
          <div className="counter">
            <h3 data-target="1200" className="count">
              0
            </h3>
            <h6>Cups of Coffee</h6>
          </div>
          <div className="counter">
            <h3 data-target="500" className="count">
              0
            </h3>
            <h6>Sleepless Nights</h6>
          </div>
        </div>
      </div>

      <h5 className="text-black text-center display-5">
        Recomandat cu incredere de partenerii nostri:
      </h5>
      <br />
      <Row>
        <Col>
          <a href="https://www.spitalpelican.ro/">
            <img
              src={pelican_oradea}
              className="img-fluid shadow-2-strong mt-3"
              alt=""
              style={{ maxWidth: "13rem", maxHeight: "13rem" }}
            />
          </a>
        </Col>

        <Col sm>
          <a href="https://spitalclujana.ro/">
            <img
              src={clinic_cluj}
              className="img-fluid shadow-2-strong mt-2"
              alt=""
              style={{ maxWidth: "13rem", maxHeight: "13rem" }}
            />
          </a>
        </Col>

        <Col sm>
          <a href="https://www.spital-copii-timisoara.info/">
            <img
              src={louis_turcanu}
              className="img-fluid shadow-2-strong mt-2"
              alt=""
              style={{ maxWidth: "13rem", maxHeight: "13rem" }}
            />
          </a>
        </Col>
        <Col>
          <a href="https://spitalsfmaria.ro/">
            <img
              src={sf_maria}
              className="img-fluid shadow-2-strong mt-0"
              alt=""
              style={{ maxWidth: "14rem", maxHeight: "14rem" }}
            />
          </a>
        </Col>
      </Row>
      <br />

      {/*
            <Row>
                <Col>

                </Col>
                <Col>

                </Col>

                <Col>

                </Col>

                <Col>

                </Col>
            </Row>
            */}

      <AboutPageCarousel />
    </Container>
  );
};

export default AboutPage;
