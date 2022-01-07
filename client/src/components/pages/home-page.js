import React from "react";
import HomeCarousel from "../home-page-components/home_carousel";
import Home4Cols from "../home-page-components/home_4cols";
import AboutPageCarousel from "../common-components/about-page-carousel";
import Home4ColsNew from "../home-page-components/styles/home_4cols_new";
import styled from "styled-components";

const HomePage = () => {
  return (
    <>
        <h1 className="text-center mt-lg-3 mb-lg-3">Prezentare generală</h1>
        <Home4ColsNew />
        <br />
        <br />
        <br />
        <SectionTitle className="text-black text-center display-6">
            Recomandat cu incredere de partenerii nostri:
        </SectionTitle>
        <br />
        <AboutPageCarousel/>
    </>
  );
};
const SectionTitle = styled.h5`
  padding-bottom: 20px;
`;
export default HomePage;
