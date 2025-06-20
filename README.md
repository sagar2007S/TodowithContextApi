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

