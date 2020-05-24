// Todo: create Album Schema
const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  title: String,
  date: Date,
  copiesSold: Number,
  numberTracks: Number,
  image: String,
  revenue: Number
});
const Album = mongoose.model("Album", AlbumSchema);
module.exports = Album;
