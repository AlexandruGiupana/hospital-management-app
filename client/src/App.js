import React, { useEffect, useState } from "react";
import { showMessageFromBackend } from "./services/example";

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    showMessageFromBackend().then((res) => setMessages(res.data));
  }, []);

  return (
    <>
      {messages.map((message) => (
        <div key={message.id}>{message.field}</div>
      ))}
    </>
  );
};

export default App;
