import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router";
import "./App.css";
import HomePage from "../HomePage/HomePage";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import NavBar from "../../components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
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
  );
}

export default App;
