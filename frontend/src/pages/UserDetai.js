// src/pages/UserDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";
import Navbar from "../components/Navbar";

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await API.get(`/user/${id}`);
                setUser(res.data);
            } catch (err) {
                console.error("Lỗi khi lấy chi tiết người dùng:", err);
            }
        };

        fetchUser();
    }, [id]);

    if (!user) return <p>Đang tải dữ liệu...</p>;

    return (
        <>
            <Navbar />
            <div style={styles.container}>
                <h2>Chi tiết người dùng</h2>
                <p>
                    <strong>Username:</strong> {user.username}
                </p>
                <p>
                    <strong>Email:</strong> {user.email}
                </p>
                <p>
                    <strong>Role:</strong> {user.role}
                </p>
            </div>
        </>
    );
};

const styles = {
    container: {
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
    },
};

export default UserDetail;
