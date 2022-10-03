import request from "supertest";
import { server } from "../application";

describe("/users", () => {
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
