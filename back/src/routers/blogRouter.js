const express = require("express");
const User = require("../models/User");
const { Blog } = require("../models/Blog");
const mongoose = require("mongoose");
const blogRouter = express.Router();

blogRouter.post("/", async (req, res) => {
  try {
    const { title, content, isLive, userId } = req.body;
    if (typeof title != "string") {
      return res.status(400).send({ error: "title is required" });
    }
    if (typeof content != "string") {
      return res.status(400).send({ error: "content is required" });
    }
    if (isLive && isLive !== "boolean") {
      return res.status(400).send({ error: "isLive is required" });
    }
    if (!mongoose.isValidObjectId(userId)) {
      return res.status(400).send({ error: "userId is required" });
    }

    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).send({ error: "userId is required" });
    }
    let blog = await new Blog({ ...req.body, user }).save();
    return res.status(200).send({ blog });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
});
blogRouter.get("/", async (req, res) => {
  try {
    const { page, where } = req.query;
    page1 = parseInt(page);
    const totalCnt = await Blog.countDocuments({});

    const blogs = await Blog.find({})
      .skip(page * 5)
      .limit(5)
      .populate({
        path: "user",
        select: "email name",
      });
    return res.status(200).send({ blogs, totalCnt });
  } catch (e) {
    console.error(e);
    res.status(500).send({ error: e.message });
  }
});

module.exports = { blogRouter };
