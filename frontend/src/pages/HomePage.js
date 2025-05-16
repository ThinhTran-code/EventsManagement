import React from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div style={styles.container}>
                <h1>Chào mừng đến với Hệ thống Quản lý Sự kiện</h1>
                <p>Vui lòng đăng nhập để bắt đầu sử dụng hệ thống.</p>
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
};

export default HomePage;
