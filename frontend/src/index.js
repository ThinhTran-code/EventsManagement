import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot
import App from "./App";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const root = ReactDOM.createRoot(document.getElementById("root")); // Tạo root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
