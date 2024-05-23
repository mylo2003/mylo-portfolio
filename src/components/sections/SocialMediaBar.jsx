import GithubSVG from "../icons/GithubSVG";
import InstragramSVG from "../icons/InstagramSVG";
import LinkedInSVG from "../icons/LinkedInSVG";
import MailSVG from "../icons/MailSVG";

export default function SocialMediaBar() {
  return (
    <aside className="hidden w-[100px] lg:flex text-white">
      <ul className="flex flex-col gap-2">
        <li className="cursor-pointer transition-all hover:-translate-y-1">
          <a href="https://github.com/mylo2003" target="_blank">
            <GithubSVG />
          </a>
        </li>
        <li className="flex cursor-pointer transition-all hover:-translate-y-1 ">
          <a href="https://www.linkedin.com/in/camilomora23/" target="_blank">
            <LinkedInSVG />
          </a>
        </li>
        <li className="cursor-pointer transition-all hover:-translate-y-1">
          <a href="https://www.instagram.com/mylo_23/" target="_blank">
            <InstragramSVG />
          </a>
        </li>
        <li className="cursor-pointer transition-all hover:-translate-y-1">
          <a href="mailto:camiloalf23@gmail.com">
            <MailSVG className="w-9 h-9 transition-all hover:text-gray-400"  />
          </a>
        </li>
      </ul>
    </aside>
  );
}

