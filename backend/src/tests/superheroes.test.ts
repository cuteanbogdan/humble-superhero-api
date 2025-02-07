import request from "supertest";
import app from "../app";

describe("Superheroes API", () => {
  it("should create a new superhero", async () => {
    const newHero = {
      name: "Thor",
      superpower: "Lightning",
      humilityScore: 7,
    };

    const response = await request(app)
      .post("/api/v1/superheroes")
      .send(newHero)
      .expect(201);

    expect(response.body).toHaveProperty("message", "Superhero added");
    expect(response.body).toHaveProperty("superhero");
    expect(response.body.superhero).toHaveProperty("name", newHero.name);
    expect(response.body.superhero).toHaveProperty(
      "superpower",
      newHero.superpower
    );
    expect(response.body.superhero).toHaveProperty(
      "humilityScore",
      newHero.humilityScore
    );
  });

  it("should return all superheroes sorted by humility score", async () => {
    const response = await request(app).get("/api/v1/superheroes").expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);

    // Ensure sorted by humilityScore
    for (let i = 1; i < response.body.length; i++) {
      expect(response.body[i - 1].humilityScore).toBeLessThanOrEqual(
        response.body[i].humilityScore
      );
    }
  });
});
