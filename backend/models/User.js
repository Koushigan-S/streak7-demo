import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  level: { type: Number, default: 1 },
  xp: { type: Number, default: 0 },
});

export default mongoose.model("User", userSchema);
