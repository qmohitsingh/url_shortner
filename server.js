const express = require("express");
const bodyParser = require("body-parser");
const urlShortner = require("./routes/url_shortner")

const app = express();
// PORT

const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ message: "API Working" });
});

app.use("/url", urlShortner);

app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT http://localhost:${PORT}`);
});