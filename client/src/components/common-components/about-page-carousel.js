import React from "react";
import { Carousel } from "react-bootstrap";
import { Card } from "react-bootstrap";
const AboutPageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
        <Card style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item interval={1500}></Carousel.Item>
      <Carousel.Item interval={1500}></Carousel.Item>
    </Carousel>
  );
};

export default AboutPageCarousel;
