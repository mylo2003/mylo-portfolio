import { useContext } from "react";
import { GeneralContext } from "../../context/GeneralContext";

export default function AboutMe() {

  const { layoutInfo, personalInfo} = useContext(GeneralContext);

  return (
    <div id="about" className="h-screen max-w-5xl mx-auto bg-transparent">
      <div className="h-[80%] flex flex-col items-center justify-center gap-5 lg:flex-row">
        <div className="pt-20 lg:pt-0">
          <h2 className="text-white text-center lg:pb-10 lg:text-left text-4xl md:text-5xl font-semibold">{layoutInfo.aboutMe?.title}</h2>
          <p className="text-white text-2xl md:text-3xl m-6 lg:m-0 text-center lg:text-left">{personalInfo.personal?.career} <span className="text-gray-400">&#40;{personalInfo.personal?.semester}&#41;.</span>
            <br />{layoutInfo.aboutMe?.[1]} <span className="font-semibold">{layoutInfo.aboutMe?.[2]}</span>.
            <br />{layoutInfo.aboutMe?.[3]} <span className="font-semibold">{layoutInfo.aboutMe?.[4]}</span> {layoutInfo.aboutMe?.[5]}.
            <br />{layoutInfo.aboutMe?.[6]} <span className="font-semibold">{layoutInfo.aboutMe?.[7]}</span> {layoutInfo.aboutMe?.[8]}.
          </p>
        </div>
        <div className="">
          <div className="scale-90 md:scale-100 w-96 lg:w-[450px] rounded-lg bg-[#0b1015] p-2">
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
                <span className="text-[#c5ccdc]">&gt;{layoutInfo.aboutMe?.hobbies[0]}&#128170;</span>
                <span className="text-[#c5ccdc]">&lt;/</span>
                <span className="text-pink-400">li</span>
                <span className="text-[#c5ccdc]">&gt;</span>
              </p>
              <p className="ml-9">
                <span className="text-[#c5ccdc]">&lt;</span>
                <span className="text-pink-400">li</span>
                <span className="text-[#c5ccdc]">&gt;{layoutInfo.aboutMe?.hobbies[1]}&#128214;</span>
                <span className="text-[#c5ccdc]">&lt;/</span>
                <span className="text-pink-400">li</span>
                <span className="text-[#c5ccdc]">&gt;</span>
              </p>
              <p className="ml-9">
                <span className="text-[#c5ccdc]">&lt;</span>
                <span className="text-pink-400">li</span>
                <span className="text-[#c5ccdc]">&gt;{layoutInfo.aboutMe?.hobbies[2]}&#128187;</span>
                <span className="text-[#c5ccdc]">&lt;/</span>
                <span className="text-pink-400">li</span>
                <span className="text-[#c5ccdc]">&gt;</span>
              </p>
              <p className="ml-9">
                <span className="text-[#c5ccdc]">&lt;</span>
                <span className="text-pink-400">li</span>
                <span className="text-[#c5ccdc]">&gt;{layoutInfo.aboutMe?.hobbies[3]}&#127926;</span>
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
            <div className="hidden md:block absolute left-16 -bottom-28 bg-slate-700 text-white p-6 rounded-lg font-mono">
              <p className="text-green-400">$ npm install hobbies</p>
              <p className="text-white">+ hobbies@2.0.2.4</p>
              <p className="text-white">added 1 package, and audited 2 packages in 2s</p>
              <p className="text-green-400">$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
