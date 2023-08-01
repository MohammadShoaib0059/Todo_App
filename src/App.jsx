import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import { useDispatch } from 'react-redux'
import { GetTodoData } from './Redux/Features/TodoSlicer'
import Navbar from './Components/Navbar'




function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTodoData());
  },[]);

  return (
    <BrowserRouter>
    <>
   <Routes>
    <Route path='/' element={<Navbar/>}></Route>
   </Routes>
    
     
    </>
    </BrowserRouter>
  )
}

export default App
