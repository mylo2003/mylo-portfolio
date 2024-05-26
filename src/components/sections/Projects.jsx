import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation } from 'swiper/modules';
import { GeneralContext } from '../../context/GeneralContext';
import ExternalLinkSVG from '../icons/ExternalLinkSVG';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';

export default function Projects() {

  const { layoutInfo, personalProjects } = useContext(GeneralContext);

  const renderProject = (title, overview, url, screenshot, techs) => {
    return (
      <SwiperSlide className='flex flex-col items-center'>
        <div className=" z-10 translate-y-5 lg:translate-y-8 w-[270px] md:w-[550px] rounded-lg shadow">
          <a href={url} target='_blank'><img className="w-full h-full rounded-lg border object-cover transition-all hover:-translate-y-1" src={screenshot} alt={title} /></a>
        </div>
        <div className="w-[80%] relative lg:w-[75%] h-80 lg:h-56 flex flex-col justify-center lg:items-center lg:flex-row gap-5 px-7 bg-[#010409] text-white shadow shadow-gray-500 rounded-xl">
          <div className='lg:w-1/3'>
            <h2 className="lg:w-[300px] pl-5 lg:pl-0 md:text-left text-3xl md:text-5xl">{title}</h2>
            <div className="hidden lg:w-[350px] pt-5 px-2 lg:flex flex-wrap gap-1">
              {
                techs.map(tech => (
                  <span key={tech.id} className="px-3 rounded-3xl border border-white transition-all hover:bg-white hover:text-black">{tech.tech}</span>
                ))
              }
            </div>
          </div>
          <div className="lg:w-auto ml-5 lg:mt-5 lg:ml-7 text-sm flex flex-col">
            <p className='md:text-lg tracking-tight'>
              {overview}
            </p>
            <a className="absolute bottom-5 right-5" href={url} target='_blank'><ExternalLinkSVG /></a>
            <div className="w-full md:text-base pt-5 lg:hidden flex flex-wrap gap-1">
              {
                techs.map((tech) => (
                  <span key={tech.id} className="px-3 rounded-3xl border border-white transition-all hover:bg-white hover:text-black">{tech.tech}</span>
                ))
              }
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  };

  return (
    <div id="projects" className="max-w-5xl h-screen pt-20 bg-transparent mx-auto">
      <h2 className="text-white text-4xl md:text-5xl font-semibold text-center">{layoutInfo.projects}</h2>
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
        {
          personalProjects.map(project => renderProject(project.title, project.overview, project.url, project.screenshot, project.techs, project.id))
        }
      </Swiper>
    </div>
  );
}