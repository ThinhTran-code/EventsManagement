import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8888", // Điều chỉnh nếu bạn chạy ở port khác
});

// Thêm token vào header nếu có
API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default API;
