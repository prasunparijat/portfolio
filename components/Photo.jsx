'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className='w-full h-full relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]'>
      <Image
        src='assets/photo.png'
        priority
        quality={100}
        fill
        alt=''
        className='object-contain rounded-full overflow-hidden'
      />
      <motion.svg
        className='w-[304px] h-[304px] xl:w-[510px] xl:h-[510px]'
        fill='transparent'
        viewBox='0 0 510 510'
        xmlns='https://www.w3.org/2000/svg'
      >
        <motion.circle
          cx='255'
          cy='255'
          r='255'
          stroke='#00ff99'
          strokeLinecap='round'
          strokeLinejoin='round'
          initial={{ strokeWidth: '0', strokeDasharray: '24 10 0 0' }}
          animate={{
            strokeWidth: ['0', '2', '4'],
            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
            rotate: [120, 360],
            transition: {
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            },
          }}
        ></motion.circle>
      </motion.svg>
    </div>
  );
};

export default Photo;
