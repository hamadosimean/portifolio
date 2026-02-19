import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
