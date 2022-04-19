const express = require("express"); //inisiasi variable yang berisi express
const router = express.Router(); // inisiasi variable yang berisi fungsi router express
const {
	list,
	create,
	update,
	destroy,
} = require("../controllers/categoryController"); // inisiasi object controller

router.get("/list", list); // route untuk endpoint list
router.post("/create", create); // route untuk endpoint create
router.put("/update", update); // route untuk endpoint update
router.delete("/destroy", destroy); // route untuk endpoint destroy

module.exports = router; // export fungsi router agar module lain bisa membaca file ini
