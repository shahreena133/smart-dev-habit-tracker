# Smart Dev Habit & Task Tracker

A responsive client-side React application built with Tailwind CSS to help developers manage daily habits and tasks, track focus time, maintain streaks, and monitor productivity statistics.

## Features

- Add new habits and tasks
- Set target focus minutes
- Select a category for each habit
- View habits in responsive cards
- Edit habit details inline
- Mark habits as complete or undo completion
- Automatically update streak counts
- Delete habits with confirmation
- Calculate overall completion percentage
- Calculate cumulative focus minutes
- Display total habits
- Display total streak
- Responsive design with Tailwind CSS
- Fully client-side with React state
- No backend, database, or authentication required

## CRUD Operations

- **Create:** Add new habits and tasks
- **Read:** Display all habits and tasks
- **Update:** Edit habit details and toggle completion
- **Delete:** Remove habits from the application state

## Statistics

The application uses JavaScript array methods to calculate productivity statistics:

- `filter()` — calculates completed habits
- `reduce()` — calculates total focus minutes
- `reduce()` — calculates total streak

## Categories

The available habit categories are:

- Coding
- Health
- Reading
- Career

## Tech Stack

- React.js
- Tailwind CSS
- JavaScript
- Vite
- React Hooks

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Stats.jsx
│   ├── HabitForm.jsx
│   ├── HabitCard.jsx
│   └── HabitList.jsx
├── App.jsx
├── index.css
└── main.jsx

## Live Preview

[View Live Demo](https://shahreena133.github.io/smart-dev-habit-tracker/)
