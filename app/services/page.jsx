'use client';
import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const servicesOffered = [
  {
    num: '01',
    title: 'FE Development',
    description:
      'Crafting beautiful and intuitive user interfaces that bring your vision to life. Designing user journeys that engage and delight your audience.',
    href: '/contact',
  },
  {
    num: '02',
    title: 'BE Development',
    description:
      'Building the brains behind your apps - APIs, microservices, and secure data management. Powering your applications with robust and scalable backend solutions.',
    href: '/contact',
  },
  {
    num: '03',
    title: 'Shopify Growth Engineering',
    description:
      'Released a Shopify app for clients and helped them scale their businesses by up to 4x through Meta Pixel integration for data-driven sales, targeted advertising and ROAS optimization, and technical conversion rate engineering across the storefront and checkout journey.',
    href: '/contact',
  },
  {
    num: '04',
    title: 'AWS Deployment',
    description:
      'Seamlessly deploy your applications to the cloud using the power of AWS. Leveraging AWS for secure, scalable, and cost-effective deployments.',
    href: '/contact',
  },
  {
    num: '05',
    title: 'End-to-End Development & Deployment',
    description:
      'Streamlined development and deployment, taking your project from concept to launch. We handle the entire process, so you can focus on building great things.',
    href: '/contact',
  },
];
const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center pb-12 pt-16 xl:pb-0 xl:pt-12'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.3, ease: 'easeOut' },
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {servicesOffered.map((service, index) => {
            return (
              <div
                key={index}
                className='flex-1 flex flex-col justify-center gap-6 group'
              >
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover'>
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className='group/link flex h-[70px] w-[70px] cursor-default items-center justify-center rounded-full bg-background text-primary transition-colors duration-300 group-hover:bg-accent group-hover:text-background'
                  >
                    <BsArrowDownRight className='pointer-events-none text-3xl text-inherit transition-transform duration-300 group-hover/link:-rotate-45' />
                  </Link>
                </div>
                <h2 className={`font-bold leading-none text-foreground group-hover:text-accent transition-all duration-500 ${service.title === 'Shopify Growth Engineering' ? 'whitespace-nowrap text-[28px] xl:text-[34px]' : 'text-[42px]'}`}>
                  {service.title}
                </h2>
                <p className='text-muted'>{service.description}</p>
                <div className='border-b border-foreground w-full'></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
