const Service = require("../models/services");
// Tạo dịch vụ mới
exports.createService = async (req, res) => {
    try {
        const service = new Service(req.body);
        await service.save();
        res.status(201).json(service);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Lấy tất cả dịch vụ
exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find().populate("eventId").exec();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy dịch vụ theo ID
exports.getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id)
            .populate("eventId")
            .exec();
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.json(service);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật dịch vụ
exports.updateService = async (req, res) => {
    try {
        const service = await Service.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        )
            .populate("eventId")
            .exec();
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.json(service);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Xóa dịch vụ
exports.deleteService = async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.json({ message: "Service deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy dịch vụ theo eventId
exports.getServicesByEventId = async (req, res) => {
    try {
        const services = await Service.find({ eventId: req.params.eventId })
            .populate("eventId")
            .exec();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
