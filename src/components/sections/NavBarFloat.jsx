import CodeSVG from "../icons/CodeSVG";
import ContactSVG from "../icons/ContactSVG";
import HomeSVG from "../icons/HomeSVG";
import MailSVG from "../icons/MailSVG";
import SuitcaseSVG from "../icons/SuitcaseSVG";

export default function NavBarFloat() {
  return (
    <nav className="z-50 fixed lg:hidden bottom-5 inset-x-0 mx-auto w-[330px] md:w-[400px] bg-[#443455]/50 rounded-3xl backdrop-blur-md shadow-xl">
      <ul className="w-[330px] md:w-[400px] h-[60px] md:h-[80px] px-8 flex items-center justify-around text-white">
        <li>
          <button className="pt-2" onClick={() => window.scrollTo(0, 0)}>
            <HomeSVG />
          </button>
        </li>
        <li>
          <a href="#about">
            <ContactSVG />
          </a>
        </li>
        <li>
          <a href="#projects">
            <SuitcaseSVG />
          </a>
        </li>
        <li>
          <a href="#skills">
            <CodeSVG />
          </a>
        </li>
        <li>
          <a href="#contact">
            <MailSVG className="w-8 h-8 md:w-10 md:h-10 transition-all hover:fill-purple-400" />
          </a>
        </li>
      </ul>
    </nav>
  );
}