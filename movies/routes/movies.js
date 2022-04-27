const express = require("express");
const router = express.Router();

const {
  searchMovie,
} = require("../controllers/movies");


router.post(
    "/searchMovie",
    searchMovie
);
module.exports = router;
