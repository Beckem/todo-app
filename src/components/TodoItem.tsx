import React, { useState } from 'react'
import { TodoState } from '../util/TodoState'
import { TrashIcon, CheckIcon, PencilAltIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'
import { deleteItem, editItem, toggleItem } from '../features/todo/todoSlice'
import Modal from 'react-modal'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}
Modal.setAppElement('#root')
function TodoItem({ id, completed, text }: TodoState) {
  const [textEdit, setTextEdit] = useState(text)
  const dispatch = useDispatch()
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false)
  }

  const handleToggleItem = () => {
    dispatch(toggleItem({ id, completed, text }))
  }
  const handleEditItem = () => {
    if (textEdit.trim() === '') return
    dispatch(editItem({ id, completed, text, textEdit }))
    closeModal()
  }

  const handleDeleteItem = () => {
    dispatch(deleteItem({ id, completed, text }))
  }

  return (
    <div
      className={`list-none flex mt-4 ${
        completed ? 'opacity-50' : ''
      } transition ease-in-out duration-400`}
    >
      <li
        className={`min-w-[480px] bg-white p-2 text-xl font-semibold ${
          completed ? 'line-through' : ''
        } transition ease-in-out duration-400`}
      >
        {text}
      </li>
      <button onClick={handleToggleItem} className="">
        <CheckIcon className="bg-[#0bd4a2] w-full text-white" />
      </button>
      <button onClick={openModal} className="">
        <PencilAltIcon className="bg-[#4bb543] w-full text-white" />
      </button>
      <button onClick={handleDeleteItem} className="">
        <TrashIcon className="bg-[#ff6f47] w-full text-white" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1>Edit Todo Item</h1>
        <hr />
        <input
          value={textEdit}
          type="text"
          className="text-4xl rounded-l-md p-2"
          onChange={(e) => setTextEdit(e.target.value)}
        />
        <button
          className="bg-lime-300 px-4 py-2 rounded-md ml-2"
          onClick={handleEditItem}
        >
          Edit
        </button>
      </Modal>
    </div>
  )
}

export default TodoItem
