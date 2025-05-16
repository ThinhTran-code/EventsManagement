import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import Navbar from "../components/Navbar";
import { useAuth } from "../utils/AuthContext";

const CreateEventPage = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");

    const navigate = useNavigate();
    const { token } = useAuth(); // lấy token từ context

    useEffect(() => {
        if (!token) {
            alert("Bạn cần đăng nhập để tạo sự kiện.");
            navigate("/login");
        }
    }, [token, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("Đang gửi token:", token); // giúp debug

            const res = await API.post(
                "/events",
                { title, description, date, location },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("Event created:", res.data);
            navigate("/events");
        } catch (err) {
            if (err.response?.status === 401) {
                alert(
                    "Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại."
                );
                navigate("/login");
            } else {
                console.error("Lỗi khi tạo sự kiện:", err);
                alert("Đã xảy ra lỗi khi tạo sự kiện.");
            }
        }
    };

    return (
        <>
            <Navbar />
            <div style={styles.container}>
                <h2 style={styles.title}>Tạo sự kiện mới</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="text"
                        placeholder="Tên sự kiện"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={styles.input}
                        required
                    />
                    <textarea
                        placeholder="Mô tả"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={styles.textarea}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Địa điểm tổ chức"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        style={styles.input}
                        required
                    />
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        style={styles.input}
                        required
                    />
                    <button type="submit" style={styles.button}>
                        Tạo sự kiện
                    </button>
                </form>
            </div>
        </>
    );
};

const styles = {
    container: {
        maxWidth: "500px",
        margin: "50px auto",
        padding: "30px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "24px",
        color: "#333",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    input: {
        padding: "12px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "6px",
    },
    textarea: {
        padding: "12px",
        fontSize: "16px",
        height: "100px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        resize: "vertical",
    },
    button: {
        padding: "12px",
        fontSize: "16px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    },
};

export default CreateEventPage;
