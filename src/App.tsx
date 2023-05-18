import React, {  FC, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoPage from './pages/TodoPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { createContext } from 'react';
import { Interface } from 'readline';


export type UserType = {
  presentUser: string,
  setPresentUser:  React.Dispatch<React.SetStateAction<string>>
}
export const nameContext = createContext ({} as UserType)
const App: FC = () => {
 const [presentUser, setPresentUser] = useState("")
  return (
    <div>
     <nameContext.Provider value={{presentUser, setPresentUser}}>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/signup' element={ <SignUp /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/todo' element={ <TodoPage /> } />
      </Routes>
      </BrowserRouter>
     </nameContext.Provider>
    </div>
  );
}

export default App