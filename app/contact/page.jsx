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

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+91) 9515967416',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'prasunparijatm@gmail.com',
  },

  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    description: 'Mumbai, India',
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px] xl:justify-between'>
          {/* form */}
          <form className='xl:w-[54%] order-2 xl:order-none flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl  '>
            <h3 className='text-accent text-4xl'>Let's work together</h3>
            <p className='text-white/60'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              itaque dolorum expedita sit earum aliquid possimus quidem
            </p>
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
                <SelectValue placeholder='Select a trigger'></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value='wd'>Web Development</SelectItem>
                  <SelectItem value='bd'>Backend Development</SelectItem>
                  <SelectItem value='ad'>AWS Deployment</SelectItem>
                  <SelectItem value='ld'>Logo Design</SelectItem>
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
                  <li
                    key={index}
                    className='flex items-center gap-6'
                  >
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] flex justify-center items-center rounded-md text-[28px] text-accent'>
                      {item.icon}
                    </div>
                    <div>
                      <div className='text-white/60'>{item.title}</div>
                      <div className='text-xl'>{item.description}</div>
                    </div>
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
