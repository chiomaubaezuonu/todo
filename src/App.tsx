import React, {  FC } from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoPage from './pages/TodoPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

const App: FC = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/signup' element={ <SignUp /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/todo' element={ <TodoPage /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App