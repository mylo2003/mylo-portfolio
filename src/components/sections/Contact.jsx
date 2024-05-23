// import {Toaster, toast } from 'sonner';
import GithubSVG from "../icons/GithubSVG";
import InstragramSVG from "../icons/InstagramSVG";
import LinkedInSVG from "../icons/LinkedInSVG";
import PdfSVG from "../icons/PdfSVG";

export default function Contact() {

  const copy = () => {
    navigator.clipboard.writeText('camiloalf23@gmail.com');
    // toast('hola');
  };

  return (
    <div id="contact" className="w-full h-screen bg-[#010409]">
      <div className="max-w-5xl h-1/2 mx-auto text-center">
        <div className="pt-32 text-white">
          <h2 className="text-4xl lg:text-7xl font-semibold">Get in touch with me</h2>
          <p className="mt-10 text-2xl lg:text-4xl">Let&apos;s work together,<br />I am open to new <span className="text-purple-700">opportunities.</span></p>
        </div>
        <div className="mt-10">
          <button className="hover:shadow-sm hover:shadow-purple-700 w-44 lg:w-96 h-12 lg:h-14 font-medium text-lg lg:text-2xl bg-white rounded-3xl border border-white transition-all hover:bg-transparent hover:text-white">
            <a href="mailto:camiloalf23@gmail.com">Send me an Email!</a>
          </button>
        </div>
      </div>
      <footer className="h-1/2 flex flex-col justify-center items-center">
        <ul className="flex gap-2 lg:gap-8">
          <li className="cursor-pointer ">
            <a href="https://github.com/mylo2003" target="_blank">
              <GithubSVG className="w-10 h-10 lg:w-14 lg:h-14 transition-all hover:fill-gray-500" />
            </a>
          </li>
          <li className="flex cursor-pointer">
            <a href="https://www.linkedin.com/in/camilomora23/" target="_blank">
              <LinkedInSVG className="w-10 h-10 lg:w-14 lg:h-14 transition-all hover:fill-gray-500" />
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="https://www.instagram.com/mylo_23/" target="_blank">
              <InstragramSVG className="w-10 h-10 lg:w-14 lg:h-14 transition-all hover:fill-gray-500" />
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="">
              <PdfSVG />
            </a>
          </li>
        </ul>
        <div className="cursor-pointer pt-2" onClick={copy}>
          <p className="text-white text-lg lg:text-2xl lg:pt-2 transition-all hover:text-purple-700">camiloalf23@gmail.com</p>
          <p className="text-white text-center animate-pulse cursor-pointer">Click to copy</p>
        </div>
      </footer>
      {/* <Toaster/> */}
    </div>
  );
}