import CodeSVG from "../icons/CodeSVG";
import ContactSVG from "../icons/ContactSVG";
import HomeSVG from "../icons/HomeSVG";
import MailSVG from "../icons/MailSVG";
import SuitcaseSVG from "../icons/SuitcaseSVG";

export default function NavBarFloat() {
  return (
    <nav className="z-50 fixed lg:hidden bottom-5 inset-x-0 mx-auto w-[330px] bg-[#443455]/50 rounded-3xl backdrop-blur-md shadow-xl">
      <ul className="w-[330px] h-[60px] px-8 flex items-center justify-around text-white">
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
            <MailSVG />
          </a>
        </li>
      </ul>
    </nav>
  );
}