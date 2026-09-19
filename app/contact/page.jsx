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
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!notice) return undefined;

    const timeout = window.setTimeout(() => setNotice(null), 4000);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  const validateForm = (data) => {
    const nextErrors = {};
    const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phonePattern = /^\+?[\d\s().-]{7,20}$/;

    if (!data.firstname || data.firstname.length < 3) {
      nextErrors.firstname = 'First name must be at least 3 characters.';
    } else if (!namePattern.test(data.firstname)) {
      nextErrors.firstname = 'Please enter a valid first name.';
    }

    if (!data.lastname || data.lastname.length < 2) {
      nextErrors.lastname = 'Last name must be at least 2 characters.';
    } else if (!namePattern.test(data.lastname)) {
      nextErrors.lastname = 'Please enter a valid last name.';
    }

    if (!emailPattern.test(data.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (data.phone && !phonePattern.test(data.phone)) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }

    if (!service) {
      nextErrors.service = 'Please select a service.';
    }

    if (!data.message || data.message.length < 10) {
      nextErrors.message = 'Message must be at least 10 characters.';
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setNotice(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(
      [...new FormData(form).entries()].map(([key, value]) => [
        key,
        typeof value === 'string' ? value.trim() : value,
      ])
    );
    const validationErrors = validateForm(data);

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

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
      setErrors({});
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
            noValidate
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
            <div className='grid grid-cols-1 gap-6 xl:grid-cols-2'>
              <div>
                <label htmlFor='firstname' className='sr-only'>
                  First name
                </label>
                <div className='relative'>
                  <Input
                    id='firstname'
                    name='firstname'
                    type='text'
                    required
                    minLength={3}
                    aria-invalid={Boolean(errors.firstname)}
                    placeholder='Firstname'
                  />
                  <span className='pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-red-600' aria-hidden='true'>*</span>
                </div>
                {errors.firstname && <p className='mt-1 text-sm text-red-700'>{errors.firstname}</p>}
              </div>
              <div>
                <label htmlFor='lastname' className='sr-only'>
                  Last name
                </label>
                <div className='relative'>
                  <Input
                    id='lastname'
                    name='lastname'
                    type='text'
                    required
                    minLength={2}
                    aria-invalid={Boolean(errors.lastname)}
                    placeholder='Lastname'
                  />
                  <span className='pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-red-600' aria-hidden='true'>*</span>
                </div>
                {errors.lastname && <p className='mt-1 text-sm text-red-700'>{errors.lastname}</p>}
              </div>
              <div>
                <label htmlFor='email' className='sr-only'>
                  Email address
                </label>
                <div className='relative'>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    required
                    aria-invalid={Boolean(errors.email)}
                    placeholder='Email Address'
                  />
                  <span className='pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-red-600' aria-hidden='true'>*</span>
                </div>
                {errors.email && <p className='mt-1 text-sm text-red-700'>{errors.email}</p>}
              </div>
              <div>
                <label htmlFor='phone' className='sr-only'>
                  Phone number
                </label>
                <Input
                  id='phone'
                  name='phone'
                  type='tel'
                  aria-invalid={Boolean(errors.phone)}
                  placeholder='Phone Number (optional)'
                />
                {errors.phone && <p className='mt-1 text-sm text-red-700'>{errors.phone}</p>}
              </div>
            </div>
            {/* select */}
            <label htmlFor='service' className='sr-only'>
              Service
            </label>
            <Select
              name='service'
              value={service}
              onValueChange={(value) => {
                setService(value);
                setErrors((currentErrors) => {
                  const nextErrors = { ...currentErrors };
                  delete nextErrors.service;
                  return nextErrors;
                });
              }}
            >
              <SelectTrigger id='service' className='relative w-full'>
                <SelectValue placeholder='Select a service'></SelectValue>
                <span className='pointer-events-none absolute right-10 text-red-600' aria-hidden='true'>*</span>
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
            {errors.service && <p className='-mt-4 text-sm text-red-700'>{errors.service}</p>}
            <label htmlFor='message' className='sr-only'>
              Message
            </label>
            <div className='relative'>
              <Textarea
                id='message'
                className='h-[200px]'
                name='message'
                required
                minLength={10}
                aria-invalid={Boolean(errors.message)}
                placeholder='Type your message here'
              ></Textarea>
              <span className='pointer-events-none absolute right-4 top-3 text-red-600' aria-hidden='true'>*</span>
            </div>
            {errors.message && <p className='-mt-4 text-sm text-red-700'>{errors.message}</p>}
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
