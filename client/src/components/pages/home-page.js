import React from "react"
import HomeCarousel from "../home-page-components/home_carousel";
import Home4Cols from "../home-page-components/home_4cols";
import RegisterForm from "../forms/register";

const HomePage = () => {

  return(
    <>
    <HomeCarousel />
    <Home4Cols />
    <RegisterForm />
    </>
  )
}

export default HomePage;