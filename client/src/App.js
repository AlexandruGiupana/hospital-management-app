import React, { useEffect, useState } from "react";
import { showMessageFromBackend } from "./services/example";
import BootstrapComponent from "./components/bootstrap-component";

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    showMessageFromBackend().then((res) => setMessages(res.data));
  }, []);

  return (
    <div>
      {messages.map((message) => (
          <div key={message.id}>{message.field}</div>
      ))}
      <BootstrapComponent />
    </div>
  );
  );
};

export default App;
