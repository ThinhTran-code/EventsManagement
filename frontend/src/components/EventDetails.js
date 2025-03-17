import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EventDetails() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        axios.get(`/events/${id}`).then((res) => setEvent(res.data));
    }, [id]);

    if (!event) return <div>Loading...</div>;

    return (
        <div>
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            {/* Thêm thông tin chi tiết khác */}
        </div>
    );
}

export default EventDetails;
