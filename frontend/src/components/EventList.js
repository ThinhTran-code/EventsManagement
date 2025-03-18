import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EventList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        console.log("Fetching events...");
        axios
            .get("/events")
            .then((res) => {
                setEvents(res.data);
                console.log("Events data:", res.data);
            })
            .catch((error) => {
                console.error("Error fetching events:", error);
            });
    }, []);

    return (
        <div style={{ padding: "50px", textAlign: "center" }}>
            <h2>OUR EVENTS</h2>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
            >
                {events.map((event) => (
                    <div
                        key={event._id}
                        style={{
                            margin: "20px",
                            border: "1px solid #ddd",
                            padding: "20px",
                            width: "300px",
                            display: "flex", // Thêm flex để căn chỉnh nội dung
                            flexDirection: "column", // Nội dung theo chiều dọc
                            justifyContent: "space-between", // Căn chỉnh giữa các phần tử
                        }}
                    >
                        <div>
                            {" "}
                            {/* Container cho thông tin sự kiện */}
                            <h3>{event.eventName}</h3>
                            <p>Event Type: {event.eventType}</p>
                            <p>
                                Date:{" "}
                                {new Date(event.date).toLocaleDateString()}
                            </p>
                            <p>Location: {event.location}</p>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                            }}
                        >
                            {" "}
                            {/* Container cho 2 nút */}
                            <button
                                style={{
                                    padding: "8px 16px",
                                    backgroundColor: "#4CAF50",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                }}
                            >
                                Đăng ký
                            </button>
                            <Link
                                to={`/events/${event._id}`}
                                style={{
                                    padding: "8px 16px",
                                    backgroundColor: "#008CBA",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "4px",
                                    textDecoration: "none",
                                }}
                            >
                                Chi tiết
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventList;
