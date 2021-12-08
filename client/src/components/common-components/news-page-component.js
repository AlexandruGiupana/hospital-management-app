import React from "react";
import "./styles/news_page_style.css";
import "./styles/about_page_style.css";
import { Col, Row } from "react-bootstrap";
import info_icon from "../media_resources/news-page-icons/info_icon.png";
import update_icon from "../media_resources/news-page-icons/update_icon.png";
import styled from "styled-components";


const NewsPageComponent = ({news}) => {
    console.log(news)
    return (
            <Row>
                <Col>
                    <h5 className="fs-2 mt-2 mb-3" id="aboutPageHeader">
                        {news.title}
                    </h5>

                    <DescriptionComponent>
                        {news.content}
                    </DescriptionComponent>
                </Col>
                {
                    news.type == 'UPDATE' &&
                    <Col>
                        <img
                            src={update_icon}
                            className="img-fluid shadow-2-strong mt-4"
                            alt=""
                            style={{ maxWidth: "75%", maxHeight: "75%" }}
                        />
                    </Col>
                }
                {
                    news.type == 'INFO' &&
                    <Col>
                        <img
                            src={info_icon}
                            className="img-fluid shadow-2-strong mt-4"
                            alt=""
                            style={{ maxWidth: "72%", maxHeight: "72%" }}
                        />
                    </Col>
                }

            </Row>



    );
};

const DescriptionComponent = styled.div`
  text-align: justify;
  text-justify: inter-word;
`;

const SectionTitle = styled.h5`
  padding-bottom: 20px;
`;

export default NewsPageComponent;
