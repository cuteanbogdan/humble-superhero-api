import { body, ValidationChain, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validateSuperhero: ValidationChain[] = [
  body("name").notEmpty().withMessage("Name is required."),
  body("superpower").notEmpty().withMessage("Superpower is required."),
  body("humilityScore")
    .isInt({ min: 1, max: 10 })
    .withMessage("Humility score must be an integer between 1 and 10."),
];

// Middleware to handle validation errors
export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  next();
};
