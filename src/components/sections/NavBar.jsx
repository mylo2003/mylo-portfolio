import { useContext } from "react";
import { GeneralContext } from "../../context/GeneralContext";
import toast from 'react-hot-toast';
import LangSVG from "../icons/LangSVG";

export default function NavBar() {

  const { scrolled, layoutInfo, switchLang, lang } = useContext(GeneralContext);

  return (
    <div className='h-20 bg-[#2B0D3A]'>
      <div className="max-w-5xl mx-auto z-50 lg:px-8 py-2 fixed top-0 inset-x-0">
        <div className={`${scrolled ? 'lg:bg-[#443455]/50 ' : 'lg:bg-[#2B0D3A]'} lg:backdrop-blur-md px-7 py-3 rounded-3xl flex justify-between items-center text-white transition-all`}>
          <button onClick={() => window.scrollTo(0, 0)} href="#home" className="ml-5 md:text-4xl lg:ml-0 text-2xl lg:text-2xl font-bold cursor-pointer transition-all hover:text-purple-400">_mylo</button>
          <button className="mr-5 lg:hidden" onClick={() => {
            switchLang(lang);
            toast.success(layoutInfo.home.lang);
          }}
          >
            <LangSVG />
          </button>
          <nav className="hidden lg:inline-block text-xl">
            <ul className="flex gap-10 *:cursor-pointer *:transition-all">
              <li className="hover:text-gray-400">
                <a href="#about">_{layoutInfo.navBar?.about}</a>
              </li>
              <li className="hover:text-gray-400">
                <a href="#projects">_{layoutInfo.navBar?.projects}</a>
              </li>
              <li className="hover:text-gray-400">
                <a href="#skills">_{layoutInfo.navBar?.skills}</a>
              </li>
              <li className="hover:text-gray-400">
                <a href="#contact">_{layoutInfo.navBar?.contact}</a>
              </li>
              <li className="hover:text-gray-400">
                <button onClick={() => {
                  switchLang(lang);
                  toast.success(layoutInfo.home.lang);
                }}
                >
                  <LangSVG />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}