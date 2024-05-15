import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';

export default function Projects() {
  return (
    <div id="projects" className="w-full h-screen bg-transparent">
      <h2 className="py-10 text-white text-4xl lg:text-5xl font-semibold text-center">Projects</h2>
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
        className="max-w-5xl h-full"
      >
        <SwiperSlide className='flex flex-col items-center'>
          <div className="translate-y-5 lg:translate-y-10 w-[270px] lg:w-[450px] h-auto bg-[#2B0D3A] rounded-2xl shadow shadow-amber-50">
            <img className="w-full h-full rounded-2xl border  object-cover transition-all hover:-translate-y-1" src="/src/assets/img/bg-1.jpg" alt="" />
          </div>
          <div className="w-[80%] lg:w-[70%] h-fit py-10 lg:h-56 flex flex-col lg:flex-row gap-5 px-10 bg-[#131313] text-white shadow shadow-white rounded-2xl">
            <div className="w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-5xl">Mylommerce</h2>
              <div className="mt-5 flex gap-2">
                <span className="px-4 rounded-3xl border border-white">react</span>
                <span className="px-4 rounded-3xl border border-white">vite</span>
                <span className="px-4 rounded-3xl border border-white">tailwindcss</span>
              </div>
            </div>
            <div className="w-auto text-sm flex items-center">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam voluptatem molestiae suscipit eos libero!
                Et amet laboriosam dolores, molestias esse impedit quisquam,
                officiis iusto aperiam quia, minima adipisci modi! Nulla.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col items-center'>
          <div className="translate-y-5 lg:translate-y-10 w-[270px] lg:w-[450px] h-auto bg-[#2B0D3A] rounded-2xl shadow shadow-amber-50">
            <img className="w-full h-full rounded-2xl border  object-cover transition-all hover:-translate-y-1" src="/src/assets/img/bg-1.jpg" alt="" />
          </div>
          <div className="w-[80%] lg:w-[70%] h-fit py-10 lg:h-56 flex flex-col lg:flex-row gap-5 px-10 bg-[#131313] text-white shadow shadow-white rounded-2xl">
            <div className="w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-5xl">Mylommerce</h2>
              <div className="mt-5 flex gap-2">
                <span className="px-4 rounded-3xl border border-white">react</span>
                <span className="px-4 rounded-3xl border border-white">vite</span>
                <span className="px-4 rounded-3xl border border-white">tailwindcss</span>
              </div>
            </div>
            <div className="w-auto text-sm flex items-center">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam voluptatem molestiae suscipit eos libero!
                Et amet laboriosam dolores, molestias esse impedit quisquam,
                officiis iusto aperiam quia, minima adipisci modi! Nulla.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col items-center'>
          <div className="translate-y-5 lg:translate-y-10 w-[270px] lg:w-[450px] h-auto bg-[#2B0D3A] rounded-2xl shadow shadow-amber-50">
            <img className="w-full h-full rounded-2xl border  object-cover transition-all hover:-translate-y-1" src="/src/assets/img/bg-1.jpg" alt="" />
          </div>
          <div className="w-[80%] lg:w-[70%] h-fit py-10 lg:h-56 flex flex-col lg:flex-row gap-5 px-10 bg-[#131313] text-white shadow shadow-white rounded-2xl">
            <div className="w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-5xl">Mylommerce</h2>
              <div className="mt-5 flex gap-2">
                <span className="px-4 rounded-3xl border border-white">react</span>
                <span className="px-4 rounded-3xl border border-white">vite</span>
                <span className="px-4 rounded-3xl border border-white">tailwindcss</span>
              </div>
            </div>
            <div className="w-auto text-sm flex items-center">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam voluptatem molestiae suscipit eos libero!
                Et amet laboriosam dolores, molestias esse impedit quisquam,
                officiis iusto aperiam quia, minima adipisci modi! Nulla.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}