import { server } from "../application"

const port:number = 8080;
server.listen(port, () => {
  console.log(`Start Express server on tcp:${port}...`);
});
