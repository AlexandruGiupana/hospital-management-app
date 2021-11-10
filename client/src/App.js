import React, { useEffect, useState } from "react";
import { showMessageFromBackend } from "./services/example";
import BootstrapComponent from "./components/bootstrap-component";
import NavBar from "./components/nav-bar";
import HomeCarousel from "./components/home_carousel";
import Home4Cols from "./components/home_4cols";
import Footer from "./components/footer";
import GoogleLogin from "react-google-login";
import axios from "axios";

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //showMessageFromBackend().then((res) => setMessages(res.data));
  }, []);

  const navBarItems = ["Home Page", "Services", "Login", "About Us"];

  const responseGoogleSuccess = (res) => {
    console.log(res)
    axios({
      method: "POST",
      url: "http://localhost:8080/api/googlelogin",
      data: {tokenId: res.tokenId}
    }).then(res => {
      console.log(res);
    })
  }

  const responseGoogleError = (res) => {
    console.log(res)
  }

  return (
    <>
      <NavBar navBarItems={navBarItems} />
      {messages.map((message) => (
        <div key={message.id}>{message.field}</div>
      ))}

      <HomeCarousel />
      <Home4Cols />
      <Footer />

      <GoogleLogin
          clientId="1064248624144-vio6h7qp5hs174g7dlo63469h61g7sl9.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogleError}
          cookiePolicy={'single_host_origin'}
      />,

    </>
  );
};

export default App;
