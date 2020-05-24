const mongoose = require("mongoose");
const Album = require("./album");

const ArtistSchema = new mongoose.Schema({
  name: String,
  age: Number,
  yearsActive: Number,
  image: String,
  genre: String,
  website: String,
  netWorth: Number,
  labelName: String,
  retired: Boolean,
  albums: [Album]
});

const Artist = mongoose.model("Artist", ArtistSchema);

module.exports = Artist;
