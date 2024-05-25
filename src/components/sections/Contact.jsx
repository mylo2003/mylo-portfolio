import toast, { Toaster } from 'react-hot-toast';
import GithubSVG from "../icons/GithubSVG";
import InstragramSVG from "../icons/InstagramSVG";
import LinkedInSVG from "../icons/LinkedInSVG";
import PdfSVG from "../icons/PdfSVG";
import ArrowDownSVG from '../icons/ArrowDownSVG';

export default function Contact() {

  const copy = () => {
    navigator.clipboard.writeText('camiloalf23@gmail.com');
    toast.success('Check clipboard!');
  };

  return (
    <div id="contact" className="w-full h-screen bg-[#010409]">
      <div className="max-w-5xl h-1/2 mx-auto text-center">
        <div className="pt-32 text-white">
          <h2 className="text-4xl md:text-7xl font-semibold">Get in touch with me</h2>
          <p className="mt-10 text-2xl md:text-4xl">Let&apos;s work together,<br />I am open to new <span className="text-purple-700">opportunities.</span></p>
        </div>
        <div className="mt-10">
          <button className="hover:shadow-sm hover:shadow-purple-700 w-44 md:w-96 h-12 md:h-14 font-medium text-lg md:text-2xl bg-white rounded-3xl border border-white transition-all hover:bg-transparent hover:text-white">
            <a href="mailto:camiloalf23@gmail.com">Send me an Email!</a>
          </button>
        </div>
      </div>
      <footer className="h-1/2 flex flex-col justify-center items-center">
        <ul className="flex gap-2 md:gap-8">
          <li className="cursor-pointer ">
            <a href="https://github.com/mylo2003" target="_blank">
              <GithubSVG className="w-10 h-10 md:w-14 md:h-14 transition-all hover:fill-gray-500" />
            </a>
          </li>
          <li className="flex cursor-pointer">
            <a href="https://www.linkedin.com/in/camilomora23/" target="_blank">
              <LinkedInSVG className="w-10 h-10 md:w-14 md:h-14 transition-all hover:fill-gray-500" />
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="https://www.instagram.com/mylo_23/" target="_blank">
              <InstragramSVG className="w-10 h-10 md:w-14 md:h-14 transition-all hover:fill-gray-500" />
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="">
              <PdfSVG />
            </a>
          </li>
        </ul>
        <div className="cursor-pointer pt-2" onClick={copy}>
          <p className="text-white text-lg md:text-2xl lg:pt-2 transition-all hover:text-purple-700">camiloalf23@gmail.com</p>
          <ArrowDownSVG className="mx-auto h-7 rotate-180 animate-pulse" />
          <p className="text-white text-center animate-pulse cursor-pointer">Click to copy</p>
        </div>
        <p className='text-gray-400 translate-y-5 md:translate-y-14'>Made with love by Mylo</p>
      </footer>
      
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 2000,
          style: {
            background: 'rgb(68 52 85 / 0.6)',
            color: '#fff',
          },
        }}  
        />
    </div>
  );
}