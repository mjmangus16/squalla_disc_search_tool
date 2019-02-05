const express = require("express");
const router = express.Router();
const passport = require("passport");

const Value = require("../../models/Value");

router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Value.findOne({ name: req.body.name }).then(value => {
      if (value) {
        return value
          .status(400)
          .json({ course: "That value already exists in the database" });
      } else {
        let data = [];

        if (req.body.data) {
          if (req.body.data.indexOf(",") > -1) {
            data = req.body.data.split(",");
          } else {
            data = [req.body.data];
          }
        }

        const newValue = new Value({
          name: req.body.name,
          data
        });

        newValue
          .save()
          .then(value => res.json(value))
          .catch(err => console.log(err));
      }
    });
  }
);

router.get("/all", (req, res) => {
  Value.find().then(values => res.json(values));
});

module.exports = router;
