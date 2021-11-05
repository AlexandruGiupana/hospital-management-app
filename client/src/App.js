import React, { useEffect, useState } from "react";
import { showMessageFromBackend } from "./services/example";
import BootstrapComponent from "./components/bootstrap-component";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    showMessageFromBackend().then((res) => setMessage(res.data.message));
  }, []);

  return (
    <div>
      {message}
      <BootstrapComponent />
    </div>
  );
};

export default App;
