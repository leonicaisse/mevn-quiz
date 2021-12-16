const request = require("supertest");
const app = require("../app");

describe("Test the pages paths", () => {
    it("should respond with 200 status code", async () => {
        const response = await request(app).get("/pages");
        expect(response.statusCode).toBe(200);
    });
});