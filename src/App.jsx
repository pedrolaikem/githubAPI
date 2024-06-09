import React from 'react';
import { useState, useEffect } from 'react'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getUser } from './Api'
import Home from './components/Home'
import User from './components/User'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="users/:login" Component={User} />
      </Routes>
    </Router>
  )
}

export default App
