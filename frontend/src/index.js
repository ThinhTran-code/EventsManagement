import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot
import App from "./App";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Tạo root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
