'use client';

import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0, duration: 0.6, ease: 'easeInOut' },
          }}
          className='h-screen w-screen bg-primary top-0 fixed pointer-events-none'
        />
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { delay: 0, duration: 0.5 } }}
          className='fixed inset-0 z-50 flex items-center justify-center pointer-events-none'
        >
          <span className='h-2 w-2 animate-pulse rounded-full bg-background' />
          <span className='mx-1 h-2 w-2 animate-pulse rounded-full bg-background [animation-delay:120ms]' />
          <span className='h-2 w-2 animate-pulse rounded-full bg-background [animation-delay:240ms]' />
        </motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
