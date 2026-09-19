'use client';
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
import {
  SiAmazonaws,
  SiCplusplus,
  SiDocker,
  SiFacebook,
  SiGit,
  SiGraphql,
  SiKotlin,
  SiKubernetes,
  SiNextdotjs,
  SiPython,
  SiPostgresql,
  SiRedis,
  SiShopify,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const about = {
  title: 'About Me',
  description:
    'Software developer and technology consultant focused on building reliable products, thoughtful user experiences, and scalable systems from idea to deployment.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Prasun Parijat',
    },
    {
      fieldName: 'Experience',
      fieldValue: '5+ years',
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

// experience data
const experience = {
  icon: 'assets/resume/badge.svg',
  title: 'My Experience',
  description:
    'Software engineer building high-scale backend systems, developer platforms, observability tooling, and product infrastructure across fintech, SaaS, and consumer applications.',
  items: [
    {
      company: 'Amazon, Bangalore',
      position: 'Software Development Engineer II',
      duration: 'Jan 2026 - Present',
      summary:
        'Built a caching backend system that reduced legacy API latency by 32% and strengthened integration-test coverage for production services.',
    },
    {
      company: 'Energy Digital Labs (Remote)',
      position: 'Software Engineer II',
      duration: 'July 2025 - Jan 2026',
      summary:
        'Built OpenTelemetry monitoring infrastructure, reducing incident turnaround from days to hours; optimized queries and WebSocket flows by roughly 85% using data loaders, indexes, materialized views, and caching.',
    },
    {
      company: 'FUTY, Mumbai (Remote)',
      position: 'Senior Software Engineer (Acting CTO)',
      duration: 'June 2024 - July 2025',
      summary:
        'Managed a 10+ member engineering team, led infrastructure and delivery, reduced development costs by 80%, improved execution efficiency by 40%, and delivered database optimizations achieving up to 90% faster execution on complex queries.',
    },
    {
      company: 'FUTY, Mumbai (Remote)',
      position: 'Software Engineer (Founding Engineer)',
      duration: 'Jan 2024 - June 2024',
      summary:
        'Led technical execution for the MVP launch and onboarding of 2,000 initial users, while engineering backend systems for a high-traffic React Native application supporting more than 80,000 users.',
    },
    {
      company: 'Cashfree Payments, Bangalore',
      position: 'Software Engineer',
      duration: 'June 2022 - Jan 2024',
      summary:
        'Delivered payment and merchant platform capabilities, including UPI Collect improvements, Customer Split, analytics, lead generation, session management, webhooks, Java/Python SDKs, and developer tooling used by 3,000+ merchants.',
    },
    {
      company: 'Cashfree Payments, Bangalore',
      position: 'Software Engineer Intern',
      duration: 'Jan 2022 - June 2022',
      summary:
        'Contributed to production engineering initiatives and built a foundation in backend services, payment workflows, and collaborative software delivery.',
    },
    {
      company: 'American Express, Hyderabad (Remote)',
      position: 'Software Engineer Intern',
      duration: 'May 2021 - June 2021',
      summary:
        'Delivered a final presentation to senior leadership on cloud service providers for Indian operations, reducing infrastructure costs by 5%.',
    },
  ],
};

// education data
const education = {
  icon: 'assets/resume/cap.svg',
  title: 'My Education',
  description:
    'A foundation in computer science and hands-on experience across product engineering, frontend development, backend systems, and cloud deployment.',
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
    'Backend and product engineering across Java, Kotlin, Go, JavaScript, TypeScript, Python, C/C++, SQL, GraphQL, REST, WebSockets, AWS, Kubernetes, Docker, Redis, and PostgreSQL.',
  items: [
    {
      icon: <FaGolang />,
      name: 'Golang',
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
    },
    {
      icon: <FaJava />,
      name: 'Java',
    },
    {
      icon: <SiKotlin />,
      name: 'Kotlin',
    },
    {
      icon: <SiTypescript />,
      name: 'TypeScript',
    },
    {
      icon: <SiPython />,
      name: 'Python',
    },
    {
      icon: <SiCplusplus />,
      name: 'C/C++',
    },
    {
      icon: <FaReact />,
      name: 'React',
    },
    {
      icon: <FaHtml5 />,
      name: 'HTML5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS3',
    },
    {
      icon: <SiTailwindcss />,
      name: 'TailwindCSS',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
    },
    {
      icon: <RiSvelteLine />,
      name: 'Svelte',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js',
    },
    {
      icon: <SiAmazonaws />,
      name: 'AWS',
    },
    {
      icon: <SiPostgresql />,
      name: 'PostgreSQL',
    },
    {
      icon: <SiGraphql />,
      name: 'GraphQL',
    },
    {
      icon: <SiRedis />,
      name: 'Redis',
    },
    {
      icon: <SiKubernetes />,
      name: 'Kubernetes',
    },
    {
      icon: <SiDocker />,
      name: 'Docker',
    },
    {
      icon: <SiGit />,
      name: 'Git',
    },
    {
      icon: <SiShopify />,
      name: 'Shopify',
    },
    {
      icon: <SiFacebook />,
      name: 'Meta Pixel',
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
import { AppearSlideY } from '../transitions';

const Resume = () => {
  return (
    <motion.div
      className='min-h-[80vh] flex justify-center items-center py-12 xl:py-0'
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.3, ease: 'easeOut' },
      }}
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col gap-[60px] xl:flex-row'
        >
          <TabsList className='w-full max-w-[380px] mx-auto xl:mx-0 flex flex-col gap-6 '>
            <motion.div
              variants={AppearSlideY(0.1, 24)}
              initial='hidden'
              animate='visible'
              className='w-full'
            >
              <TabsTrigger value='experience'>Experience</TabsTrigger>
            </motion.div>
            <motion.div
              variants={AppearSlideY(0.15, 24)}
              initial='hidden'
              animate='visible'
              className='w-full'
            >
              <TabsTrigger value='skills'>Skills</TabsTrigger>
            </motion.div>
            <motion.div
              variants={AppearSlideY(0.2, 24)}
              initial='hidden'
              animate='visible'
              className='w-full'
            >
              <TabsTrigger value='education'>Education</TabsTrigger>
            </motion.div>
            <motion.div
              variants={AppearSlideY(0.25, 24)}
              initial='hidden'
              animate='visible'
              className='w-full'
            >
              <TabsTrigger value='about'>About Me</TabsTrigger>
            </motion.div>
          </TabsList>
          <div className='w-full min-h-[70vh]'>
            <TabsContent
              value='experience'
              className='w-full'
            >
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold w-'>{experience.title}</h3>
                <p className='max-w-[600px] text-muted mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-surface rounded-lg py-6 px-10 min-h-[210px] flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl min-h-[60px] lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <div className='w-[6px] h-[6px] rounded-full bg-accent'></div>
                            <span className=' text-muted'>
                              {item.company}
                            </span>
                          </div>
                          <p className='mt-2 max-w-[360px] text-center text-sm leading-snug text-muted lg:text-left'>
                            {item.summary}
                          </p>
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
                <p className='max-w-[600px] text-muted mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-surface rounded-lg py-6 px-10 h-[174px] flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] xl:text-left'>
                            {item.degree}
                          </h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <div className='w-[6px] h-[6px] rounded-full bg-accent'></div>
                            <span className=' text-muted'>
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
                <p className='max-w-[600px] text-muted mx-auto xl:mx-0'>
                  {skills.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 xl:gap-[30px]'>
                    {skills.items.map((item, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='h-[150px] xl:h-[100px] w-full bg-surface flex justify-center items-center rounded-xl group'>
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
                <p className='max-w-[600px] text-muted mx-auto xl:mx-0'>
                  {about.description}
                </p>

                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0 xl:gap-[30px]'>
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='flex justify-center gap-4 xl:justify-start'
                      >
                        <span className='text-muted'>{item.fieldName}</span>
                        {item.fieldName === 'Email' ? (
                          <a
                            href='mailto:prasunparijatm@gmail.com'
                            className='text-xl transition-colors hover:text-accent'
                          >
                            {item.fieldValue}
                          </a>
                        ) : (
                          <span className='text-xl'>{item.fieldValue}</span>
                        )}
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
