const express = require("express"); //inisiasi variable yang berisi express
const router = express.Router(); // inisiasi variable yang berisi fungsi router express
const categoryRouter = require("./category"); //inisiasi router category

router.get("/check-health", (req, res) => res.send("Application Up"));
router.use("/category", categoryRouter); // implementasi route category dengan /category

module.exports = router; // export fungsi router agar module lain bisa membaca file ini
