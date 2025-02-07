import { Router, Request, Response } from "express";
import {
  handleValidationErrors,
  validateSuperhero,
} from "../validation/validateSuperheroes";

const router = Router();

interface Superhero {
  name: string;
  superpower: string;
  humilityScore: number;
}

// In-memory DB for superheros
const superheroes: Superhero[] = [];

// POST /superheroes - Add a new superhero
router.post(
  "/superheroes",
  validateSuperhero,
  handleValidationErrors,
  (req: Request, res: Response) => {
    const { name, superpower, humilityScore } = req.body;

    const newHero: Superhero = { name, superpower, humilityScore };
    superheroes.push(newHero);

    res.status(201).json({ message: "Superhero added", superhero: newHero });
    return;
  }
);

// GET /superheroes - Fetch the list sorted by humility score
router.get("/superheroes", (req: Request, res: Response) => {
  // Copy the superheroes array
  const sortedHeroes = [...superheroes].sort(
    (a, b) => b.humilityScore - a.humilityScore // Sort descending order
  );
  res.status(200).json(sortedHeroes);
  return;
});

export default router;
