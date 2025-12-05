import { useState } from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom';
import AuthPage from './pages/AuthPage.jsx';
import HomePlain from './components/HomePlain.jsx';
function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/home" element={<HomePlain />} />
    </Routes>
  )
}

export default App;
