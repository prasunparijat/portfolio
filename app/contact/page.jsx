'use client';

import { useEffect, useState } from 'react';

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
  const [service, setService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    if (!notice) return undefined;

    const timeout = window.setTimeout(() => setNotice(null), 4000);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setNotice(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `New portfolio enquiry from ${data.firstname} ${data.lastname}`,
          from_name: `${data.firstname} ${data.lastname}`,
          ...data,
          service,
        }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to send your message.');
      }

      form.reset();
      setService('');
      setNotice({
        type: 'success',
        message: 'Message received successfully. I’ll get back to you soon.',
      });
    } catch (error) {
      setNotice({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
          <form
            onSubmit={handleSubmit}
            className='xl:w-[54%] order-2 xl:order-none flex flex-col gap-6 p-10 bg-surface rounded-xl'
          >
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
                name='firstname'
                type='text'
                required
                placeholder='Firstname'
              />
              <Input
                name='lastname'
                type='text'
                required
                placeholder='Lastname'
              />
              <Input
                name='email'
                type='email'
                required
                placeholder='Email Address'
              />
              <Input
                name='phone'
                type='tel'
                placeholder='Phone Number'
              />
            </div>
            {/* select */}
            <Select
              name='service'
              value={service}
              onValueChange={setService}
            >
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
              name='message'
              required
              placeholder='Type your message here'
            ></Textarea>
            <Button
              size='md'
              className='max-w-40'
              type='submit'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
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
      {notice && (
        <div
          role={notice.type === 'error' ? 'alert' : 'status'}
          className={`fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-lg border px-5 py-3 text-sm shadow-lg ${
            notice.type === 'success'
              ? 'border-accent bg-accent text-background'
              : 'border-red-700 bg-red-100 text-red-900'
          }`}
        >
          {notice.message}
        </div>
      )}
    </>
  );
};

export default Contact;
