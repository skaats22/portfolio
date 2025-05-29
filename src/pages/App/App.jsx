import { useState, useEffect } from 'react';
import './App.css';
import HomePage from '../HomePage/HomePage';
import AboutMe from '../AboutMe/AboutMe';

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutMe />} />
      <Route
              path="*"
              element={
                <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
                  Whoops, nothing here!
                </h2>
              }
            />
     </Routes>
    </>
  )
}

export default App
