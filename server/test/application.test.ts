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

describe("/user", () => {
  test("It should return all users", done => {
    request(server)
      .get("/users")
      .then(response => {
        expect(response.body).toEqual(
          [
            {name: "George", email: "george@example.com"},
            {name: "Fred", email: "fred@example.com"},
          ],
        );

        done();
      });
  });

  test("It should return only correct users", done => {
    request(server)
      .get("/users")
      .query({name: "Fred"})
      .then(response => {
        expect(response.body).toEqual(
          [
            {name: "Fred", email: "fred@example.com"},
          ],
        );

        done();
      });
  });
});
