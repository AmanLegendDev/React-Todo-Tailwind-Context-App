import React, { useContext } from 'react';
import { MyContext } from './Todo.jsx';
import { Link } from 'react-router-dom';

const Alltasks = () => {
  const { tasks, settasks } = useContext(MyContext)

  const handledelete = (id) => {
    settasks(tasks.filter(dels => dels.id !== id));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-emerald-50">
      <div className="max-w-2xl mx-auto py-10">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-8 text-center">All tasks</h1>
        {tasks.length === 0
          ? <div className="p-8 text-center text-gray-400 font-semibold">No tasks yet.</div>
          : tasks.map(t => (
            <div key={t.id} className='border-2 border-indigo-200 p-6 my-4 rounded-xl bg-white flex justify-between items-center shadow-lg transition hover:shadow-2xl'>
              <h1 className='font-bold text-2xl text-emerald-700'>Task: <span className="text-gray-700">{t.tasks}</span></h1>
              <div className='flex gap-6'>
                <Link to={`/edit/${t.id}`}>
                  <button
                    className='bg-indigo-500 hover:bg-indigo-700 text-white p-2 px-4 text-lg rounded-lg font-semibold shadow transition'
                  >Edit</button>
                </Link>
                <button
                  className='bg-red-500 hover:bg-red-700 text-white p-2 px-4 text-lg rounded-lg font-semibold shadow transition'
                  onClick={() => handledelete(t.id)}
                >Delete</button>
              </div>
            </div>
          ))}
        <div className="flex justify-center mt-10">
          <Link to="/">
            <button
              className='bg-emerald-500 hover:bg-emerald-600 text-white p-3 text-lg rounded-lg font-bold shadow transition'
            >Add more Task</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Alltasks