import express from "express";

export const server:express.Express = express();

server.get("/", (req, res) => {
  res.status(200).send("Yey, your on express!");
});

server.get("/users", (req, res) => {
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
