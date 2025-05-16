import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import UserManagementPage from "./pages/UserManagementPage";
import CreateEventPage from "./pages/CreateEventPage";
import { AuthProvider } from "./utils/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import EventDetail from "./components/EventDetail";
import UserDetail from "./pages/UserDetai";

export default function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route
                        path="/events"
                        element={
                            <ProtectedRoute>
                                <EventPage />
                            </ProtectedRoute>
                        }
                    />
                    {/* Định nghĩa route mới cho trang tạo sự kiện */}
                    <Route
                        path="/events/create"
                        element={
                            <ProtectedRoute allowedRoles={["admin"]}>
                                <CreateEventPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/users"
                        element={
                            <ProtectedRoute>
                                <UserManagementPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/user/:id" element={<UserDetail />} />
                    <Route path="/events/:id" element={<EventDetail />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}
