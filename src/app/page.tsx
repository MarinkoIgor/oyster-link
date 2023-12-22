import { Jobs } from "@/components/Jobs";
import { Heading } from "@/components/Heading";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Heading />
      <div className="bg-gray-100 flex-grow">
        <Jobs />
      </div>
    </main>
  );
}
