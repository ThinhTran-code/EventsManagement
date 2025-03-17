import React from "react";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

function AdminPage() {
    return (
        <div>
            <h1>Admin</h1>
            <EventForm />
            <EventList />
        </div>
    );
}

export default AdminPage;
