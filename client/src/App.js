import React, { useEffect, useState } from "react";
import { showMessageFromBackend } from "./services/example";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    showMessageFromBackend().then((res) => setMessage(res.data.message));
  }, []);

  return <div>{message}</div>;
};

export default App;
