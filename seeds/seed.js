const { Cosplay } = require("../models");

const cosplaydata = [
  {
    name: "Batman",
    description: "The Darkest Knight",
    username: "armordude",
    user_id: "2",
  },
];

const seedCosplay = () => Cosplay.bulkCreate(cosplaydata);

module.exports = seedCosplay;
