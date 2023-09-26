const router = require("express").Router();
const { User, Cosplay } = require("../../models");

// CREATE new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log(userData);
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    //if user exists does password matchMedia, if it doesnt match error message
    const validPassword = await userData.checkPassword(req.body.password);
    console.log(validPassword);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    //saves user id and saves login status to true
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post("/create", async (req, res) => {
  console.log('hellos scfb');
  try {
    const dbCosplayData = await Cosplay.create({
      name: req.body.name,
      description: req.body.description,
      user_id: req.session.user_id,
    });

      res.redirect("/profile");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
