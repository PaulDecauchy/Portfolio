import mongoose, { model, models } from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema({
  username: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Comment = models.Comment || model('Comment', commentSchema); // le créé s'il n'existe pas ou utiliser celui qui existe

export default Comment;