const Event = require("../models/events");
//Tao Su kien moi
exports.createEvent = async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//Find tat ca cac su kien
exports.findAllEvent = async (req, res) => {
    try {
        const events = await Event.find().exec();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//Search su kien theo id
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
//update su kien
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
//Delete su kien
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
