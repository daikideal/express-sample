import express from 'express';

const server:express.Express = express();

const port:number = 8080;
server.listen(port, () => {
  console.log(`Start Express server on tcp:${port}...`);
});

server.get("/", (req, res) => {
  console.log("request served.");

  res.status(200).send("Yey, your on express!");
});
