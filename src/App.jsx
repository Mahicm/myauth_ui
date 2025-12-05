import { useState } from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import AuthCard from './components/AuthCard.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/authcard" element={<AuthCard />} />
    </Routes>
  )
}

export default App
