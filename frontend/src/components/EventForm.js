import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate

function EventForm() {
    const { id } = useParams();
    const navigate = useNavigate(); // Sử dụng useNavigate thay vì useHistory
    const [event, setEvent] = useState({ name: "", description: "" });

    useEffect(() => {
        if (id) {
            axios.get(`/events/${id}`).then((res) => setEvent(res.data));
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            axios.put(`/events/${id}`, event).then(() => navigate("/admin")); // Sử dụng navigate thay vì history.push
        } else {
            axios.post("/events", event).then(() => navigate("/admin")); // Sử dụng navigate thay vì history.push
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={event.name}
                onChange={(e) => setEvent({ ...event, name: e.target.value })}
                placeholder="Name"
            />
            <textarea
                value={event.description}
                onChange={(e) =>
                    setEvent({ ...event, description: e.target.value })
                }
                placeholder="Description"
            />
            <button type="submit">{id ? "Update" : "Create"}</button>
        </form>
    );
}

export default EventForm;
