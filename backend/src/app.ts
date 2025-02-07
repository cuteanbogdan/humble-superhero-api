import express, { Application, Request, Response } from "express";
import superheroRoutes from "./routes/superheroRoutes";
import cors from "cors";

const app: Application = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

app.use("/api/v1", superheroRoutes);

app.get("/test", (req: Request, res: Response) => {
  res.send("Testing Superhero API");
});

export default app;
