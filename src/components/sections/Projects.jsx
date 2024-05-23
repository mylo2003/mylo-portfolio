import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';

export default function Projects() {
  return (
    <div id="projects" className="max-w-5xl h-screen pt-20 bg-transparent mx-auto">
      <h2 className="text-white text-4xl lg:text-5xl font-semibold text-center">Some of my projects</h2>
      <Swiper
        navigation={true}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            translate: ['-120%', 0, -500],
          },
          next: {
            translate: ['120%', 0, -500],
          },
        }}
        modules={[EffectCreative, Navigation]}
        className="h-[80%]"
      >
        <SwiperSlide className='flex flex-col items-center'>
          <div className="translate-y-5 lg:translate-y-12 w-[270px] md:w-[550px] rounded-lg shadow">
            <a href="https://mylo-ecommerce.vercel.app/" target='_blank'><img className="w-full h-full rounded-lg border object-cover transition-all hover:-translate-y-1" src="/src/assets/img/mylommerce.webp" alt="" /></a>
          </div>
          <div className="w-[80%] lg:w-[75%] h-80 lg:h-56 flex flex-col justify-center lg:items-center lg:flex-row gap-5 px-10 bg-[#010409] text-white shadow shadow-gray-500 rounded-xl">
            <div className="">
              <h2 className="text-left text-3xl lg:text-5xl">Mylommerce</h2>
              <div className="hidden pt-5 px-2 lg:flex flex-wrap gap-1">
                <span className="px-3 rounded-3xl border border-white transition-all hover:bg-white hover:text-black">react</span>
                <span className="px-3 rounded-3xl border border-white transition-all hover:bg-white hover:text-black">vite</span>
                <span className="px-3 rounded-3xl border border-white transition-all hover:bg-white hover:text-black">tailwindcss</span>
              </div>
            </div>
            <div className="w-auto lg:mt-5 text-sm flex flex-col">
              <p className='lg:text-lg'>
                Mylommerce was a project done for a university course.
                My role was to do all the design both as figma and code.
                I enjoyed doing it in react and tailwindcss.
              </p>
              <a className="mt-1 text-blue-500 lg:text-base underline underline-offset-4" href="https://mylo-ecommerce.vercel.app/" target='_blank'>https://mylo-ecommerce.vercel.app/</a>
              <div className="w-full pt-5 lg:hidden flex flex-wrap gap-1">
                <span className="px-3 rounded-3xl border border-white transition-all hover:bg-white hover:text-black">react</span>
                <span className="px-3 rounded-3xl border border-white transition-all hover:bg-white hover:text-black">vite</span>
                <span className="px-3 rounded-3xl border border-white transition-all hover:bg-white hover:text-black">tailwindcss</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col items-center'>
          <div className="translate-y-5 lg:translate-y-12 w-[270px] md:w-[550px] rounded-lg shadow">
            <a href="https://mylo-ecommerce.vercel.app/" target='_blank'><img className="w-full h-full rounded-lg border object-cover transition-all hover:-translate-y-1" src="/src/assets/img/mylommerce.webp" alt="" /></a>
          </div>
          <div className="w-[80%] lg:w-[75%] h-80 lg:h-56 flex flex-col justify-center lg:items-center lg:flex-row gap-5 px-10 bg-[#010409] text-white shadow shadow-gray-500 rounded-xl">
            <div className="">
              <h2 className="text-left text-3xl lg:text-5xl">Mylommerce</h2>
              <div className="hidden pt-5 px-2 lg:flex flex-wrap gap-1">
                <span className="px-3 rounded-3xl border border-white transition-all hover:bg-white hover:text-black">react</span>
                <span className="px-3 rounded-3xl border border-white transition-all hover:bg-white hover:text-black">vite</span>
                <span className="px-3 rounded-3xl border border-white transition-all hover:bg-white hover:text-black">tailwindcss</span>
              </div>
            </div>
            <div className="w-auto lg:mt-5 text-sm flex flex-col">
              <p className='lg:text-lg'>
                Mylommerce was a project done for a university course.
                My role was to do all the design both as figma and code.
                I enjoyed doing it in react and tailwindcss.
              </p>
              <a className="mt-1 text-blue-500 lg:text-base underline underline-offset-4" href="https://mylo-ecommerce.vercel.app/" target='_blank'>https://mylo-ecommerce.vercel.app/</a>
              <div className="w-full pt-5 lg:hidden flex flex-wrap gap-1">
                <span className="px-3 rounded-3xl border border-white transition-all hover:bg-white hover:text-black">react</span>
                <span className="px-3 rounded-3xl border border-white transition-all hover:bg-white hover:text-black">vite</span>
                <span className="px-3 rounded-3xl border border-white transition-all hover:bg-white hover:text-black">tailwindcss</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col items-center'>
          <div className="translate-y-5 lg:translate-y-12 w-[270px] md:w-[550px] rounded-lg shadow">
            <a href="https://mylo-ecommerce.vercel.app/" target='_blank'><img className="w-full h-full rounded-lg border object-cover transition-all hover:-translate-y-1" src="/src/assets/img/mylommerce.webp" alt="" /></a>
          </div>
          <div className="w-[80%] lg:w-[75%] h-80 lg:h-56 flex flex-col justify-center lg:items-center lg:flex-row gap-5 px-10 bg-[#010409] text-white shadow shadow-gray-500 rounded-xl">
            <div className="">
              <h2 className="text-left text-3xl lg:text-5xl">Mylommerce</h2>
              <div className="hidden pt-5 px-2 lg:flex flex-wrap gap-1">
                <span className="px-3 rounded-3xl border border-white transition-all hover:bg-white hover:text-black">react</span>
                <span className="px-3 rounded-3xl border border-white transition-all hover:bg-white hover:text-black">vite</span>
                <span className="px-3 rounded-3xl border border-white transition-all hover:bg-white hover:text-black">tailwindcss</span>
              </div>
            </div>
            <div className="w-auto lg:mt-5 text-sm flex flex-col">
              <p className='lg:text-lg'>
                Mylommerce was a project done for a university course.
                My role was to do all the design both as figma and code.
                I enjoyed doing it in react and tailwindcss.
              </p>
              <a className="mt-1 text-blue-500 lg:text-base underline underline-offset-4" href="https://mylo-ecommerce.vercel.app/" target='_blank'>https://mylo-ecommerce.vercel.app/</a>
              <div className="w-full pt-5 lg:hidden flex flex-wrap gap-1">
                <span className="px-3 rounded-3xl border border-white transition-all hover:bg-white hover:text-black">react</span>
                <span className="px-3 rounded-3xl border border-white transition-all hover:bg-white hover:text-black">vite</span>
                <span className="px-3 rounded-3xl border border-white transition-all hover:bg-white hover:text-black">tailwindcss</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}