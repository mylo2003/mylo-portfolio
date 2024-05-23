import { ReactLogo, TailwindCSS, JavaScript, Java, Vite, Csharp, HTML5, CSS } from './Icons'

export default function Skills() {
  return (
    <div id="skills" className="w-full h-screen pt-10 lg:pt-20 bg-gradient-to-b from-transparent to-[#010409]">
      <h2 className="py-10 text-white text-4xl lg:text-5xl font-semibold text-center">Skills</h2>
      <div className='max-w-5xl mx-auto'>
        <div className='bg-white w-1/2 h-1/2 flex flex-wrap'>
          <div className='flex gap-3'>
            <div className='bg-[#0E0C0E] w-16 h-16 flex justify-center items-center rounded-md'>
              <ReactLogo className='w-10 h-10' />
            </div>
            <div className='bg-[#0E0C0E] w-16 h-16 flex justify-center items-center rounded-md'>
              <TailwindCSS className='w-10 h-10' />
            </div>
            <div className='bg-[#0E0C0E] w-16 h-16 flex justify-center items-center rounded-md'>
              <JavaScript className='w-10 h-10' />
            </div>
            <div className='bg-[#0E0C0E] w-16 h-16 flex justify-center items-center rounded-md'>
              <HTML5 className='w-10 h-10' />
            </div>
            <div className='bg-[#0E0C0E] w-16 h-16 flex justify-center items-center rounded-md'>
              <CSS className='w-10 h-10' />
            </div>
            <div className='bg-[#0E0C0E] w-16 h-16 flex justify-center items-center rounded-md'>
              <Vite className='w-10 h-10' />
            </div>
            <div className='bg-[#0E0C0E] w-16 h-16 flex justify-center items-center rounded-md'>
              <Java className='w-10 h-10' />
            </div>
            <div className='bg-[#0E0C0E] w-16 h-16 flex justify-center items-center rounded-md'>
              <Csharp className='w-10 h-10' />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}