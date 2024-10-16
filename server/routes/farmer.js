import express from 'express';
const router = express.Router();

// Sample route
router.get('/', (req, res) => {
    res.json({ message: "Farmers route" });
});

// Export the router
export default router;
