const Task = require("../models/Task");

//@desc Get all tasks(Admin:all,User:only asssigned tasks)
//@route GET /api/tasks
//@access Private
const getTasks = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
//@desc Get all tasks(Admin:all,User:only asssigned tasks)
//@route GET /api/tasks
//@access Private
const createTask = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
//@desc Get all tasks(Admin:all,User:only asssigned tasks)
//@route GET /api/tasks
//@access Private
const getTaskById = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
//@desc Get all tasks(Admin:all,User:only asssigned tasks)
//@route GET /api/tasks
//@access Private
const updateTask = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
//@desc Get all tasks(Admin:all,User:only asssigned tasks)
//@route GET /api/tasks
//@access Private
const deleteTask = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
//@desc Get all tasks(Admin:all,User:only asssigned tasks)
//@route GET /api/tasks
//@access Private
const updateTaskStatus = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}; //@desc Get all tasks(Admin:all,User:only asssigned tasks)
//@route GET /api/tasks
//@access Private
const updateTaskChecklist = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}; //@desc Get all tasks(Admin:all,User:only asssigned tasks)
//@route GET /api/tasks
//@access Private
const getDashboardData = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}; //@desc Get all tasks(Admin:all,User:only asssigned tasks)
//@route GET /api/tasks
//@access Private
const getUserDashboardData = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  updateTaskStatus,
  updateTaskChecklist,
  getDashboardData,
  getUserDashboardData,
};
