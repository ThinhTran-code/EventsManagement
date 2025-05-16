import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../api";
import Navbar from "../components/Navbar";

const EventDetail = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const res = await API.get(`/events/${id}`);
                setEvent(res.data);
            } catch (err) {
                console.error("Lỗi khi lấy sự kiện:", err);
            }
        };

        fetchEvent();
    }, [id]);

    if (!event) return <p>Đang tải...</p>;

    return (
        <>
            <Navbar />
            <div style={styles.container}>
                <h2>{event.title}</h2>
                <p>
                    <strong>Mô tả:</strong> {event.description}
                </p>
                <p>
                    <strong>Địa điểm:</strong> {event.location}
                </p>
                <p>
                    <strong>Ngày:</strong>{" "}
                    {new Date(event.date).toLocaleDateString()}
                </p>
                <Link to="/events" style={styles.link}>
                    Trở lại danh sách sự kiện
                </Link>
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
    link: {
        color: "#007bff",
        textDecoration: "none",
        fontWeight: "bold",
        marginTop: "20px",
        display: "inline-block",
    },
};

export default EventDetail;
