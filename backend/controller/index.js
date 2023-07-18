import { Todo } from "../model/index.js";

const getAllTodo = async (req, res) => {
  const allTodos = await Todo.find().sort({ _id: -1 });
  allTodos.length > 0
    ? res.send(allTodos)
    : res.send([{ text: `no data found` }]);
};

const addTodo = (req, res) => {
  const newTodo = req.body;
  Todo.create(newTodo)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(400).send(err.message));
};

const getTodoById = (req, res) => {
  const _id = req.body;
  Todo.findById(_id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(400).send(err));
};

const updateTodoStatus = (req, res) => {
  const { _id, isChecked } = req.body;
  if (_id) {
    Todo.findByIdAndUpdate(_id, { isChecked })
      .then((result) => res.status(200).send(req.body))
      .catch((err) =>
        res
          .status(400)
          .send({ message: `data with this id : ${_id} not found` })
      );
  } else {
    res.send({ message: `Can not get id` });
  }
};

const updateTodo = (req, res) => {
  const { _id, text } = req.body;
  if (_id) {
    Todo.findByIdAndUpdate(_id, { text })
      .then((result) => res.status(200).send(req.body))
      .catch((err) =>
        res
          .status(400)
          .send({ message: `data with this id : ${_id} not found` })
      );
  } else {
    res.send({ message: `Can not get id` });
  }
};
const deleteTodo = (req, res) => {
  const { _id } = req.body;
  if (_id) {
    Todo.findByIdAndDelete(_id)
      .then((result) => res.status(200).send("data deleted successfully"))
      .catch((err) =>
        res
          .status(400)
          .send({ message: `data with this id : ${_id} not found` })
      );
  } else {
    res.send({ message: `Can not get id` });
  }
};

export const todoController = {
  getAllTodo,
  addTodo,
  getTodoById,
  updateTodoStatus,
  updateTodo,
  deleteTodo,
};
