import request from "supertest";
import "@babel/polyfill";
import app from "./app.js";

describe("app", () => {
  let locations;
  beforeEach(() => {
    locations = [
      {
        ficName: "Metropolis",
        realName: "New York City",
        id: 0,
        lat: 40.7128,
        long: -74.006,
        cat: "DC",
        reason: "Ipso Lorum"
      },
      {
        ficName: "Wakanda",
        realName: "Democratic Republic of the Congo",
        id: 1,
        lat: 4.8594,
        long: 31.5713,
        cat: "Marvel",
        reason: "Ipso Lorum"
      }
    ];
    app.locals.locations = locations;
  });
  describe("get/api/v1/locations", () => {
    it("should return a 200 status and an array of locations", async () => {
      const response = await request(app).get("/api/v1/locations");
      expect(response.status).toBe(200);
      expect(response.body).toEqual(app.locals.locations);
    });
  });
});
