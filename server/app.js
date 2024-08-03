import express from "express";
import userRoute from "./routes/user.js";

const app = express();

app.use("/user", userRoute);

app.get("/", (req, res) => {
    res.send("Hello m33k, home")
})

app.listen(3000, () => {
  console.log(" server running on port 3000");
});
