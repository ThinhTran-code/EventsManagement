const Event = require("../models/events");

// Tạo sự kiện mới
exports.createEvent = async (req, res) => {
    try {
        const { title, description, date, location } = req.body;

        const newEvent = new Event({
            title,
            description,
            date,
            location,
            createdBy: req.user.id, // Lưu id của admin tạo sự kiện
        });

        await newEvent.save();
        res.status(201).json({
            message: "Event created successfully",
            event: newEvent,
        });
    } catch (error) {
        console.error("Create event error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Tìm tất cả các sự kiện
exports.findAllEvent = async (req, res) => {
    try {
        const events = await Event.find().exec();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Tìm sự kiện theo id
exports.searchEventById = async (req, res) => {
    try {
        console.log("req.params.id:", req.params.id);
        const event = await Event.findById(req.params.id);
        if (!event) {
            res.status(404).json({ message: "Event Not Found" });
        }
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update sự kiện
exports.updateEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        const updateData = { ...req.body };
        delete updateData._id;
        const event = await Event.findByIdAndUpdate(eventId, updateData, {
            new: true,
        });
        if (!event) {
            res.status(404).json({ message: "Event Not Found" });
        }
        res.json(event);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Xóa sự kiện (Admin Only)
exports.deleteEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        await Event.findByIdAndDelete(eventId);
        res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
        console.error("Delete event error:", error);
        res.status(500).json({ message: "Server error" });
    }
};
