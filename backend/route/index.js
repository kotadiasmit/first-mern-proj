import express from "express";
import { todoController } from "../controller/index.js";

const router = express.Router();
const {
  getAllTodo,
  addTodo,
  getTodoById,
  updateTodo,
  updateTodoStatus,
  deleteTodo,
} = todoController;

router.get("/todos", getAllTodo);

router.post("/todo/create", addTodo);

// router.get("/:id", getTodoById);

router.patch("/todo/updateStatus", updateTodoStatus);

router.patch("/todo/update", updateTodo);

router.delete("/todo/delete", deleteTodo);

export default router;
