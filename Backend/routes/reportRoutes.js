const express=require("express");
const {protect,adminOnly}=require("../middlewares/authMiddleware");
const {exportTasksReport,exportsUsersReport}=require("../controllers/reportController")

const router=express.Router();

router.get("/exports/tasks",protect,adminOnly,exportTasksReport);//Export all tasks as Excel/PDF
router.get("/exports/users",protect,adminOnly,exportsUsersReport);//Export user-task report

module.exports=router;