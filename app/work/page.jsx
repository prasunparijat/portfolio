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
    category: 'Backend',
    title: 'FUTY MVP Backend',
    description:
      'A production-minded fantasy football backend covering authentication, email, session management, team submission, leaderboards, referrals, support workflows, event-driven score calculation, and automated Slack alerts.',
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
      'Designed and built the Svelte frontend from scratch, including the reactive team creation and submission flows required by the product rules and live game experience.',
    stack: [{ name: 'Svelte' }],
    img: '/assets/work/thumb2.png',
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'AWS Deployment',
    title: 'FUTY MVP AWS Deployment',
    description:
      'Deployed the frontend and backend on AWS EC2, configured Hostinger domains and CNAME records, added load balancing, and isolated the database in a private subnet with controlled SSH access.',
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
        transition: { delay: 0.2, duration: 0.3, ease: 'easeOut' },
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
            <div className='text-foreground font-bold leading-none transition-all duration-500 text-[42px] capitalise group-hover:text-accent'>
              {project.category}
            </div>
            <p className='text-foreground'>{project.title}</p>
            <p className='text-muted'>{project.description}</p>
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
            <div className='border border-foreground'></div>
            {/* buttons */}
            <div className='flex items-center gap-4'>
              {/* live project button */}
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] cursor-default rounded-full flex justify-center items-center bg-surface group border border-foreground hover:bg-accent transition-colors duration-300'>
                      <BsArrowUpRight className='pointer-events-none text-foreground text-3xl group-hover:text-background group-hover:rotate-45 transition-all duration-500' />
                    </TooltipTrigger>
                    <TooltipContent>Live Project</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/* github button */}
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] cursor-default rounded-full flex justify-center items-center bg-surface group border border-foreground hover:bg-accent transition-colors duration-300'>
                      <BsGithub className='pointer-events-none text-foreground text-3xl group-hover:text-background' />
                    </TooltipTrigger>
                    <TooltipContent>Github Repo</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          {/* photo slider */}
          <div className='w-full xl:w-[50%] '>
            <div className='top-0 z-[-2] bg-surface bg-[radial-gradient(var(--accent)_1px,var(--background)_1px)] bg-[size:20px_20px]'>
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
                  btnStyles='w-[44px] h-[44px] text-[22px] text-background bg-accent flex justify-center items-center'
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
