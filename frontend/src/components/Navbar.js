import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/admin">Admin</Link>
        </nav>
    );
}

export default Navbar;
