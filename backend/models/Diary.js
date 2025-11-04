import mongoose from "mongoose";

const diarySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: { type: String },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Diary", diarySchema);
