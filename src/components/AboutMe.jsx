export default function AboutMe() {
  return (
    <div id="about" className="max-w-5xl mb-20 lg:mb-0 mx-auto lg:h-screen bg-transparent">
      <h2 className="py-10 text-white text-4xl lg:text-5xl font-semibold text-center">About me</h2>

      <div className="flex flex-col items-center lg:flex-row">
        <div className="text-white text-2xl lg:text-3xl m-6 lg:m-0 text-center lg:text-left">
          <p>Systems engineering student <span className="text-gray-400">&#40;currently in 7th semester&#41;.</span>
            <br />Focused on <span className=" font-semibold">frontend development</span>.
            <br />Code as <span className=" font-semibold">clean</span> as possible.
            <br />Also an <span className="font-semibold">exceptional</span> teammate.
          </p>
        </div>

        <div className="scale-90 lg:scale-100 w-96 lg:w-[450px] rounded-lg bg-[#0b1015] p-2">
          <div className="relative flex text-center">
            <span className="absolute inset-x-0 top-2 font-medium text-base text-slate-500">
              Hobbies.jsx
            </span>
          </div>
          <div className="mt-6 font-mono text-base lg:text-base font-normal tracking-wide space-y-0.5 px-5 py-1">
            <p className="mt-4">
              <span className="text-[#ba63e9]">export default   </span>
              <span className="text-[#9f77ea]">function </span>
              <span className="text-[#dbb002]">Hobbies</span>
              <span className="text-[#c5ccdc]">&#40;&#41; &#123;</span>
            </p>
            <p className="ml-3">
              <span className="text-[#ba63e9]">return </span>
              <span className="text-[#c5ccdc]">&#40;</span>
            </p>
            <p className="ml-6">
              <span className="text-[#c5ccdc]">&lt;</span>
              <span className="text-pink-400">ul</span>
              <span className="text-[#c5ccdc]">&gt;</span>
            </p>
            <p className="ml-9">
              <span className="text-[#c5ccdc]">&lt;</span>
              <span className="text-pink-400">li</span>
              <span className="text-[#c5ccdc]">&gt;GYM&#128170;</span>
              <span className="text-[#c5ccdc]">&lt;/</span>
              <span className="text-pink-400">li</span>
              <span className="text-[#c5ccdc]">&gt;</span>
            </p>
            <p className="ml-9">
              <span className="text-[#c5ccdc]">&lt;</span>
              <span className="text-pink-400">li</span>
              <span className="text-[#c5ccdc]">&gt;Read&#128214;</span>
              <span className="text-[#c5ccdc]">&lt;/</span>
              <span className="text-pink-400">li</span>
              <span className="text-[#c5ccdc]">&gt;</span>
            </p>
            <p className="ml-9">
              <span className="text-[#c5ccdc]">&lt;</span>
              <span className="text-pink-400">li</span>
              <span className="text-[#c5ccdc]">&gt;Play PC video games&#128187;</span>
              <span className="text-[#c5ccdc]">&lt;/</span>
              <span className="text-pink-400">li</span>
              <span className="text-[#c5ccdc]">&gt;</span>
            </p>
            <p className="ml-9">
              <span className="text-[#c5ccdc]">&lt;</span>
              <span className="text-pink-400">li</span>
              <span className="text-[#c5ccdc]">&gt;Listen music&#127926;</span>
              <span className="text-[#c5ccdc]">&lt;/</span>
              <span className="text-pink-400">li</span>
              <span className="text-[#c5ccdc]">&gt;</span>
            </p>

            <p className="ml-6">
              <span className="text-[#c5ccdc]">&lt;/</span>
              <span className="text-pink-400">ul</span>
              <span className="text-[#c5ccdc]">&gt;</span>
            </p>
            <p className="ml-3">
              <span className="text-[#c5ccdc]">&#41;&#59;</span>
            </p>
            <p>
              <span className="text-[#c5ccdc]">&#125;</span>
            </p>
          </div>
          <div className="hidden lg:block absolute left-16 -bottom-28 bg-slate-700 text-white p-6 rounded-lg font-mono">
            <p className="text-green-400">$ npm install hobbies</p>
            <p className="text-white">+ hobbies@2.0.2.4</p>
            <p className="text-white">added 1 package, and audited 2 packages in 2s</p>
            <p className="text-green-400">$</p>
          </div>
        </div>

        
      </div>
    </div>
  );
}
