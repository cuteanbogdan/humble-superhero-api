# Superhero API

This is a full-stack application built with **Next.js (Frontend)** and **Express.js (Backend)** to manage superheroes.
Users can **add superheroes** with their **name, superpower, and humility score**, and **view all superheroes sorted by humility**.

---

## TECHNOLOGIES USED

Frontend (Next.js + Tailwind CSS)

- Next.js: React-based framework.
- Tailwind CSS: For styling.
- SWR (Stale-While-Revalidate): For data fetching and caching.
- Axios: To handle HTTP requests.
- TypeScript: Ensures type safety.

Backend (Express + Node.js)

- Express.js: Lightweight backend framework.
- Jest & Supertest: Testing framework for API endpoints.
- Express Validator: Middleware for request validation.
- TypeScript: Ensures a strongly typed backend.

---

## HOW TO RUN THE PROJECT

## 1️⃣ Clone the Repository

git clone https://github.com/cuteanbogdan/humble-superhero-api.git <br />
cd humble-superhero-api

## 2️⃣ Setup Backend

Navigate to the `backend/` folder and install dependencies: <br />
cd backend <br />
npm install

Run the backend:
npm run dev

Backend runs at **http://localhost:5000**.

## 3️⃣ Setup Frontend

Navigate to the `frontend/` folder and install dependencies: <br />
cd ../frontend/superhero-app <br />
npm install

Run the frontend:
npm run dev

Frontend runs at **http://localhost:3000**.

---

## API ENDPOINTS

## POST /api/v1/superheroes

- Adds a new superhero.
- Request Body:
  {
  "name": "Iron Man",
  "superpower": "Power Armor",
  "humilityScore": 9
  }
- Response:
  {
  "message": "Superhero added",
  "superhero": {
  "name": "Iron Man",
  "superpower": "Power Armor",
  "humilityScore": 9
  }
  }

## GET /api/v1/superheroes

- Returns a **sorted list of superheroes** by humility score.
- Example Response:
  [
  { "name": "Iron Man", "superpower": "Power Armor", "humilityScore": 9 },
  { "name": "Superman", "superpower": "Flight", "humilityScore": 8 }
  ]

---

## TESTING

To run backend tests: <br />
cd backend
npm test

Tests include: <br />
✔️ Adding superheroes  
✔️ Fetching superheroes in sorted order

---

## IMAGE PREVIEW

![Superhero App Preview](https://github.com/cuteanbogdan/humble-superhero-api/blob/master/Superhero.PNG)

---

## TEAM PLAYER ATTITUDE

If working with a teammate:

- **Code Reviews:** I’d regularly review PRs to ensure consistency.
- **Pair Programming:** If needed, I'd work alongside my teammate on tricky parts.
- **Git Best Practices:** Use feature branches (e.g., `feature/add-validation`) for clean PRs.
- **Agile Practices:** Follow Agile (Scrum/Kanban) for structured work.
- **Documentation:** Always keep API docs & comments updated for smooth handovers.

---

## IF I HAD MORE TIME

If I had extra time, I would:

- **Full CRUD**: Add full CRUD operations (update & delete).
- **Database Support**: Replace in-memory storage with MongoDB or PostgreSQL.
- **Authentication**: Add JWT-based authentication for user-specific superheroes.
- **Pagination & Filtering**: Handle large superhero lists efficiently.
- **Docker Support**: Containerize both frontend & backend for better deployment.

---
