'use client';
import { Description } from '@radix-ui/react-dialog';
import {
  FaNodeJs,
  FaHtml5,
  FaJs,
  FaJava,
  FaCss3,
  FaReact,
} from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { RiSvelteLine } from 'react-icons/ri';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const about = {
  title: 'About Me',
  description:
    'Lorem ababababaababbaabakjbdjAH aKJSbd jahBdmabd ahjsbdan dghjabfvajkndfhuya vwdfkjabnF a',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Prasun Parijat',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+91) 9515967416',
    },
    {
      fieldName: 'Experience',
      fieldValue: '2+ years',
    },
    {
      fieldName: 'Email',
      fieldValue: 'prasunparijatm@gmail.com',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Indian',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English , Hindi',
    },
    {
      fieldName: 'Love',
      fieldValue: 'Food , Anime',
    },
  ],
};

// experince data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description:
    'Lorem ajsbdkabsd ajsbnd kjabs asdjnakjs jkabnsdjkasdjk andsj aSd',
  items: [
    {
      company: 'FUTY',
      position: 'Technology Consultant',
      duration: 'Jan 2022 - Present',
    },
    {
      company: 'Cashfree Payments',
      position: 'Software Development Engineer',
      duration: 'June 2022 - Jan 2024',
    },
    {
      company: 'Cashfree Payments',
      position: 'Software Development Engineer - Intern',
      duration: 'Jan 2022 - June 2024',
    },
    {
      company: 'American Express',
      position: 'Software Engineer - Summer Intern',
      duration: 'May 2021 - June 2021',
    },
    {
      position: 'Software Engineer - Summer Intern',
      company: 'American Express',
      duration: 'May 2021 - June 2021',
    },
    {
      company: 'American Express',
      position: 'Software Engineer - Summer Intern',
      duration: 'May 2021 - June 2021',
    },
  ],
};

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description:
    'Lorem ajsbdkabsd ajsbnd kjabs asdjnakjs jkabnsdjkasdjk andsj aSd',
  items: [
    {
      institution: 'National Institute of Technology, Warangal',
      degree: 'Bachelors of Technology (B.Tech)',
      duration: 'Aug 2018 - May 2022',
    },
    {
      institution: 'Narayana Junior College',
      degree: 'Intermediate (10+2)',
      duration: 'Aug 2015 - May 2017',
    },
  ],
};

// skills data
const skills = {
  title: 'My Skills',
  description:
    'Lorem ajsbdkabsd ajsbnd kjabs asdjnakjs jkabnsdjkasdjk andsj aSd',
  items: [
    {
      icon: <FaGolang />,
      name: 'Golang',
    },
    {
      icon: <FaJs />,
      name: 'Js',
    },
    {
      icon: <FaJava />,
      name: 'Java',
    },
    {
      icon: <FaReact />,
      name: 'React',
    },
    {
      icon: <FaHtml5 />,
      name: 'Html5',
    },
    {
      icon: <FaCss3 />,
      name: 'Css3',
    },
    {
      icon: <SiTailwindcss />,
      name: 'TailwindCSS',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.Js',
    },
    {
      icon: <RiSvelteLine />,
      name: 'Svelte',
    },
    {
      icon: <FaNodeJs />,
      name: 'NodeJs',
    },
  ],
};

import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      className='min-h-[80vh] flex justify-center items-center py-12 xl:py-0'
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col gap-[60px] xl:flex-row'
        >
          <TabsList className='w-full max-w-[380px] mx-auto xl:mx-0 flex flex-col gap-6 '>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='about'>About Me</TabsTrigger>
          </TabsList>
          <div className='w-full min-h-[70vh]'>
            <TabsContent
              value='experience'
              className='w-full'
            >
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] rounded-lg py-6 px-10 h-[174px] flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] xl:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <div className='w-[6px] h-[6px] rounded-full bg-accent'></div>
                            <span className=' text-white/60'>
                              {item.company}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value='education'
              className='w-full'
            >
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] rounded-lg py-6 px-10 h-[174px] flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] xl:text-left'>
                            {item.degree}
                          </h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <div className='w-[6px] h-[6px] rounded-full bg-accent'></div>
                            <span className=' text-white/60'>
                              {item.institution}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value='skills'
              className='w-full'
            >
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {skills.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 xl:gap-[30px]'>
                    {skills.items.map((item, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='h-[150px] xl:h-[100px] w-full bg-[#232329] flex justify-center items-center rounded-xl group'>
                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                  {item.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className='capitalize'>{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value='about'
              className='w-full'
            >
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {about.description}
                </p>

                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0 xl:gap-[30px]'>
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='flex justify-center gap-4 xl:justify-start'
                      >
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
