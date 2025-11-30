import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load components
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Tech = lazy(() => import("./components/Tech"));
const EducationHobbies = lazy(() => import("./components/EducationHobbies"));
const Blog = lazy(() => import("./components/Blog"));
const Contact = lazy(() => import("./components/Contact"));

const LoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center bg-primary">
    <div className="w-20 h-20 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter basename="/Portfolio/">
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <Suspense fallback={<LoadingFallback />}>
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
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
