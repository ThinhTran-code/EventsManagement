const Guest = require("../models/guests");

//Tao khach moi moi'
exports.createGuest = async (req, res) => {
    try {
        const guests = new Guest(req.body);
        await guests.save();
        res.status(201).json(guests);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//Lay tat ca khach moi
exports.findAllGuest = async (req, res) => {
    try {
        const guest = await Guest.find().exec();
        res.status(200).json(guest);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//Tim khach moi theo ID
exports.getGuestById = async (req, res) => {
    try {
        const guest = await Guest.findById(req.params.id);
        if (!guest) {
            res.status(404).json({ message: "Guest Not Found" });
        }
        res.json(guest);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//Cap nhat khach moi
exports.updateGuest = async (req, res) => {
    try {
        const guest = await Guest.findByIdAndUpdate(req.params.id, req.boy, {
            new: true,
        });
        if (!guest) {
            res.status(404).json({
                message: "Guest Not Found So Can't Update",
            });
        }
        res.json(guest);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//Xoa khach moi
exports.deleteGuest = async (req, res) => {
    try {
        const guest = await Guest.findByIdAndDelete(req.params.id);
        if (!guest) {
            res.status(404).json({ message: "Guest Not Found" });
        }
        res.json({ message: "Delete successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
