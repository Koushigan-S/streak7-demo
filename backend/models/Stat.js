import mongoose from "mongoose";

const statSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  achievements: [String],
});

export default mongoose.model("Stat", statSchema);
