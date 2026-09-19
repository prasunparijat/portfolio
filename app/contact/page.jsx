'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

import {
  Select,
  SelectContent,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectItem,
} from '@/components/ui/select';

import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const info = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'prasunparijatm@gmail.com',
    href: 'mailto:prasunparijatm@gmail.com',
  },

  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    description: 'Mumbai, India',
    href: 'https://www.google.com/maps/search/?api=1&query=Mumbai%2C%20India',
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.3, ease: 'easeOut' },
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px] xl:justify-between'>
          {/* form */}
          <form className='xl:w-[54%] order-2 xl:order-none flex flex-col gap-6 p-10 bg-surface rounded-xl  '>
            <div>
              <span className='text-accent text-4xl text-bold leading-none'>
                Let&apos;s work together
              </span>
              <p className='text-foreground'>
                Ready to craft something remarkable?
              </p>
              <p className='text-base text-muted'>
                Let&apos;s discuss how my skills and expertise can propel your
                project forward.
              </p>
            </div>
            {/* input */}
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
              <Input
                type='firstname'
                placeholder='Firstname'
              />
              <Input
                type='lastname'
                placeholder='Lastname'
              />
              <Input
                type='email'
                placeholder='Email Address'
              />
              <Input
                type='phone'
                placeholder='Phone Number'
              />
            </div>
            {/* select */}
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select a service'></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value='fd'>FE Development</SelectItem>
                  <SelectItem value='bd'>BE Development</SelectItem>
                  <SelectItem value='shopify'>Shopify Growth Engineering</SelectItem>
                  <SelectItem value='ad'>AWS Deployment</SelectItem>
                  <SelectItem value='ee'>End-to-End Development &amp; Deployment</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Textarea
              className='h-[200px]'
              placeholder='Type your message here'
            ></Textarea>
            <Button
              size='md'
              className='max-w-40'
            >
              Send Message
            </Button>
          </form>
          {/* info */}
          <div className='mb-8 flex items-center xl:justify-end'>
            <ul className='flex flex-col gap-10 xl:gap-20'>
              {info.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      target={item.title === 'Location' ? '_blank' : undefined}
                      rel={item.title === 'Location' ? 'noreferrer' : undefined}
                      className='group flex items-center gap-6'
                    >
                      <div className='flex h-[52px] w-[52px] items-center justify-center rounded-md bg-surface text-[28px] text-accent transition-colors group-hover:bg-accent group-hover:text-background xl:h-[72px] xl:w-[72px]'>
                        {item.icon}
                      </div>
                      <div>
                        <div className='text-muted'>{item.title}</div>
                        <div className='text-xl transition-colors group-hover:text-accent'>
                          {item.description}
                        </div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
