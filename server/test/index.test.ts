import request from "supertest";
import { server } from "../application";

describe("/", () => {
  test("It should return status 200", done => {
    request(server)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);

        done();
      });
  });
});
