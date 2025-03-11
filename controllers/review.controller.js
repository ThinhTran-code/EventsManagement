const Review = require("../models/reviews");
// Tạo đánh giá mới
exports.createReview = async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Lấy tất cả đánh giá
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
            .populate("eventId")
            .populate("userId")
            .exec();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy đánh giá theo ID
exports.getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id)
            .populate("eventId")
            .populate("userId")
            .exec();
        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }
        res.json(review);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật đánh giá
exports.updateReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
            .populate("eventId")
            .populate("userId")
            .exec();
        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }
        res.json(review);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Xóa đánh giá
exports.deleteReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }
        res.json({ message: "Review deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy đánh giá theo eventId
exports.getReviewsByEventId = async (req, res) => {
    try {
        const reviews = await Review.find({ eventId: req.params.eventId })
            .populate("eventId")
            .populate("userId")
            .exec();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy đánh giá theo userId
exports.getReviewsByUserId = async (req, res) => {
    try {
        const reviews = await Review.find({ userId: req.params.userId })
            .populate("eventId")
            .populate("userId")
            .exec();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
