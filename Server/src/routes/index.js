const express = require("express");
const router = express.Router();

//En el index de routes, debo importar todos los controladores

const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const postUser = require("../controllers/postUser");
const deleteFav = require("../controllers/deleteFav");

//es un empaquetador de rutas
router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
