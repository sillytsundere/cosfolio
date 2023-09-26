const sequelize = require("../config/connection");
const { Cosplay, User } = require("../models");

const userdata = [
  {
    name: "armordude",
    email: "email@email.com",
    password: "asdf1234",
  },

  {
    name: "gojosimp",
    email: "name@name.com",
    password: "asdf1234",
  },
];

const cosplaydata = [
  {
    name: "Batman",
    description: "The Darkest Knight",
    username: "armordude",
    user_id: "1",
  },

  {
    name: "Femme Gojo",
    description: "Hollow Purple",
    username: "gojosimp",
    user_id: "2",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

const seedCosplay = () => Cosplay.bulkCreate(cosplaydata);

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedCosplay();

  process.exit(0);
};

seedAll();
