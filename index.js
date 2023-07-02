const express = require("express");
require("dotenv").config();
const cors = require("cors");
const imageRouter = require("./src/routes/image.route");

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api", imageRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
