import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/connectDB.js";
import authRoutes from "./routes/auth.js";
import habitRoutes from "./routes/habits.js";
import diaryRoutes from "./routes/diary.js";
import statsRoutes from "./routes/stats.js";

dotenv.config();
const app = express();
connectDB();

app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

app.get("/", (req, res) => res.send("STREAK7 API running"));

app.use("/api/auth", authRoutes);
app.use("/api/habits", habitRoutes);
app.use("/api/diary", diaryRoutes);
app.use("/api/stats", statsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
