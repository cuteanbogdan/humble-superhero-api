"use client";

import { useState } from "react";
import axios from "axios";
import useSWR from "swr";

export default function SuperheroForm() {
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humilityScore, setHumilityScore] = useState("");

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { mutate } = useSWR(
    "http://localhost:5000/api/v1/superheroes",
    fetcher
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !superpower || !humilityScore) {
      alert("All fields are required!");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/v1/superheroes", {
        name,
        superpower,
        humilityScore: Number(humilityScore),
      });

      setName("");
      setSuperpower("");
      setHumilityScore("");
      mutate();
    } catch (error: any) {
      alert(error.response?.data.errors[0]?.msg || "Error adding superhero");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-md"
    >
      <h2 className="text-xl font-bold text-white mb-4">Add a Superhero</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-3 rounded bg-gray-700 text-white border border-gray-600"
      />
      <input
        type="text"
        placeholder="Superpower"
        value={superpower}
        onChange={(e) => setSuperpower(e.target.value)}
        className="w-full p-2 mb-3 rounded bg-gray-700 text-white border border-gray-600"
      />
      <input
        type="number"
        placeholder="Humility Score (1-10)"
        value={humilityScore}
        onChange={(e) => setHumilityScore(e.target.value)}
        className="w-full p-2 mb-3 rounded bg-gray-700 text-white border border-gray-600"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Add Superhero
      </button>
    </form>
  );
}
