const express = require("express");
const mongoose = require("mongoose");
const app = express();

const FoodModel = require("./models/Food");

app.use(express.json());

mongoose.connect(
  "mongodb+srv://dts:sUdbu1Kh9WPGw1NS@cruddemo.e69mb.mongodb.net/food?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.get("/", async (req, res) => {
  const food = new FoodModel({ foodName: "Apple", daysSinceIAte: 3 });

  try {
    await food.save();
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001 ...");
});
