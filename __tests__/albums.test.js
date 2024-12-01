const request = require("supertest");
const app = require("../app");

describe("GET /api/albums", () => {
  it("200: should respond with an array of the top 100 albums", () => {
    return request(app)
      .get("/api/albums")
      .expect(200)
      .then(({ body }) => {
        const albums = body.albums;
        albums.forEach((album) => {
          expect(typeof album.artistName).toBe("string");
          expect(typeof album.id).toBe("string");
          expect(typeof album.name).toBe("string");
          expect(typeof album.releaseDate).toBe("string");
          expect(album.kind).toEqual("albums");
          if (album.artistName === "Various Artists") {
            expect(album.artistId).toBeUndefined();
            expect(album.artistUrl).toBeUndefined();
          } else {
            expect(typeof album.artistId).toBe("string");
            expect(typeof album.artistUrl).toBe("string");
          }
          expect(typeof album.artworkUrl100).toBe("string");
          expect(Array.isArray(album.genres)).toBe(true);
          expect(typeof album.url).toBe("string");
        });
        console.log(albums.length);
      });
  });
});
