import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                backgroundColor: "#fff7ea",
                fontFamily: "'Times New Roman', serif",
            }}
        >
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>
                BEAK VIET THINH
            </div>
            <ul
                style={{
                    listStyle: "none",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <li style={{ marginLeft: "20px" }}>
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            color: "#333",
                            fontSize: "16px",
                        }}
                    >
                        HOME
                    </Link>
                </li>
                <li style={{ marginLeft: "20px" }}>
                    <Link
                        to="/events"
                        style={{
                            textDecoration: "none",
                            color: "#333",
                            fontSize: "16px",
                        }}
                    >
                        EVENTS
                    </Link>
                </li>
                <li style={{ marginLeft: "20px" }}>
                    <Link
                        to="/about"
                        style={{
                            textDecoration: "none",
                            color: "#333",
                            fontSize: "16px",
                        }}
                    >
                        ABOUT
                    </Link>
                </li>
                <li style={{ marginLeft: "20px" }}>
                    <Link
                        to="/contact"
                        style={{
                            textDecoration: "none",
                            color: "#333",
                            fontSize: "16px",
                        }}
                    >
                        CONTACT
                    </Link>
                </li>
                <li style={{ marginLeft: "20px" }}>
                    <i
                        className="bi bi-person-square"
                        style={{ fontSize: "40px" }}
                    />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
