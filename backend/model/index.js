import mongoose from "mongoose";

const Schema = mongoose.Schema;
const TodoSchema = new Schema({
  text: {
    type: String,
    require: true,
  },
  isChecked: {
    type: Boolean,
    required: true,
  },
});

export const Todo = mongoose.model("todos", TodoSchema);
