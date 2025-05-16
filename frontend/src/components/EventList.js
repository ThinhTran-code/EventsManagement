import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";
import Navbar from "../components/Navbar";

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await API.get("/events");
                setEvents(res.data);
            } catch (err) {
                console.error("Lỗi khi lấy sự kiện:", err);
            }
        };

        fetchEvents();
    }, []);

    return (
        <>
            <Navbar />
            <div style={styles.container}>
                <h2>Danh sách sự kiện</h2>
                <Link to="/events/create" style={styles.createButton}>
                    Tạo sự kiện mới
                </Link>
                <div style={styles.eventGrid}>
                    {events.map((event) => (
                        <div key={event._id} style={styles.eventItem}>
                            <h3>{event.title}</h3>
                            <p>{new Date(event.date).toLocaleDateString()}</p>
                            <p>{event.location}</p>
                            <Link
                                to={`/events/${event._id}`}
                                style={styles.link}
                            >
                                Xem chi tiết
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

const styles = {
    container: {
        textAlign: "center",
        marginTop: "50px",
        padding: "20px",
    },
    createButton: {
        backgroundColor: "#007bff",
        color: "white",
        padding: "10px 20px",
        textDecoration: "none",
        borderRadius: "4px",
        marginBottom: "30px",
        display: "inline-block",
    },
    eventGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // Mỗi hàng 3 cột
        gap: "20px",
        padding: "10px",
    },
    eventItem: {
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "left",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    link: {
        color: "#007bff",
        textDecoration: "none",
        fontWeight: "bold",
    },
};

export default EventList;
