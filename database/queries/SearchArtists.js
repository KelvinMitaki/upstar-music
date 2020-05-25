const Artist = require("../models/artist");

/**
 * Searches through the Artist collection
 * @param {object} criteria An object with a name, age, and yearsActive
 * @param {string} sortProperty The property to sort the results by
 * @param {integer} offset How many records to skip in the result set
 * @param {integer} limit How many records to return in the result set
 * @return {promise} A promise that resolves with the artists, count, offset, and limit
 */
module.exports = (criteria, sortProperty, offset = 0, limit = 20) => {
  const Obj = {};
  if (criteria.name.length !== 0) {
    Obj.name = criteria.name;
  }
  if (criteria.age) {
    const { max, min } = criteria.age;
    Obj.age = { $gte: min, $lte: max };
  }
  if (criteria.yearsActive) {
    const { max, min } = criteria.yearsActive;
    Obj.yearsActive = { $gte: min, $lte: max };
  }

  const artists = Artist.find(Obj)
    .sort({ [sortProperty]: 1 })
    .skip(offset)
    .limit(limit)
    .then(artists => artists);
  console.log(artists);
  return Promise.all([artists, Artist.count()]).then(result => ({
    all: result[0],
    count: result[1],
    offset,
    limit
  }));
};
