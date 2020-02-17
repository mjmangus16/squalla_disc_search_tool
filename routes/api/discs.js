const express = require("express");
const router = express.Router();
const passport = require("passport");
// const discs = require("../../data/discs");

const Disc = require("../../models/Disc");
const Disc2 = require("../../models/Disc2");

const array = require("../../discs_final");

// @route   POST api/discs/add
// @desc    Add a disc
// @access  Private
router.post(
  "/add",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Disc.findOne({
      manufacture: req.body.manufacture,
      discName: req.body.discName
    }).then(disc => {
      if (disc) {
        return res
          .status(400)
          .json({ course: "That disc is already in our database" });
      } else {
        const manufacture = req.body.manufacture,
          discName = req.body.discName,
          discType = req.body.discType,
          stability = req.body.stability,
          iRatings = {
            speed: req.body.iSpeed,
            glide: req.body.iGlide,
            turn: req.body.iTurn,
            fade: req.body.iFade
          },
          link = req.body.link;
        let mRatings = {};

        if (
          req.body.mSpeed &&
          req.body.mGlide &&
          req.body.mTurn &&
          req.body.mFade
        ) {
          mRatings = {
            speed: req.body.mSpeed,
            glide: req.body.mGlide,
            turn: req.body.mTurn,
            fade: req.body.mFade
          };
        }

        const newDisc = new Disc({
          manufacture,
          discName,
          discType,
          stability,
          infiniteRatings: iRatings,
          link
        });

        if (Object.keys(mRatings).length > 0) {
          newDisc.manufactureRatings = mRatings;
        } else {
          newDisc.manufactureRatings = {
            speed: "",
            glide: "",
            turn: "",
            fade: ""
          };
        }

        newDisc
          .save()
          .then(course => res.json(course))
          .catch(err => console.log(err));
      }
    });
  }
);

// @route   GET api/discs/all
// @desc    Get all discs
// @access  Public
router.get("/all", (req, res) => {
  Disc.find().then(discs => {
    res.json(discs);
  });
});

// @route   POST api/discs/addAll
// @desc    Get all discs
// @access  Public

// router.post("/addAll", (req, res) => {
//   for (let i = 0; i < discs.length; i++) {
//     let newDisc = {
//       manufacture: discs[i].Manufacturer,
//       discName: discs[i].Name,
//       discType: discs[i].Distance,
//       stability: discs[i].Stability,
//       infiniteRatings: {
//         speed: discs[i].Speed,
//         glide: discs[i].Glide,
//         turn: discs[i].Turn,
//         fade: discs[i].Fade
//       },
//       link: discs[i].Link
//     };

//     if (discs[i].Manufacture_Ratings) {
//       newDisc.manufactureRatings = {
//         speed: discs[i].Manufacture_Ratings.Speed,
//         glide: discs[i].Manufacture_Ratings.Glide,
//         turn: discs[i].Manufacture_Ratings.Turn,
//         fade: discs[i].Manufacture_Ratings.Fade
//       };
//     }

//     const addDisc = new Disc(newDisc);
//     addDisc.save().catch(err => console.log(err));
//   }
// });

router.post("/disc2InsertMany", (req, res) => {
  Disc2.insertMany(array);
});

router.get("/discs2GetAll", (req, res) => {
  Disc2.find().then(discs => res.json(discs));
});

router.put("/discs2UpdateMany", (req, res) => {

  for (let i = 0; i < array.length; i++){
    Disc2.update({ title: array[i].title}, {plastics: array[i].plastics}).then(() => {
      console.log(i)
    }).catch(err => console.log(err))
  }
  
  
 
})

module.exports = router;
