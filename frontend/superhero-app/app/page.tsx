import SuperheroForm from "@/components/SuperheroForm";
import SuperheroList from "@/components/SuperheroList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Superhero Tracker</h1>
      <SuperheroForm />
      <SuperheroList />
    </div>
  );
}
