const router = require("express").Router();
const { User, Cosplay } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  //if user is not logged in none of the following code runs, withAuth-user sent to login page
  try {
    const cosplayData = await Cosplay.findAll();

    const cosplays = cosplayData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      cosplays,

      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/profile", withAuth, async (req, res) => {
  console.log('sdlafkjlk');
  console.log(Cosplay, req.session.user_id);
  try {
    const userCosplays = await Cosplay.findAll({
      where: { user_id: req.session.user_id },
    });
    console.log('sdlafkjlk');
    const cosplays = userCosplays.map((project) =>
      project.get({ plain: true })
    );
    console.log('sdlafkjlk');
    res.render("profile", {
      cosplays,

      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
