import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EventList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        console.log("Fetching events...");
        axios
            .get("/events")
            .then((res) => {
                setEvents(res.data);
                console.log("Events data:", res.data);
            })
            .catch((error) => {
                console.error("Error fetching events:", error);
            });
    }, []);

    return (
        <div>
            <h2>Events</h2>
            {events.map((event) => (
                <div key={event._id}>
                    <Link to={`/events/${event._id}`}>{event.eventName}</Link>{" "}
                    {/* Sửa thành eventName */}
                    <p>Event Type: {event.eventType}</p> {/* Thêm Event Type */}
                    <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                    <p>Location: {event.location}</p> {/* Thêm Location */}
                </div>
            ))}
        </div>
    );
}

export default EventList;
