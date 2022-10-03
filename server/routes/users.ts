import express from "express";

const router:express.Router = express.Router();

router.get("/", (req, res) => {
  type User = {name: string, email: string};

  let users:Array<User> = [
    {name: "George", email: "george@example.com"},
    {name: "Fred", email: "fred@example.com"},
  ];

  if (req.query.name) {
    users = users.filter(user => user.name == req.query.name);
  }

  res.status(200);
  res.json(users);
});

module.exports = router;
