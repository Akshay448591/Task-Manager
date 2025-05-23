const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const {
  getDashboardData,
  getUserDashboardData,
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  updateTaskChecklist,
  updateTaskStatus,
} = require("../controllers/taskController");
const router = express.Router();

//task management routes
router.get("/dashboard-data", protect, getDashboardData);
router.get("/user-dashboard-data", protect, getUserDashboardData);
router.get("/", protect, getTasks); //Get all the tasks (Admin:all,User:assigned)
router.get("/:id", protect, getTaskById); //Get task by id
router.post("/", protect, adminOnly, createTask); //Create a task (Admin only)
router.put("/:id", protect, updateTask); // Update task details
router.delete("/:id", protect, deleteTask); //Delete a task
router.put("/:id/status", protect, updateTaskStatus); //Update task status
router.put("/:id/status", protect, updateTaskChecklist); //Update task checklist

module.exports = router;
