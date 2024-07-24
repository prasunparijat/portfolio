'use client';
import Photo from '@/components/Photo';
import Social from '@/components/Social';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { AppearSlideX, AppearSlideY } from './transitions';

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col justify-between items-center xl:gap-[10px] xl:flex-row xl:pb-24 xl:pt-8'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
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
              Hi I'm <br />
              <span className='text-accent'>Prasun Parijat</span>
            </motion.h1>
            <motion.p
              variants={AppearSlideX(2.75, -100)}
              initial='hidden'
              animate='visible'
              className='max-w-[500px] mb-9 text-white/80'
            >
              I'm a creative problem solver with a knack for building innovative
              digital solutions
            </motion.p>
            {/* btns and socials */}
            <motion.div
              variants={AppearSlideX(3, -100)}
              initial='hidden'
              animate='visible'
              className='flex flex-col xl:flex-row items-center gap-8'
            >
              <a
                href='assets/resume/resume.pdf'
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

              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles='flex gap-8'
                  iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                />
              </div>
            </motion.div>
          </div>
          {/* photo */}
          <motion.div
            variants={AppearSlideX(2.5, 100)}
            initial='hidden'
            animate='visible'
            className='order-1 xl:order-none mb-8 xl:mb-0 mix-blend-lighten'
          >
            <Photo />
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={AppearSlideY(2.5, -50)}
        initial='hidden'
        animate='visible'
      >
        <Stats />
      </motion.div>
    </section>
  );
};

export default Home;
