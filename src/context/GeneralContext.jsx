import { createContext, useEffect, useState } from 'react'
import { personalEN, layoutEN, projectsEN, personalES, layoutES, projectsES } from './personalInfo';

const GeneralContext = createContext();

function GeneralProvider({ children }) {

  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState(() => {
    const storedLang = localStorage.getItem('lang');
    return storedLang ? JSON.parse(storedLang) : false;
  });

  const [layoutInfo, setLayoutInfo] = useState({});
  const [personalInfo, setPersonalInfo] = useState({});
  const [personalProjects, setPersonalProjects] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const switchLang = (value) => {
    setLang(!value);
  };

  useEffect(() => {
    localStorage.setItem('lang', JSON.stringify(lang));
    setLayoutInfo(lang ? layoutES : layoutEN);
    setPersonalInfo(lang ? personalES : personalEN);
    setPersonalProjects(lang ? projectsES : projectsEN);
  }, [lang]);

  return (
    <GeneralContext.Provider value={{
      scrolled,
      layoutInfo,
      personalInfo,
      personalProjects,
      switchLang,
      lang,
    }}>
      {children}
    </GeneralContext.Provider>
  );
}

export { GeneralContext, GeneralProvider };