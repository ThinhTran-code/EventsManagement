import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../api";
import Navbar from "../components/Navbar";

const UserManagementPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await API.get("/user");
                setUsers(res.data);
            } catch (err) {
                console.error("Lỗi khi lấy danh sách người dùng:", err);
            }
        };

        fetchUsers();
    }, []);

    return (
        <>
            <Navbar />
            <div style={styles.container}>
                <h2>Quản lý người dùng</h2>
                <Link to="/user/create" style={styles.createButton}>
                    Tạo người dùng mới
                </Link>
                <div style={styles.userList}>
                    {users.map((user) => (
                        <div key={user._id} style={styles.userItem}>
                            <h3>{user.username}</h3>
                            <p>{user.email}</p>
                            <Link to={`/user/${user._id}`} style={styles.link}>
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
        marginBottom: "20px",
        display: "inline-block",
    },
    userList: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    userItem: {
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

export default UserManagementPage;
