import React from "react";

function Hero() {
    return (
        <div
            style={{
                position: "relative",
                height: "500px", // Điều chỉnh chiều cao
                backgroundImage: "url('/restaurant.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "#fff",
            }}
        >
            <div
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay đen mờ
                    padding: "50px",
                    borderRadius: "10px",
                }}
            >
                <h1 style={{ fontSize: "3em", marginBottom: "20px" }}>
                    Dream Maker
                </h1>
                <p style={{ fontSize: "1.5em", marginBottom: "30px" }}>
                    Your Personal Dream Maker
                </p>
                <p style={{ fontSize: "1.2em", marginBottom: "40px" }}>
                    We believe that it is all about the BIG DREAMS and the small
                    details!
                </p>
                <button
                    style={{
                        backgroundColor: "#fff",
                        color: "#000",
                        padding: "15px 30px",
                        border: "none",
                        borderRadius: "5px",
                        fontSize: "1.2em",
                        cursor: "pointer",
                    }}
                >
                    BOOK NOW
                </button>
            </div>
        </div>
    );
}

export default Hero;
