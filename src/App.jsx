import React,{ useContext,useState } from 'react'
import Todo,{ MyContext } from './component/Todo.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Alltasks from './component/Alltasks.jsx';
import Edit from './component/Edit.jsx';


const App = () => {
  const [tasks, settasks] = useState([])
  const Contextvalue = {tasks,settasks};


  return (
    <>
    <MyContext.Provider value={Contextvalue}>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Todo />} />
    <Route path="/tasks" element={<Alltasks />} />
    <Route path="/edit/:id" element={<Edit />} />
   
    </Routes>
    </BrowserRouter>
    </MyContext.Provider>
    </>
  )
}

export default App