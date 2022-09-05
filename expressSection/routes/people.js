const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/people.js");

router.get("/", getPeople);
router.post("/", createPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

// We also can define routes with chaining
// router.route('/').get(getPeople)

module.exports = router;
