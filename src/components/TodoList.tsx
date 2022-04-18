import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import { TodoState } from '../util/TodoState'
import { RootState } from '../app/store'

function TodoList({ setItemId }: any) {
  const todoListAll = useSelector((state: RootState) => state.todos)
  const filter = useSelector((state: RootState) => state.filters)

  let list = todoListAll
  if (filter === 'active')
    list = todoListAll.filter((item) => item.completed === false)
  else if (filter === 'completed')
    list = todoListAll.filter((item) => item.completed === true)
  return (
    <div className="w-[650px] mx-auto mt-10">
      {list.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          completed={item.completed}
          id={item.id}
        />
      ))}
    </div>
  )
}

export default TodoList
