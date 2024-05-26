import { useContext } from 'react';
import ArrowDownSVG from '../icons/ArrowDownSVG';
import SocialMediaBar from './SocialMediaBar';
import { GeneralContext } from '../../context/GeneralContext';

export default function Home() {

  const { layoutInfo, personalInfo} = useContext(GeneralContext);

  return (
    <div id='home' className="h-screen flex items-center justify-center bg-gradient-to-b from-[#2B0D3A] to-transparent">
      <main className="h-full max-w-5xl mx-auto relative">
        <div className="h-[calc(100vh-250px)]  flex items-center lg:ml-10">
          <SocialMediaBar />
          <div className="lg:ml-16 w-full text-white flex flex-col items-center lg:flex-row lg:gap-20">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-light md:text-3xl">{layoutInfo.home?.welcome}</h3>
              <h1 className="text-5xl font-semibold  md:text-8xl">{personalInfo.personal?.name}</h1>
              <h2 className="text-2xl md:text-4xl">{personalInfo.personal?.role}</h2>
            </div>
            <div className="mt-12 lg:mt-0 lg:ml-14 lg:pr-12">
              <button className="w-28 md:w-40 h-12 md:text-xl font-medium text-sm lg:text-base rounded-3xl border border-white transition-all hover:bg-white hover:text-black">
                {layoutInfo.home?.button}
              </button>
            </div>
          </div>
        </div>
        <a href='#about' className='text-white pl-2 w-14 h-14 absolute inset-x-0 mx-auto bottom-40 md:bottom-96 lg:right-10 lg:left-auto lg:md:bottom-40 animate-bounce'>
          <ArrowDownSVG />
        </a>
      </main>
    </div>
  );
}