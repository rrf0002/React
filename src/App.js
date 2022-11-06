

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from './chat'
import Login from './Login'


export default function App(){
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={<Login />} >
        </Route>
    </Routes>
  </BrowserRouter>
  )
};