import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";
import Navbar from "../components/Navbar";

const EventPage = () => {
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
                <div style={styles.eventList}>
                    {events.map((event) => (
                        <div key={event._id} style={styles.eventItem}>
                            <h3>{event.eventName}</h3>
                            <p>{event.date}</p>
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
        backgroundColor: "#28a745",
        color: "white",
        padding: "10px 20px",
        textDecoration: "none",
        borderRadius: "4px",
        marginBottom: "20px",
        display: "inline-block",
    },
    eventList: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    eventItem: {
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "4px",
        textAlign: "left",
    },
    link: {
        color: "#007bff",
        textDecoration: "none",
    },
};

export default EventPage;
