import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

const EventForm = () => {
    const [form, setForm] = useState({
        eventName: "",
        eventType: "",
        date: "",
        location: "",
        description: "",
        maxParticipants: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post("/events", form);
            navigate("/events");
        } catch (err) {
            console.error("Lỗi khi tạo sự kiện:", err);
        }
    };

    return (
        <div style={styles.container}>
            <h2>Tạo sự kiện mới</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    name="eventName"
                    placeholder="Tên sự kiện"
                    value={form.eventName}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <input
                    name="eventType"
                    placeholder="Loại sự kiện"
                    value={form.eventType}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <input
                    name="location"
                    placeholder="Địa điểm"
                    value={form.location}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Mô tả"
                    value={form.description}
                    onChange={handleChange}
                    style={styles.textarea}
                />
                <input
                    name="maxParticipants"
                    placeholder="Số lượng tối đa"
                    value={form.maxParticipants}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <button type="submit" style={styles.button}>
                    Tạo sự kiện
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        marginTop: "50px",
        padding: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    input: {
        padding: "10px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
    textarea: {
        padding: "10px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        height: "100px",
    },
    button: {
        padding: "10px",
        fontSize: "16px",
        backgroundColor: "#28a745",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};

export default EventForm;
