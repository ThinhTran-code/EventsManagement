const express = require("express");
const router = express.Router();
const {
    createReview,
    getAllReviews,
    getReviewById,
    updateReview,
    deleteReview,
    getReviewsByEventId,
    getReviewsByUserId,
} = require("../controllers/review.controller");
router.post("/", createReview);
router.get("/", getAllReviews);
router.get("/:id", getReviewById);
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);
router.get("/event/:eventId", getReviewsByEventId);
router.get("/user:/:userId", getReviewsByUserId);
module.exports = router;
