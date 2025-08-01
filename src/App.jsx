import { useState } from 'react'

import './App.css'
import { Todoprovider } from './context';
import { useEffect } from 'react';
import { use } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
 const [todos, setTodos]=useState([]);


const addTodo=(todo)=>{
setTodos((prev)=>[...prev, {id: Date.now(), ...todo}])
 }
 const deleteTodo=(id)=>{

  setTodos((prev)=> prev.filter((prevTodo)=>prevTodo.id !== id ))

 }
 ///edited
 const updateTodo=(id, todo)=>{
setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? todo:prevTodo)))
 }
 ///prevTodo.id
 const toggleComplete=(id)=>{
setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id  ? {...prevTodo, completed : !prevTodo.completed}:prevTodo))
 }

useEffect(()=>{
const todos= JSON.parse(localStorage.getItem("todos"));
//console.log(todos)

if(todos && todos.length>0 ){
setTodos(todos)
}
}, [])


useEffect(() => {
localStorage.setItem("todos",JSON.stringify(todos))
}, [todos])


  return (
    <Todoprovider value={{todos,addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id}
                          className='w-full'
                          >
                           <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
