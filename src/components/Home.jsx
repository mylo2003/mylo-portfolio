import NavBar from './NavBar';
import SocialMediaBar from './SocialMediaBar';

export default function Home() {
  return (
    <div id='home' className="h-screen bg-gradient-to-b from-[#2B0D3A] to-transparent">
      <main className="h-full max-w-5xl mx-auto">
        <NavBar />
        <div className="h-[500px] flex items-center lg:ml-10">
          <SocialMediaBar />
          <div className="lg:ml-16 w-full text-white flex flex-col items-center lg:flex-row lg:gap-20">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-light lg:text-3xl">Hey there, I am</h3>
              <h1 className="text-5xl font-semibold  lg:text-8xl">Camilo Mora</h1>
              <h2 className="text-2xl lg:text-4xl">Front-end Developer</h2>
            </div>
            <div className="mt-12 lg:mt-0 lg:ml-20">
              <button className="w-28 lg:w-40 h-12 font-medium text-sm lg:text-base rounded-3xl border border-white transition-all hover:bg-white hover:text-black">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}