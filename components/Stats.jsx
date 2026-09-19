'use client';

import CountUp from 'react-countup';
import {
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  GitCommitHorizontal,
} from 'lucide-react';

const statsArray = [
  {
    num: 5,
    suffix: '+',
    text: 'Years of experience',
    icon: BriefcaseBusiness,
  },
  {
    num: 12,
    suffix: '+',
    text: 'Projects completed',
    icon: FolderKanban,
  },

  {
    num: 15,
    suffix: '+',
    text: 'Technologies mastered',
    icon: Code2,
  },
  {
    num: 2500,
    suffix: '+',
    text: 'Code commits',
    icon: GitCommitHorizontal,
  },
];

const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
      <div className='container mx-auto flex justify-start'>
        <div className='grid w-full max-w-[680px] grid-cols-2 gap-3 sm:gap-5'>
          {statsArray.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                className='flex items-center gap-3 rounded-xl border border-foreground bg-surface px-3 py-3 sm:gap-4 sm:px-5 sm:py-4'
                key={index}
              >
                <Icon className='h-6 w-6 shrink-0 text-accent sm:h-7 sm:w-7' />
                <CountUp
                  end={stat.num}
                  suffix={stat.suffix}
                  duration={5}
                  delay={2}
                  className='text-2xl font-extrabold text-foreground sm:text-3xl'
                />
                <p
                  className='text-xs leading-tight text-muted sm:text-sm'
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
