import express from "express";
import protect from "../middleware/authMiddleware.js";
import Habit from "../models/Habit.js";

const router = express.Router();

// Add new habit
router.post("/add", protect, async (req, res) => {
  const { title } = req.body;
  const habit = await Habit.create({ userId: req.user._id, title });
  res.json({ success: true, habit });
});

// Get user habits
router.get("/", protect, async (req, res) => {
  const habits = await Habit.find({ userId: req.user._id });
  res.json({ success: true, habits });
});

export default router;
