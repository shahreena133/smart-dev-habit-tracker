function HabitForm({ setHabits }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const newHabit = {
      id: Date.now(),
      title: form.title.value,
      targetMinutes: Number(form.targetMinutes.value),
      category: form.category.value,
      completed: false,
      streak: 0,
    };

    setHabits((currentHabits) => [...currentHabits, newHabit]);

    form.reset();
  };

  return (
    <section className="mb-8 rounded-xl bg-[#C8D9E6] p-6 shadow-sm ring-1 ring-[#2F4156]">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-[#000000]">
          Add New Habit / Task
        </h2>

        <p className="mt-1 text-sm text-[#000000]">
          Add a habit or task you want to work on consistently.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 md:grid-cols-4"
      >
        <input
          name="title"
          type="text"
          placeholder="Habit or task name"
          required
          className="rounded-lg border border-[#000000] bg-white px-4 py-3 outline-none placeholder:text-[#000000] focus:border-[#000000]"
        />

        <input
          name="targetMinutes"
          type="number"
          min="1"
          placeholder="Target minutes"
          required
          className="rounded-lg border border-[#000000] bg-white px-4 py-3 outline-none placeholder:text-[#000000] focus:border-[#000000]"
        />

        <select
          name="category"
          required
          className="rounded-lg border border-[#000000] bg-white px-4 py-3 outline-none placeholder:text-[#000000] focus:border-[#000000]"
        >
          <option value="">Select category</option>
          <option value="Coding">Coding</option>
          <option value="Health">Health</option>
          <option value="Reading">Reading</option>
          <option value="Career">Career</option>
        </select>

        <button
          type="submit"
          className="rounded-lg bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-700"
        >
          Add Habit
        </button>
      </form>
    </section>
  );
}

export default HabitForm;
