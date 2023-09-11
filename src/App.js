import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Project";
import ProjectPages from "./pages/ProjectPages";
import Error from "./pages/Error";
import { Navbar } from "./components";
import { Footer } from "./components";


function App() {
  return (
    <div>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects/:id" element={<ProjectPages />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
