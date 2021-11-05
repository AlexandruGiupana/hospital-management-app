import React, { useEffect, useState } from "react";
import { showMessageFromBackend } from "./services/example";
import BootstrapComponent from "./components/bootstrap-component";
import NavBar from "./components/nav-bar";
import HomeCarousel from "./components/home_carousel";
import Home4Cols from "./components/home_4cols";
import Footer from "./components/footer";

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //showMessageFromBackend().then((res) => setMessages(res.data));
  }, []);

  const navBarItems = ["Home Page", "Services", "Login", "About Us"];

  return (
    <>
      <NavBar navBarItems={navBarItems} />
      {messages.map((message) => (
        <div key={message.id}>{message.field}</div>
      ))}

        <HomeCarousel />
        <Home4Cols />
        <Footer />


    </>
  );
};

export default App;
