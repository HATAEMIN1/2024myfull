const express = require("express");
const mongoose = require("mongoose");
const { Blog } = require("../models/Blog");
const User = require("../models/User");
const commentRouter = express.Router({ mergeParams: true });
const { Comment } = require("../models/Commnet");

commentRouter.post("/", async (req, res) => {
  try {
    const { blogId } = req.params;
    const { userId, content } = req.body;
    if (!mongoose.Types.ObjectId.isValid(blogId)) {
      return res.status(400).send({ message: "blogId is 없음" });
    }
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).send({ message: "userId is 없음" });
    }
    if (typeof content !== "string") {
      return res.status(400).send({ message: "내용 없음" });
    }
    const [blog, user] = await Promise.all([
      Blog.findById(blogId),
      User.findById(userId),
    ]);
    // const blog = await Blog.findById(blogId);
    // const user = await User.findById(userId);
    const comment = await new Comment({ content, blog, user }).save();
    res.status(200).send({ comment });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

commentRouter.get("/", async (req, res) => {
  try {
    const { blogId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(blogId)) {
      return res.status(400).send({ message: "blogId is 없음" });
    }
    const comment = await Comment.find({ blog: blogId }).populate([
      { path: "user", select: "email name" },
    ]);
    res.status(200).send({ comment });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

commentRouter.delete("/:commentId", async (req, res) => {
  try {
    const { commentId } = req.params;
    const deleteComment = await Comment.findByIdAndDelete(commentId);

    if (!deleteComment) {
      return res.status(400).send({ message: "commentId is 없음 " });
    }
    res.status(200).send({ message: "댓글이 성공적으로 삭제되었습니다." });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});
module.exports = { commentRouter };
