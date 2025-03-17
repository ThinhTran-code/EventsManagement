import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function RegisterForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Sử dụng useNavigate thay vì useHistory

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/users/register", { username, password }).then((res) => {
            localStorage.setItem("token", res.data.token);
            navigate("/"); // Sử dụng navigate thay vì history.push
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterForm;
