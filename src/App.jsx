import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import EducationHobbies from "./components/EducationHobbies";
import Blog from "./components/Blog";

import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter basename="/Portfolio">
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Hero />
              </div>
              <About />
              <EducationHobbies />
              <Tech />
              <Projects />
              <div className='relative z-0'>
                <Contact />
              </div>
            </>
          } />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
