import express from "express";
import protect from "../middleware/authMiddleware.js";
import Diary from "../models/Diary.js";

const router = express.Router();

router.post("/add", protect, async (req, res) => {
  const entry = await Diary.create({
    userId: req.user._id,
    content: req.body.content,
  });
  res.json({ success: true, entry });
});

router.get("/", protect, async (req, res) => {
  const entries = await Diary.find({ userId: req.user._id }).sort({ date: -1 });
  res.json({ success: true, entries });
});

export default router;
