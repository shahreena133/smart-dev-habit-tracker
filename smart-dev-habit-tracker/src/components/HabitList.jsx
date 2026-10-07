import HabitCard from "./HabitCard";

function HabitList({ habits, setHabits }) {
  return (
    <section>
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-slate-900">
          Your Habits & Tasks
        </h2>

        <p className="mt-1 text-sm text-black">
          Stay consistent and keep track of your daily progress.
        </p>
      </div>

      {habits.length === 0 ? (
        <div className="rounded-xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
          <p className="font-medium text-black">
            No habits added yet.
          </p>

          <p className="mt-1 text-sm text-black">
            Add a new habit using the form above.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {habits.map((habit) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              setHabits={setHabits}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default HabitList;