const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/calculate", (req, res) => {
  try {
    const result = eval(req.body.expression);
    res.json({ result });
  } catch {
    res.json({ result: "Error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
