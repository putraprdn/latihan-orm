// inisiasi router menggunakan express js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("Hello World!");
});

router.get("/users", (req, res) => {
	res.send("Hello Users!");
});

router.get("/users/:id", (req, res) => {
	res.send(`Hello Users ${req.params.id}`);
});

router.post("/users", (req, res) => {
	res.send(`Hello Users ${req.body.id}`);
});

router.put("/users/:id", (req, res) => {
	res.send(`Hello Users ${req.params.id}`);
});

router.delete("/users/:id", (req, res) => {
	res.send(`Hello Users ${req.params.id}`);
});


module.exports = router;