'use client';
import { motion } from 'framer-motion';
import ProfilePhoto from '../public/assets/photo.png';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className='relative aspect-[3/4] w-[300px] xl:w-[420px]'>
      <Image
        src={ProfilePhoto}
        priority
        quality={100}
        fill
        alt=''
        className='rounded-[4rem] object-contain object-center'
      />
      <motion.svg
        className='pointer-events-none absolute inset-0 h-full w-full'
        fill='transparent'
        viewBox='0 0 300 400'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.rect
          x='5'
          y='5'
          width='290'
          height='390'
          rx='62'
          stroke='var(--accent)'
          strokeLinecap='round'
          strokeLinejoin='round'
          initial={{ strokeWidth: '0', strokeDasharray: '24 10 0 0' }}
          animate={{
            strokeWidth: ['0', '2', '4'],
            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
            strokeDashoffset: [0, -800],
            transition: {
              duration: 12,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
