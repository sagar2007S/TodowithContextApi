<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# TodowithContextApi
It's a todo application which has been made using React, and for additional complexity, I have used the  context API to inject a global component into different components in the application without prop drilling. It was a fun Project to make, and I have learned how the context API works in React 
# 📝 React Todo List App using Context API

A simple and efficient Todo List application built using **React** and **Context API** for state management. This app allows users to add, view, and manage their daily tasks with a clean UI and persistent local storage support.

---

## 🚀 Features

- ✅ Add new todos
- ✅ Delete existing todos
- ✅ Mark todos as complete/incomplete
- ✅ Centralized state management using React Context API
- ✅ Persistent data using localStorage
- ✅ Clean and minimal UI

---

## 📂 Folder Structure

src/
│
├── components/
│ ├── index.js
│ ├── TodoForm.jsx
│ └── TodoItem.jsx
│
├── context/
| ├── index.js
│ └── TodoContext.js
│
├── App.jsx
└── index.js




---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- Context API
- JavaScript (ES6+)
- Tailwind
- localStorage

---

## 🧠 How Context Works in This App

1. `TodoContext` holds the shared state (todos) and functions (`addTodo`, `removeTodo`, etc.).
2. Components like `TodoForm` and `TodoItem` consume this context using `useContext`.
3. This avoids prop drilling and keeps the state logic in one place.

---

🙋‍♂️ Author
Sagar Baryekar
https://www.linkedin.com/in/sagar-baryekar-a3a839339/
https://github.com/sagar2007S

>>>>>>> b2e5ab14de204dbc814f03dcbd99c3e5772951cd
