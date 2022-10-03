import express from "express";

export const server:express.Express = express();

server.use("/",      require("./routes/index"));
server.use("/users", require("./routes/users"));
