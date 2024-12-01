const request = require("supertest")
const app = require("../app")

describe("GET /api/albums", () => {
  it('200: should respond with an array of the top 100 albums', () => {
    return request(app)
      .get("/api/albums")
      .expect(200)
      .then(({ body }) => {
      console.log(body);
    })
  });
})