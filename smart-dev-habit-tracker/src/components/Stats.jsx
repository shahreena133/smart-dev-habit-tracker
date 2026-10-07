function Stats({ habits }) {
  const completedHabits = habits.filter((habit) => habit.completed).length;

  const totalFocusMinutes = habits.reduce(
    (total, habit) => total + habit.targetMinutes,
    0
  );

  const completionPercentage =
    habits.length === 0
      ? 0
      : Math.round((completedHabits / habits.length) * 100);

  const totalStreak = habits.reduce(
    (total, habit) => total + habit.streak,
    0
  );

  return (
    <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
     <div className="mb-8 rounded-xl bg-[#C8D9E6] p-6 shadow-sm ring-1 ring-[#2F4156]">
        <p className="text-sm text-[#000000]">Completion</p>
        <h2 className="mt-2 text-3xl font-bold text-[#000000]">
          {completionPercentage}%
        </h2>
      </div>

      <div className="mb-8 rounded-xl bg-[#C8D9E6] p-6 shadow-sm ring-1 ring-[#2F4156]">
        <p className="text-sm text-[#000000]">Focus Minutes</p>
        <h2 className="mt-2 text-3xl font-bold text-[#000000]">
          {totalFocusMinutes}
        </h2>
      </div>

      <div className="mb-8 rounded-xl bg-[#C8D9E6] p-6 shadow-sm ring-1 ring-[#2F4156]">
        <p className="text-sm text-[#000000]">Total Habits</p>
        <h2 className="mt-2 text-3xl font-bold text-[#000000]">
          {habits.length}
        </h2>
      </div>

      <div className="mb-8 rounded-xl bg-[#C8D9E6] p-6 shadow-sm ring-1 ring-[#2F4156]">
        <p className="text-sm text-[#000000]">Total Streak</p>
        <h2 className="mt-2 text-3xl font-bold text-[#000000]">
          {totalStreak}
        </h2>
      </div>
    </section>
  );
}

export default Stats;
