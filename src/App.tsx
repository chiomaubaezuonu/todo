import React, {  FC } from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoPage from './pages/TodoPage';

const App: FC = () => {

  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/todo' element={ <TodoPage /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App