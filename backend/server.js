import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import http from 'http';
import Web3 from 'web3';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.use(cors());
app.use(express.json());

// 🔹 Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ MongoDB connection error:', err));

// 🔹 Define MongoDB Schemas & Models

// User Schema (Wallet-based Authentication)
const UserSchema = new mongoose.Schema({
  walletAddress: { type: String, unique: true },
});
const User = mongoose.model('User', UserSchema);

// Course Schema
const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
});
const Course = mongoose.model('Course', CourseSchema);

// User Progress Schema
const ProgressSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  courseId: mongoose.Schema.Types.ObjectId,
  completed: Boolean,
});
const Progress = mongoose.model('Progress', ProgressSchema);

// 🔹 Wallet Authentication
app.post('/authenticate', async (req, res) => {
  const { walletAddress } = req.body;
  if (!walletAddress) return res.status(400).json({ message: 'Wallet address required' });
  
  let user = await User.findOne({ walletAddress });
  if (!user) {
    user = new User({ walletAddress });
    await user.save();
  }
  
  res.json({ message: 'Authentication successful', walletAddress });
});

// 🔹 CRUD Operations for Courses

// Create a Course
app.post('/courses', async (req, res) => {
  const { title, description, content } = req.body;
  const newCourse = new Course({ title, description, content });
  await newCourse.save();
  res.json(newCourse);
});

// Get All Courses
app.get('/courses', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// Update a Course
app.put('/courses/:id', async (req, res) => {
  const { title, description, content } = req.body;
  const updatedCourse = await Course.findByIdAndUpdate(req.params.id, { title, description, content }, { new: true });
  res.json(updatedCourse);
});

// Delete a Course
app.delete('/courses/:id', async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: 'Course deleted' });
});

// 🔹 Track User Progress
app.post('/progress', async (req, res) => {
  const { userId, courseId, completed } = req.body;
  const progress = new Progress({ userId, courseId, completed });
  await progress.save();
  res.json(progress);
});

// 🔹 Start Server
server.listen(process.env.PORT || 5000, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
});
