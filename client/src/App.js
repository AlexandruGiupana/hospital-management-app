import React, { useEffect, useState } from "react";
import { showMessageFromBackend } from "./services/example";
import BootstrapComponent from "./components/bootstrap-component";
import NavBar from "./components/nav-bar";

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    showMessageFromBackend().then((res) => setMessages(res.data));
  }, []);

  const navBarItems = ["Home Page", "Services", "Login", "About Us"];

  return (
    <>
      <NavBar navBarItems={navBarItems} />
      {messages.map((message) => (
        <div key={message.id}>{message.field}</div>
      ))}
      <BootstrapComponent />
    </>
  );
};

export default App;
