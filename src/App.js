import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Community from "./pages/Community";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import Programs from "./pages/Programs";
import Blogs from "./pages/Blogs";
import Error from "./pages/Error";
import { Navbar } from "./components";
import { Footer } from "./components";
import Past from "./pages/Past";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <div>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects/:id" element={<ProjectPage />}></Route>
          <Route path="/programs" element={<Programs />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/blogs/:id" element={<BlogDetail />}></Route>
          <Route path="/past-community" element={<Past />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
