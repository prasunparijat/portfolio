'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className='w-full h-full relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]'>
      <Image
        src='/assets/photo.png'
        priority
        quality={100}
        fill
        alt=''
        className='object-contain  rounded-full overflow-hidden'
      />
      <motion.svg
        className='w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]'
        fill='transparent'
        viewBox='0 0 506 506'
        xmlns='https://www.w3.org/2000/svg'
      >
        <motion.circle
          cx='253'
          cy='253'
          r='253'
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
