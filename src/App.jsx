import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBarFloat from './components/NavBarFloat';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  return (
    <>
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <NavBarFloat />
    </>
  );
}