import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Signup from "./components/Signup";

// eslint-disable-next-line no-undef
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
