const { Router } = require("express");

const Todo = require("../models/Todo");

const router = new Router();

// async function
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json({ todos });
});

// GET ID
router.get("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json({ todo });
});

// CREATE
router.post("/", async (req, res) => {
  try {
    const todo = await Todo.create(req.body);

    res.status(201).json({ todo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  todo.title = req.body.title;
  res.json(todo);
});

//DELETE
router.delete("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.json({ todo });
});

module.exports = router;
