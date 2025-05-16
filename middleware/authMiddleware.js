const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = { id: decoded.user.id, role: decoded.user.role }; // Thêm role vào req.user
        next();
    } catch (error) {
        console.error("JWT verification failed:", error);
        res.status(401).json({ message: "Auth failed!" });
    }
};
