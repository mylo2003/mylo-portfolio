import { useContext } from "react";
import GithubSVG from "../icons/GithubSVG";
import InstragramSVG from "../icons/InstagramSVG";
import LinkedInSVG from "../icons/LinkedInSVG";
import MailSVG from "../icons/MailSVG";
import { GeneralContext } from "../../context/GeneralContext";

export default function SocialMediaBar() {

  const { personalInfo } = useContext(GeneralContext);

  return (
    <aside className="hidden w-[100px] lg:flex text-white">
      <ul className="flex flex-col gap-2">
        <li className="cursor-pointer transition-all hover:-translate-y-1">
          <a href={personalInfo.contact?.github} target="_blank">
            <GithubSVG />
          </a>
        </li>
        <li className="flex cursor-pointer transition-all hover:-translate-y-1 ">
          <a href={personalInfo.contact?.linkedIn} target="_blank">
            <LinkedInSVG />
          </a>
        </li>
        <li className="cursor-pointer transition-all hover:-translate-y-1">
          <a href={personalInfo.contact?.instagram} target="_blank">
            <InstragramSVG />
          </a>
        </li>
        <li className="cursor-pointer transition-all hover:-translate-y-1">
          <a href={`mailto:${personalInfo.contact?.email}`}>
            <MailSVG />
          </a>
        </li>
      </ul>
    </aside>
  );
}

