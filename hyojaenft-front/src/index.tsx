import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
//as를 붙여야 타입 체크가 되는듯
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
