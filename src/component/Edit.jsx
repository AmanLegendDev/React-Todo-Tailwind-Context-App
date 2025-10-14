import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MyContext } from './Todo.jsx';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, settasks } = useContext(MyContext);

  const taskToEdit = tasks.find(task => task.id === id);
  const [editValue, setEditValue] = useState(taskToEdit ? taskToEdit.tasks : '');

  const handleChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    settasks(tasks.map(t => t.id === id ? { ...t, tasks: editValue } : t));
    navigate('/tasks');
  };

  if (!taskToEdit)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-blue-50 to-emerald-100">
        <div className="p-10 rounded-xl bg-white border-2 shadow-xl text-xl text-red-600 font-bold">
          No task found to edit.
        </div>
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-blue-50 to-emerald-100">
      <div className="p-10 rounded-xl border-4 border-indigo-500 shadow-2xl bg-white max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-8 text-center">Edit your Task</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={editValue}
            onChange={handleChange}
            className="border-2 focus:border-indigo-500 outline-none rounded-lg px-4 py-2 transition bg-gray-50 shadow-inner w-full"
          />
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-700 transition p-2 rounded font-bold text-xl text-white shadow-lg w-full"
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;