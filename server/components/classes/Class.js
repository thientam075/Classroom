const express = require("express");
const router = express.Router();
const createError = require("http-errors");

const queries = require("../../database/queries");

// Support for router
function validIDparams(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(createError(404, "Invalid ID"));
}

// Router
router.get("/", function (req, res, next) {
  queries.getAll().then((classrooms) => {
    res.json(classrooms);
  });
});
router.get("/:id", validIDparams, function (req, res, next) {
  queries.getOne(req.params.id).then((classroom) => {
    if (classroom) {
      res.json(classroom);
    } else {
      next(createError(404, "No classroom found"));
    }
  });
});
router.post("/", function (req, res, next) {
  console.log(req.body);
    queries.createOne(req.body).then((classroom) => {
      res.json({
        message: "Classroom created successfully",
      });
    });
});
router.put("/:id", validIDparams, function (req, res, next) {
  queries.updateOne(req.body).then((classroom) => {
    if (classroom) {
      res.json(classroom);
    } else {
      next(createError(404, "No classroom found"));
    }
  });
});
router.delete("/:id", validIDparams, function (req, res, next) {
  queries.deleteOne(req.params.id).then((classroom) => {
    if (classroom) {
      res.json({
        message: "Class has been deleted"
      });
    } else {
      next(createError(404, "No classroom found"));
    }
  });
});
module.exports = router;
