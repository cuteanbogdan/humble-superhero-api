"use client";

import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function SuperheroList() {
  const { data: superheroes, error } = useSWR(
    "http://localhost:5000/api/v1/superheroes",
    fetcher
  );

  if (error) return <p className="text-red-500">Failed to load superheroes</p>;
  if (!superheroes)
    return <p className="text-gray-400">Loading superheroes...</p>;

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-md mt-4">
      <h2 className="text-xl font-bold text-white mb-4">Superhero List</h2>
      <ul className="text-white">
        {superheroes.length === 0 ? (
          <p>No superheroes added yet.</p>
        ) : (
          superheroes.map((hero: any) => (
            <li key={hero.id} className="border-b border-gray-600 py-2">
              <strong>{hero.name}</strong> - {hero.superpower} (Humility:{" "}
              {hero.humilityScore})
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
