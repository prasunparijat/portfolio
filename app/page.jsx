'use client';
import Photo from '@/components/Photo';
import Social from '@/components/Social';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import ColorPicker from '@/components/ColorPicker';
import { AppearSlideX, AppearSlideY } from './transitions';

const Home = () => {
  return (
    <section className='h-full xl:h-[calc(100vh-140px)] xl:overflow-hidden'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col justify-between items-center xl:gap-[10px] xl:flex-row xl:pb-8 xl:pt-0'>
          {/* text */}
          <div className='order-2 px-2 pt-8 text-center xl:order-none xl:w-1/2 xl:pl-8 xl:pt-16 xl:text-left'>
            <motion.p
              variants={AppearSlideX(2, -100)}
              initial='hidden'
              animate='visible'
              className='text-xl mb-1'
            >
              Software Developer
            </motion.p>
            <motion.h1
              variants={AppearSlideX(2.5, -100)}
              initial='hidden'
              animate='visible'
              className='h1 mb-6'
            >
              Hi I&apos;m <br />
              <span className='whitespace-nowrap text-accent'>Prasun P</span>
            </motion.h1>
            <motion.p
              variants={AppearSlideX(2.75, -100)}
              initial='hidden'
              animate='visible'
              className='max-w-[500px] mb-9 text-muted'
            >
              I&apos;m a creative problem solver with a knack for building innovative
              digital solutions
            </motion.p>
            {/* btns and socials */}
            <motion.div
              variants={AppearSlideX(3, -100)}
              initial='hidden'
              animate='visible'
              className='flex flex-col items-center gap-8 xl:items-start'
            >
              <div className='flex flex-col items-center xl:items-start'>
                <div className='flex items-center gap-6'>
                  <a
                  href='/assets/resume/resume.pdf'
                    target='_blank'
                  >
                    <Button
                      variant='outline'
                      className='uppercase flex gap-2 items-center'
                    >
                      <span>Download CV</span>
                      <FiDownload className='text-xl'></FiDownload>
                    </Button>
                  </a>

                  <Social
                    containerStyles='flex gap-4'
                    iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-background hover:transition-all duration-500'
                  />
                </div>
                <ColorPicker inline />
              </div>
            </motion.div>
            <motion.div
              variants={AppearSlideY(2.5, -50)}
              initial='hidden'
              animate='visible'
              className='mt-8 w-full'
            >
              <Stats />
            </motion.div>
          </div>
          {/* photo */}
          <motion.div
            variants={AppearSlideX(2.5, 100)}
            initial='hidden'
            animate='visible'
            className='order-1 mb-8 flex flex-col items-center pt-8 xl:order-none xl:mb-0 xl:w-1/2 xl:translate-x-24 xl:pt-16'
          >
            <Photo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
