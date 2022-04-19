require("dotenv").config(); // kegunaan untuk membaca file .env
const express = require("express"); // inisiasi variable yang berisi express
const port = process.env.PORT || 3500; // declare port dr env || 3500
const app = express(); // inisiasi function express ke variable app
const cors = require("cors"); // inisiasi variable yang berisi cors
const bodyParser = require("body-parser"); // inisiasi variable yang berisi body parser
const router = require("./router"); // inisiasi variable yang berisi router dari folder router

app.use(cors()); // gunakan fungsi cors
app.use(express.urlencoded({ extended: true })); // berguna untuk menerima request form-data dan urlencode form
app.use(bodyParser.json()); // gunakan fungsi json dari body parser (berguna untuk menangkap json request)

app.use("/api", router); //implementasi kan router nya dengan /api

app.listen(port, () => {
	console.log(`server running at port ${port}`);
}); // fungsi untuk inisiasi http server pada port yang telah di tentukan
