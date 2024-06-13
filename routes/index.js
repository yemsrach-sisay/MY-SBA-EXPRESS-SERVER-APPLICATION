const express = require("express");
const router = express.Router();

// In-memory data storage
let users = [];
let posts = [];
let comments = [];

// GET routes
router.get("/", (req, res) => {
  res.render("index", { requestTime: req.requestTime, users });
});

router.get("/users", (req, res) => {
  res.json(users);
});

router.get("/posts", (req, res) => {
  res.json(posts);
});

router.get("/comments", (req, res) => {
  res.json(comments);
});

// POST routes
router.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

router.post("/posts", (req, res) => {
  const post = req.body;
  posts.push(post);
  res.status(201).json(post);
});

router.post("/comments", (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// PUT routes
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  users = users.map((user) => (user.id === id ? updatedUser : user));
  res.json(updatedUser);
});

// DELETE routes
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.status(204).send();
});

module.exports = router;
