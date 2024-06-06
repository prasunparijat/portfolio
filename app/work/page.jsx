'use client';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import WorkerSliderButtons from '@/components/WorkerSliderButtons';

const projects = [
  {
    num: '01',
    category: 'Frontend',
    title: 'Commerce App',
    description: 'Lorem loremlorem lorem l;oeremn aKDN nAKSdn ',
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'Js' }],
    img: '/assets/work/thumb1.png',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'Backend',
    title: 'FUTY BAckend',
    description: 'Lorem loremlorem lorem l;oeremn aKDN nAKSdn ',
    stack: [{ name: 'Golang' }, { name: 'Postgresql' }],
    img: '/assets/work/thumb2.png',
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'FullStack',
    title: 'FUTY Kanban',
    description: 'Lorem loremlorem lorem l;oeremn aKDN nAKSdn ',
    stack: [{ name: 'React' }, { name: 'Css 3' }, { name: 'Js' }],
    img: '/assets/work/thumb3.png',
    live: '',
    github: '',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex flex-col py-12 justify-center xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] order-2 xl:order-none xl:h-[460px] flex flex-col xl:justify-between gap-[30px] h-[50%]'>
            <div className='text-8xl text-transparent text-outline font-extrabold'>
              {project.num}
            </div>
            {/* project description */}
            <div className='text-white font-bold leading-none transition-all duration-500 text-[42px] capitalise group-hover:text-accent'>
              {project.category} project
            </div>
            <p className='text-white/60'>{project.description}</p>
            <ul className='flex gap-4'>
              {project.stack.map((item, index) => {
                return (
                  <li
                    key={index}
                    className='text-xl text-accent'
                  >
                    {item.name}
                    {index !== project.stack.length - 1 && ', '}
                  </li>
                );
              })}
            </ul>
            <div className='border border-white/20'></div>
            {/* buttons */}
            <div className='flex items-center gap-4'>
              {/* live project button */}
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full flex justify-center items-center bg-white/5 group border border-white'>
                      <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                    </TooltipTrigger>
                    <TooltipContent>Live Project</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/* github button */}
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full flex justify-center items-center bg-white/5 group border border-white'>
                      <BsGithub className='text-white text-3xl group-hover:text-accent' />
                    </TooltipTrigger>
                    <TooltipContent>Github Repo</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          {/* photo slider */}
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className='w-full'
                  >
                    <div className='h-[460px] relative group flex justify-center items-center'>
                      {/* overlay */}
                      <div className='absolute top-0 bottom-0 h-full w-full bg-black/10 z-10'></div>
                      {/* image */}
                      <div className='w-full h-full relative'>
                        <Image
                          src={project.img}
                          priority
                          quality={100}
                          fill
                          alt=''
                          className='object-cover rounded-xl'
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkerSliderButtons
                containerStyles='flex gap-2 justify-between absolute bottom-[calc(50%_-_22px)] w-full z-20 right-0 xl:justify-none xl:w-max xl:bottom-0'
                btnStyles='w-[44px] h-[44px] text-[22px] text-primary bg-accent flex justify-center items-center'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
