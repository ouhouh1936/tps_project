import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Post = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    createDay: {
      type: String,
      required: true,
    },
    isDlete: {
      type: Boolean,
      required: falses,
    },
  },
  { versionKey: false }
);

export default mongoose.model(`Post`, Post, `Post`);
