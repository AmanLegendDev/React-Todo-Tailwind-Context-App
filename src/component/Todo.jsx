import React, { useState, useContext, createContext } from 'react';
import { Link } from 'react-router-dom'

export const MyContext = createContext(null)

const Todo = () => {
  const { tasks, settasks } = useContext(MyContext)
  const [tasktitle, settasktitle] = useState("")

  const handlechange = (e) => {
    settasktitle(e.target.value)
  };

  const handlesubmit = (e) => {
    e.preventDefault()
    if (tasktitle.trim() === "") return;
    const newarry = { id: Date.now().toString(), tasks: tasktitle }
    settasks((prevTasks) => [...prevTasks, newarry]);
    settasktitle("")
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-emerald-50">
      <div className="p-8 border-4 border-indigo-500 rounded-3xl shadow-2xl bg-white mt-8 min-w-[350px] w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-8 text-center drop-shadow">The Todo App</h1>
        <form onSubmit={handlesubmit} className="flex flex-col gap-4">
          <div className="flex gap-2">
            <input
              type='text'
              placeholder='Enter Task'
              className='border-2 focus:border-indigo-600 outline-none w-full rounded-lg px-4 py-2 transition bg-gray-50 shadow-inner'
              onChange={handlechange}
              value={tasktitle}
            />
            <button type='submit' className='bg-emerald-500 hover:bg-emerald-600 transition p-2 rounded text-xl font-bold text-white shadow-lg'>
              Submit
            </button>
          </div>
          <Link to="/tasks" className="mt-2 text-center text-indigo-600 hover:underline font-bold text-lg transition">
            See All Tasks <span className="text-emerald-700">{tasks?.length}</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Todo