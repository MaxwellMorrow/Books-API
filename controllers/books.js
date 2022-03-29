const router = require("express").Router();
const Books = require("../models/book.js");
// GET books route
router.get("/", (req, res) => {
  Books.find()
    .then((foundBooks) => {
      res.json(foundBooks);
    })
    .catch((err) => {
      console.log("err", err);
      res.send("error404");
    });
});
// GET book by ID
router.get("/:id", (req, res) => {
  Books.findById(req.params.id)
    .then((foundBook) => {
      res.json(foundBook);
    })
    .catch((err) => {
      console.log("err", err);
      res.send("error404");
    });
});
// POST books route
router.post("/", (req, res) => {
  Books.create(req.body)
    .then(res.json(req.body))
    .catch((err) => {
      console.log("err", err);
      res.send("error404");
    });
});

// // PUT books route
router.put("/:id", (req, res) => {
  Books.findByIdAndUpdate(req.params.id, req.body)
    .then((foundBook) => {
      res.json(foundBook);
      console.log("Put Successful")
    })
    .catch((err) => {
      console.log("err", err);
      res.send("error404");
    });
});

// // Delete books route
router.delete("/:id", (req, res) => {
  Books.findByIdAndDelete(req.params.id)
    .then((foundBook) => {
      res.json(foundBook);
      console.log("delete successful")
    })
    .catch((err) => {
      console.log("err", err);
      res.send("error404");
    });
});

// could not get this seed to work 
router.get("/seed", (req, res) => {
  Books.insertMany([
    {
      title: "The Shinobi Initiative",
      description:
        "The reality-bending adventures of a clandestine service agency in the year 2166",
      year: 2014,
      quantity: 10,
      imageURL: "https://imgur.com/LEqsHy5.jpeg",
    },
    {
      title: "Tess the Wonder Dog",
      description: "The tale of a dog who gets super powers",
      year: 2007,
      quantity: 3,
      imageURL: "https://imgur.com/cEJmGKV.jpg",
    },
    {
      title: "The Annals of Arathrae",
      description:
        "This anthology tells the intertwined narratives of six fairy tales.",
      year: 2016,
      quantity: 8,
      imageURL: "https://imgur.com/VGyUtrr.jpeg",
    },
    {
      title: "W∀RP",
      description:
        "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
      year: 2010,
      quantity: 4,
      imageURL: "https://imgur.com/qYLKtPH.jpeg",
    },
  ])
    .then(
      res.status(200).json({
        message: "Seed successful",
      })
    )
    .catch(
      res.status(400).json({
        message: "Seed unsuccessful",
      })
    );
});

module.exports = router;
