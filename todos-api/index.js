const dotenv = require("dotenv");

const express = require("express");
const connectDB = require("./utils/db");

const todosRouter = require("./routes/todos");

dotenv.config();
const port = +process.env.PORT;

const mongo_uri = process.env.MONGO_URI;
connectDB(mongo_uri);

const app = express();
app.use(express.json());

app.use("/todos", todosRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.listen(port, () => console.log("server started port " + port));
