import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const Navbar = () => {
    const { token, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav style={styles.nav}>
            <div>
                <Link to="/" style={styles.link}>
                    Trang chủ
                </Link>
                {token && (
                    <>
                        <Link to="/events" style={styles.link}>
                            Sự kiện
                        </Link>
                        <Link to="/users" style={styles.link}>
                            Người dùng
                        </Link>
                    </>
                )}
            </div>
            <div>
                {token ? (
                    <button onClick={handleLogout} style={styles.button}>
                        Đăng xuất
                    </button>
                ) : (
                    <>
                        <Link to="/login" style={styles.link}>
                            Đăng nhập
                        </Link>
                        <Link to="/register" style={styles.link}>
                            Đăng ký
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        backgroundColor: "#343a40",
        color: "#fff",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    link: {
        color: "#fff",
        marginRight: "15px",
        textDecoration: "none",
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#dc3545",
        border: "none",
        padding: "8px 12px",
        borderRadius: "4px",
        color: "white",
        cursor: "pointer",
    },
};

export default Navbar;
