import { useEffect, useState } from 'react'
import './App.css'
import { Todoprovider } from './context/ToDoContext'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
        setTodos((old) => [...old, {id: Date.now(), ...todo}]);
  }

  const updateTodo = (id, todo) => {
        setTodos((old) => old.map((oldTodo) => (oldTodo.id === id ? todo : oldTodo) ) )

        // old.map((eachVal) => {
        //   if (eachVal.id === id) {
        //     todo
        //   } else {
        //     oldTodo
        //   }
        // })
  }

  const deleteTodo = (id) => {
    setTodos((old) => old.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((old) => old.map((oldTodo) => oldTodo === id ? {...oldTodo, completed: !oldTodo.completed} : oldTodo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



   return (
    <Todoprovider value={{addTodo, deleteTodo, updateTodo, toggleComplete, todos}}>
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>    
            </Todoprovider>
  )
}

export default App
