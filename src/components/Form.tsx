import React, { useState } from 'react'
import { PlusIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/todo/todoSlice'
import { toggleFilters } from '../features/todo/filterSlice'

function Form() {
  const dispatch = useDispatch()
  const [textTodo, setTextTodo] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!textTodo.trim()) return
    dispatch(addItem(textTodo))
    setTextTodo('')
  }

  const handleFilter = (e: any) => {
    dispatch(toggleFilters(e.target.value))
  }
  return (
    <div>
      <form
        className="flex justify-center mt-16 items-center"
        onSubmit={handleSubmit}
      >
        <input
          value={textTodo}
          onChange={(e) => setTextTodo(e.target.value)}
          type="text"
          className="text-4xl rounded-l-md p-2"
        />
        <button type="submit" className="bg-white rounded-r-md">
          <PlusIcon className="w-8 text-white bg-red-500 m-3" />
        </button>
        <div className="ml-6 text-md text-red-600">
          <select
            onChange={handleFilter}
            name="todos"
            className="p-3 rounded-xl"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Form
