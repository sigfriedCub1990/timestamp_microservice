import supertest from "supertest";

import app from "../../src/app";

describe("when user requests /api endpoint", () => {
  it("should return JSON with today's date", async () => {
    const response = await supertest(app).get("/api");

    expect(response.body).toMatchObject({
      unix: expect.any(Number),
      utc: expect.any(String),
    });
  });

  it("should return with status code 200", async () => {
    const response = await supertest(app).get("/api");

    expect(response.statusCode).toBe(200);
  });
});

describe("when users request /api/:date endpoint", () => {
  describe("given a valid date parameter", () => {
    it("should return JSON with date in UTC format and its unix timestamp", async () => {
      const response = await supertest(app).get("/api/04-27-2023");

      expect(response.body).toMatchObject({
        unix: 1682575200000,
        utc: "Thu, 27 Apr 2023 06:00:00 GMT",
      });
    });

    it("should return JSON with date in UTC format and its unix timestamp", async () => {
      const response = await supertest(app).get("/api/2016-12-25");

      expect(response.body).toMatchObject({
        unix: 1482624000000,
        utc: "Sun, 25 Dec 2016 00:00:00 GMT",
      });
    });

    it("should return JSON with date in UTC format and its unix timestamp", async () => {
      const response = await supertest(app).get("/api/05 October 2011, GMT");

      expect(response.body).toMatchObject({
        unix: 1317772800000,
        utc: "Wed, 05 Oct 2011 00:00:00 GMT",
      });
    });

    it("should return with status code 200", async () => {
      const response = await supertest(app).get("/api");

      expect(response.statusCode).toBe(200);
    });
  });

  describe("given a valid unix timestamp parameter", () => {
    it("should return JSON with date in UTC format and its unix timestamp", async () => {
      const response = await supertest(app).get("/api/1682575200000");

      expect(response.body).toMatchObject({
        unix: 1682575200000,
        utc: "Thu, 27 Apr 2023 06:00:00 GMT",
      });
    });

    it("should return with status code 200", async () => {
      const response = await supertest(app).get("/api");

      expect(response.statusCode).toBe(200);
    });
  });

  describe("given an invalid date parameter", () => {
    it("should return JSON with an error message", async () => {
      const response = await supertest(app).get("/api/gibberish");

      expect(response.body).toMatchObject({
        error: "Invalid date",
      });
    });

    it("should return status code 422 (Unprocessable Entity)", async () => {
      const response = await supertest(app).get("/api/gibberish");

      expect(response.statusCode).toBe(422);
    });
  });

  describe("given an invalid unix timestamp parameter", () => {
    it("should return JSON with an error message", async () => {
      const response = await supertest(app).get("/api/gibberish");

      expect(response.body).toMatchObject({
        error: "Invalid date",
      });
    });

    it("should return JSON with an error message", async () => {
      const response = await supertest(app).get("/api/1234");

      expect(response.body).toMatchObject({
        error: "Invalid date",
      });
    });

    it("should return status code 422 (Unprocessable Entity)", async () => {
      const response = await supertest(app).get("/api/gibberish");

      expect(response.statusCode).toBe(422);
    });
  });
});
