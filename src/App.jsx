import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { RingLoader } from 'react-spinners';

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Suspense fallback={
        <div className="flex justify-center items-center h-screen">
          <RingLoader size={80} color="#16f2b3" />
        </div>
      }>
        <Skills />
        <Projects />
      </Suspense>
      <Contact />
    </>
  );
}

export default App;
