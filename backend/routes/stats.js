import express from "express";
import protect from "../middleware/authMiddleware.js";
import Stat from "../models/Stat.js";

const router = express.Router();

router.get("/", protect, async (req, res) => {
  const stats = await Stat.findOne({ userId: req.user._id });
  res.json({ success: true, stats });
});

router.post("/update", protect, async (req, res) => {
  const { xp, level } = req.body;
  const stats = await Stat.findOneAndUpdate(
    { userId: req.user._id },
    { xp, level },
    { new: true, upsert: true }
  );
  res.json({ success: true, stats });
});

export default router;
