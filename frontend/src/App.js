import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import EventList from "./components/EventList";
import RegisterPage from "./pages/RegisterPage";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                {" "}
                {/* Sử dụng Routes thay vì Switch */}
                <Route exact path="/" element={<HomePage />} />{" "}
                {/* Sử dụng element thay vì component */}
                <Route path="/events" element={<EventList />} />
                <Route path="/events/:id" element={<EventPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
}

export default App;
