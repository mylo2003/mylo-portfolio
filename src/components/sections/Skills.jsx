import ArrowDownSVG from '../icons/ArrowDownSVG';
import { ReactLogo, TailwindCSS, JavaScript, Java, Vite, Csharp, HTML5, CSS, Git, MySQL, MongoDB, Slack, Figma, Notion } from '../icons/TechsIcons'

export default function Skills() {
  return (
    <div id="skills" className="w-full h-screen lg:pt-20 bg-gradient-to-b from-transparent to-[#010409]">
      <div className='max-w-2xl h-full flex flex-col justify-center mx-auto p-10'>
        <div className='w-full h-2/6 relative'>
          <div className='flex flex-wrap gap-3 justify-center border-gray-400 rounded-xl border-b-2 pb-2 md:translate-y-2'>
            <div className='cardSkill md:translate-y-20 md:translate-x-12'>
              <Vite className='w-10 h-10' /> 
            </div>
            <div className='cardSkill w-16 h-16'>
              <HTML5 className='w-11 h-11' />
            </div>
            <div className='cardSkill w-20 h-20 md:translate-y-12 md:-translate-x-1'>
              <JavaScript className='w-12 h-12' />
            </div>
            <div className='cardSkill md:translate-y-2'>
              <TailwindCSS className='w-10 h-10' />
            </div>
            <div className='cardSkill w-20 h-20 md:translate-y-12 md:translate-x-2'>
              <CSS className='w-12 h-12' />
            </div>
            <div className='cardSkill'>
              <Java className='w-12 h-12' />
            </div>
            <div className='cardSkill md:translate-y-20 md:-translate-x-12'>
              <Csharp className='w-10 h-10' />
            </div>
            <div className='cardSkill w-20 h-20'>
              <ReactLogo className='w-12 h-12' />
            </div>
          </div>
        </div>
        <div className='mx-auto py-2 w-56 h-fit text-center mt-10 md:mt-2 md:mb-2'>
          <ArrowDownSVG className="mx-auto h-7 rotate-180" />
          <h2 className='text-white font-medium text-5xl md:text-6xl text-center'>Skills</h2>
          <h3 className='text-white text-xl'>and tools</h3>
          <ArrowDownSVG className="mx-auto h-7" />
        </div>
        <div className='w-full h-3/6'>
          <div className='flex flex-wrap gap-3 justify-center border-gray-400 rounded-xl border-t-2 pt-2 -translate-y-2'>
            <div className='cardSkill w-20 h-20'>
              <MongoDB className='w-12 h-12' />     
            </div>
            <div className='cardSkill'>
              <MySQL className='w-10 h-10' />
            </div>
            <div className='cardSkill w-20 h-20'>
              <Git className='w-12 h-12' />
            </div>
            <div className='cardSkill'>
              <Notion className='w-10 h-10' />
            </div>
            <div className='cardSkill'>
              <Slack className='w-10 h-10' />
            </div>
            <div className='cardSkill w-20 h-20'>
              <Figma className='w-12 h-12' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}