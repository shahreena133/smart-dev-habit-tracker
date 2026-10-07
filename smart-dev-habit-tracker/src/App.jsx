import { useState } from "react";

import Header from "./components/Header";
import Stats from "./components/Stats";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

function App() {
 const [habits, setHabits] = useState([
  {
    id: 1,
    title: "Practice Coding",
    targetMinutes: 45,
    category: "Coding",
    completed: false,
    streak: 0,
  },
  {
    id: 2,
    title: "Reading a Book",
    targetMinutes: 30,
    category: "Reading",
    completed: false,
    streak: 0,
  },
  {
    id: 3,
    title: "Going for a Walk",
    targetMinutes: 30,
    category: "Health",
    completed: false,
    streak: 0,
  },
  {
    id: 4,
    title: "Journal",
    targetMinutes: 15,
    category: "Reading",
    completed: false,
    streak: 0,
  },
  {
    id: 5,
    title: "Plan Tomorrow's Goals",
    targetMinutes: 15,
    category: "Career",
    completed: false,
    streak: 0,
  },
  {
    id: 6,
    title: "Work on GitHub Project",
    targetMinutes: 45,
    category: "Career",
    completed: false,
    streak: 0,
  },
]);

  return (
    <div className="min-h-screen bg-white text-[#000000]">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <Stats habits={habits} />

        <HabitForm setHabits={setHabits} />

        <HabitList habits={habits} setHabits={setHabits} />
      </main>
    </div>
  );
}

export default App;
