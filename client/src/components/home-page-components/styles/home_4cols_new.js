import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import hospital_image from "../../media_resources/about_page_images/about-hospital-img.png";
import styled from "styled-components";
import management_spital from "../../media_resources/home-page-icons/management_spital.jpg";
import doctor from "../../media_resources/home-page-icons/doctor.jpg";
import transparenta from "../../media_resources/home-page-icons/transparenta.png";
import twentyfour from "../../media_resources/home-page-icons/24-7.jpg";
const Home4ColsNew = () => {
    return (
        <Container fluid="xl">
            <Row className="justify-content-md-center">
            <Col>
                <h5 className="fs-2 mt-3" id="aboutPageHeader">
                    Management digital
                </h5>
                <DescriptionComponent>
                    Managementul digital și la distanță a informațiilor administrative.
                    Acces oricând la informațiile despre medici, săli, departamente,
                    servicii oferite și prețuri. Opțiuni pentru crearea, modificarea și
                    eliminarea rapidă a serviciilor medicale oferite precum și multe
                    alte opțiuni.
                </DescriptionComponent>
            </Col>
            <Col>
                <img
                    src={management_spital}
                    className="img-fluid shadow-2-strong mt-3"
                    alt=""
                    style={{ maxWidth: "30rem" }}
                />
            </Col>
        </Row>
            <br/>
            <Row className="justify-content-md-center">
                <Col>
                    <h5 className="fs-2 mt-3" id="aboutPageHeader">
                        Soluții pentru medici
                    </h5>
                    <DescriptionComponent>
                        Crearea și gestiunea programărilor pentru operații, consultații și
                        alte servicii medicale. Vizualizarea unui panou cu statistici referitoare la situația consultărilor. Aplicația include și alte
                        servicii auxiliare pentru a facilita activitatea cadrelor medicale.
                    </DescriptionComponent>
                </Col>
                <Col>
                    <img
                        src={doctor}
                        className="img-fluid shadow-2-strong mt-3"
                        alt=""
                        style={{ maxWidth: "30rem" }}
                    />
                </Col>
            </Row>
            <br/>
            <Row className="justify-content-md-center">
                <Col>
                    <h5 className="fs-2 mt-3" id="aboutPageHeader">
                        Transparență
                    </h5>
                    <DescriptionComponent>
                        Acces transparent la datele tale din aplicație. Datele personale pot fi vizualizate și editate. Aplicația include
                        opțiuni pentru exportul datelor referitoare la programările tale și
                        multe altele în fișiere cu format CSV.
                    </DescriptionComponent>
                </Col>
                <Col>
                    <img
                        src={transparenta}
                        className="img-fluid shadow-2-strong mt-3"
                        alt=""
                        style={{ maxWidth: "30rem" }}
                    />
                </Col>
            </Row>
            <br/>
            <Row className="justify-content-md-center">
                <Col>
                    <h5 className="fs-2 mt-3" id="aboutPageHeader">
                        Acces 24/7 la date
                    </h5>
                    <DescriptionComponent>
                        Verificare situației medicale poate fi realizată în orice moment. Ai
                        acces la datele tale personale, informații despre viitoarele programări, precum și despre
                        consultațiile efectuate în trecut.
                    </DescriptionComponent>
                </Col>
                <Col>
                    <img
                        src={twentyfour}
                        className="img-fluid shadow-2-strong mt-3"
                        alt=""
                        style={{ maxWidth: "30rem" }}
                    />
                </Col>
            </Row>
        </Container>
    );
};

const DescriptionComponent = styled.div`
  text-align: justify;
  text-justify: inter-word;
`;
export default Home4ColsNew;