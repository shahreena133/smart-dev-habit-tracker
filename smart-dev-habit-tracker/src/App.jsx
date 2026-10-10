import { useState } from "react";

import Header from "./components/Header";
import Stats from "./components/Stats";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

function App() {
 const [habits, setHabits] = useState([
  {
    id: 1711195840001,
    title: "Practice Coding",
    targetMinutes: 45,
    category: "Coding",
    completed: false,
    streak: 0,
  },
  {
    id: 1711195840002,
    title: "Reading a Book",
    targetMinutes: 30,
    category: "Reading",
    completed: false,
    streak: 0,
  },
  {
    id: 1711195840003,
    title: "Going for a Walk",
    targetMinutes: 30,
    category: "Health",
    completed: false,
    streak: 0,
  },
  {
    id: 1711195840004,
    title: "Journal",
    targetMinutes: 15,
    category: "Reading",
    completed: false,
    streak: 0,
  },
  {
    id: 1711195840005,
    title: "Plan Tomorrow's Goals",
    targetMinutes: 15,
    category: "Career",
    completed: false,
    streak: 0,
  },
  {
    id: 1711195840006,
    title: "Work on GitHub Project",
    targetMinutes: 45,
    category: "Career",
    completed: false,
    streak: 0,
  },
]);

const [toast, setToast] = useState("");

const showToast = (message) => {
  setToast(message);

  setTimeout(() => {
    setToast("");
  }, 3000);
};

  return (
  <div className="min-h-screen bg-white text-[#000000]">
    {toast && (
      <div
        role="status"
        className="fixed right-5 top-5 z-50 rounded-lg bg-green-600 px-5 py-3 font-medium text-white shadow-lg"
      >
        {toast}
      </div>
    )}

    <Header />
    
      <main className="mx-auto max-w-7xl px-6 py-8">
        <Stats habits={habits} />

    <HabitForm setHabits={setHabits} showToast={showToast} />

     <HabitList
  habits={habits}
  setHabits={setHabits}
  showToast={showToast}
/>
      </main>
    </div>
  );
}

export default App;
