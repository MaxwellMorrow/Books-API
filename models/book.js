const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let bookSchema = new mongoose.Schema({
  title: { type: String, default: "book.exe" },
  description: { type: String },
  year: { type: Number },
  quantity: {type:Number},
  imageURL: { type: String, default: "http://placekitten.com/200/300" },
});

module.exports = mongoose.model("Book", bookSchema);
