import { useState } from "react";

function HabitCard({ habit, setHabits, showToast }) {
 const [showDeleteModal, setShowDeleteModal] = useState(false); 
  const [isEditing, setIsEditing] = useState(false);
  const [editError, setEditError] = useState("");
  const [editTitle, setEditTitle] = useState(habit.title);
  const [editMinutes, setEditMinutes] = useState(habit.targetMinutes);
  const [editCategory, setEditCategory] = useState(habit.category);

  const handleToggleComplete = () => {
    setHabits((currentHabits) =>
      currentHabits.map((item) =>
        item.id === habit.id
          ? {
              ...item,
              completed: !item.completed,
              streak: item.completed
                ? Math.max(0, item.streak - 1)
                : item.streak + 1,
            }
          : item
      )
    );
    showToast(
  habit.completed
    ? "Habit marked as incomplete."
    : "Habit completed successfully!"
);
  };

  const handleDelete = () => {
  setShowDeleteModal(true);
};

const confirmDelete = () => {
  setHabits((currentHabits) =>
    currentHabits.filter((item) => item.id !== habit.id)
  );
showToast("Habit deleted successfully!");
  setShowDeleteModal(false);
};

const cancelDelete = () => {
  setShowDeleteModal(false);
};

  const handleSaveEdit = () => {
    if (!editTitle.trim()) {
  setEditError("Habit title cannot be empty.");
  return;
}

if (!editMinutes || Number(editMinutes) <= 0) {
  setEditError("Target minutes must be greater than 0.");
  return;
}

if (!editCategory) {
  setEditError("Please select a category.");
  return;
}

setEditError("");

    setHabits((currentHabits) =>
      currentHabits.map((item) =>
        item.id === habit.id
          ? {
              ...item,
              title: editTitle.trim(),
              targetMinutes: Number(editMinutes),
              category: editCategory,
            }
          : item
      )
    );

    setIsEditing(false);
    showToast("Habit updated successfully!");
  };

  const handleCancelEdit = () => {
    setEditTitle(habit.title);
    setEditMinutes(habit.targetMinutes);
    setEditCategory(habit.category);
    setIsEditing(false);
  };

  return (
    <>
   <article
  className="rounded-xl bg-[#C8D9E6] p-5 shadow-sm ring-1 ring-[#000000]"
>
      {isEditing ? (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-black">
            Edit Habit
          </h3>

<label className="text-sm font-medium text-black">
  Habit Title
</label>

          <input
            type="text"
            value={editTitle}
            onChange={(event) => setEditTitle(event.target.value)}
            className="w-full rounded-lg border border-[#2F4156] bg-white px-4 py-2 text-black outline-none focus:border-[#567C8D]"
          />

          {editError === "Habit title cannot be empty." && (
  <p className="text-sm text-red-600">
    {editError}
  </p>
)}

<label className="text-sm font-medium text-black">
  Target Minutes
</label>

          <input
            type="number"
            min="1"
            value={editMinutes}
            onChange={(event) => setEditMinutes(event.target.value)}
            className="w-full rounded-lg border border-[#2F4156] bg-white px-4 py-3 text-black outline-none focus:border-[#567C8D]"
          />

          {editError === "Target minutes must be greater than 0." && (
  <p className="text-sm text-red-600">
    {editError}
  </p>
)}

<label className="text-sm font-medium text-black">
  Category
</label>

          <select
            value={editCategory}
            onChange={(event) => setEditCategory(event.target.value)}
            className="w-full rounded-lg border border-[#2F4156] bg-white px-4 py-2 text-black outline-none focus:border-[#567C8D]"
          >
            <option value="Coding">Coding</option>
            <option value="Health">Health</option>
            <option value="Reading">Reading</option>
            <option value="Career">Career</option>
          </select>

          {editError === "Please select a category." && (
  <p className="text-sm text-red-600">
    {editError}
  </p>
)}

          <div className="flex gap-2">
            <button
              onClick={handleSaveEdit}
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
            >
              Save
            </button>

            <button
              onClick={handleCancelEdit}
              className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-black hover:bg-slate-200"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <span className="rounded-full bg-[#C8D9E6] px-3 py-1 text-xs font-medium text-[#030303]">
                {habit.category}
              </span>

              <h3
                className={`mt-3 text-lg font-bold ${
                  habit.completed
                    ? "text-slate-400 line-through"
                    : "text-black"
                }`}
              >
                {habit.title}
              </h3>
            </div>

            <span className="text-sm font-medium text-black">
              Streak: {habit.streak}
            </span>
          </div>

          <p className="mb-5 text-sm text-black">
            Target: {habit.targetMinutes} minutes
          </p>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleToggleComplete}
              className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                habit.completed
                  ? "bg-slate-200 text-slate-700 hover:bg-slate-300"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              {habit.completed ? "Undo" : "Complete"}
            </button>

            <button
              onClick={() => setIsEditing(true)}
              className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-black hover:bg-slate-200"
            >
              Edit
            </button>

            <button
              onClick={handleDelete}
              className="rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-100"
            >
              Delete
            </button>
          </div>
        </>
      )}

</article>

    {showDeleteModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
        <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
          <h2 className="text-xl font-bold text-black">
            Delete Habit?
          </h2>

          <p className="mt-2 text-sm text-black">
            Are you sure you want to delete "{habit.title}"?
            This action cannot be undone.
          </p>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={cancelDelete}
              className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-black hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={confirmDelete}
              className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    )}
  </>
);
}

export default HabitCard;