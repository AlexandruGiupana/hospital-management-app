import React, { useEffect } from "react";
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
import clinic_cluj from "../media_resources/about_page_images/clinic-cluj.png";
import louis_turcanu from "../media_resources/about_page_images/louis-turcan-timisoara.png";
import pelican_oradea from "../media_resources/about_page_images/pelican-oradea.png";
import sf_maria from "../media_resources/about_page_images/sf-maria.png";
import AboutPageCarousel from "./about-page-carousel";

const AboutPage = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".count");
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = parseInt(counter.getAttribute("data-target"));
        const count = parseInt(counter.innerText);
        let increment = 0;
        if (target == 800) increment = 20;
        if (target == 600) increment = 15;
        if (target == 14000) increment = 350;
        if (target <= 10) increment = 1;
        if (count < target) {
          counter.innerText = count + increment;
          if (target <= 10) setTimeout(updateCount, 250);
          else setTimeout(updateCount, 18);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  });

  return (
    <Container>
      <Row>
        <Col>
          <h5 className="fs-2 mt-2" id="aboutPageHeader">
            Scurt istoric
          </h5>
          <p>
            Serviciul Mediplus a fost lansata initial in anul 2015 cu scopul de
            a gestiona mai usor procesele interne din cadrul Spitalului Clinic
            de Urgenta pentru copii Louis Turcanu din Timisoara. Datorita
            activitatilor tot mai complexe desfasurate la nivel intern,
            aplicatia s-a dezvoltat continuu oferind tot mai multe
            functionalitati cu o complexitate tot mai ridicata.
            Functionalitatile oferite de aplicatie sunt destinate in principal
            personalului medical din interiorul institutiilor medicale, dar sunt
            oferite functionalitati care pot fi folosite direct de catre
            pacienti, fara sa fie nevoie de interventia obligatorie a unui
            medic. <br /> <br /> In prezent aplicatia este folosita de mai multe
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
      <div className="container">
        <h5 className="text-center display-6 mb-lg-3 mt-lg-3">
          Mediplus in cifre:
        </h5>
        <Row>
          <Col>
            <h3 data-target="4" className="count text-center">
              0
            </h3>
            <h6 className="text-center">spitale</h6>
          </Col>
          <Col>
            <h3 data-target="800" className="count text-center">
              0
            </h3>
            <h6 className="text-center">medici</h6>
          </Col>
          <Col>
            <h3 data-target="600" className="count text-center">
              0
            </h3>
            <h6 className="text-center">procese zilnice</h6>
          </Col>
          <Col>
            <h3 data-target="14000" className="count text-center">
              0
            </h3>
            <h6 className="text-center">procese saptamanale</h6>
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <br />
      <h5 className="text-black text-center display-6">
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
      <br />
      <br />

      <AboutPageCarousel />
    </Container>
  );
};

export default AboutPage;
