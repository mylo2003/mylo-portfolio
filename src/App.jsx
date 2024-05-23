import AboutMe from './components/sections/AboutMe';
import Contact from './components/sections/Contact';
import Home from './components/sections/Home';
import NavBar from './components/sections/NavBar';
import NavBarFloat from './components/sections/NavBarFloat';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import { GeneralProvider } from './context/GeneralContext';


export default function App() {
  return (
    <>
      <GeneralProvider>
        <NavBar />
        <Home />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
        <NavBarFloat />
      </ GeneralProvider>
    </>
  );
}