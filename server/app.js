import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello m33k");
});

app.listen(3000, () => {
    console.log(" server running on port 3000");
    
});