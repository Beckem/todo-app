import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import logo from './logo.svg'
import './App.css'
import { RootState } from './app/store'
import {} from './features/todo/todoSlice'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  //const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="bg-orange-300 h-screen overflow-hidden">
      <h1 className="text-white font-bold text-6xl text-center mt-12">
        TODOS LIST
      </h1>
      <Form />

      <TodoList />
    </div>
  )
}

export default App
