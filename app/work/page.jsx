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
    category: 'Backend ',
    title: 'FUTY Mvp Backend',
    description:
      'Single game (football) fantasy BE including the following features: user login, email system, session-management, team submission, leaderboard, referral program & incentives, support, score calculation after getting events for specific events during the match from third party, automated slack alerts',
    stack: [{ name: 'Golang' }, { name: 'Sqlc' }, { name: 'PostgreSQL' }],
    img: '/assets/work/thumb1.png',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'Frontend',
    title: 'FUTY MVP Frontend',
    description:
      'Designed and implemented the complete frontend from scratch in svelte handling all the reactivity required for the dynamic nature of team creation and submission based on the logic decided by the product team',
    stack: [{ name: 'Svelte' }],
    img: '/assets/work/thumb2.png',
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'AWS Deployment',
    title: 'FUTY MVP Deployment',
    description:
      'Both FE and BE deployed on the EC2 instance and the domains hosted from hostinger and registered the cname from AWS. Load balancing for both the BE and FE services. DB accessible only from the private subnet created in the AWS and through remote ssh login.',
    stack: [{ name: 'AWS' }],
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
              {project.category}
            </div>
            <p className='text-white/80'>{project.title}</p>
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
                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full flex justify-center items-center bg-white/5 group border border-white hover:bg-accent transition-all duration-500'>
                      <BsArrowUpRight className='text-white text-3xl group-hover:text-primary group-hover:rotate-45 transition-all duration-500' />
                    </TooltipTrigger>
                    <TooltipContent>Live Project</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/* github button */}
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full flex justify-center items-center bg-white/5 group border border-white hover:bg-accent transition-all duration-500'>
                      <BsGithub className='text-white text-3xl group-hover:text-primary' />
                    </TooltipTrigger>
                    <TooltipContent>Github Repo</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          {/* photo slider */}
          <div className='w-full xl:w-[50%] '>
            <div className='top-0 z-[-2] bg-[#27272c] bg-[radial-gradient(#00ff9933_1px,#00091f_1px)] bg-[size:20px_20px]'>
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
                            src={item.img}
                            priority
                            quality={100}
                            fill
                            alt=''
                            className='object-contain rounded-xl'
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
      </div>
    </motion.div>
  );
};

export default Work;
