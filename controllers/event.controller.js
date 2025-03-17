const Event = require("../models/events");

// Tạo sự kiện mới
exports.createEvent = async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ message: error.message });
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

// Delete sự kiện
exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) {
            res.status(404).json({ message: "Event Not Found" });
        }
        res.json({ message: "Delete successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
