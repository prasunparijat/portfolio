'use client';

import { useEffect, useRef, useState } from 'react';
import { Palette, RotateCcw } from 'lucide-react';

const defaults = {
  primary: '#f97316',
  background: '#fff1e6',
};

const applyColors = (colors) => {
  const root = document.documentElement;
  root.style.setProperty('--primary', colors.primary);
  root.style.setProperty('--accent', colors.primary);
  root.style.setProperty('--accent-hover', colors.primary);
  root.style.setProperty('--background', colors.background);
};

export default function ColorPicker({ inline = false }) {
  const pickerRef = useRef(null);
  const [colors, setColors] = useState(defaults);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('portfolio-colors');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const nextColors = { ...defaults, ...parsed };
        setColors(nextColors);
        applyColors(nextColors);
      } catch {
        applyColors(defaults);
      }
    } else {
      applyColors(defaults);
    }
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const closeOnOutsideClick = (event) => {
      if (!pickerRef.current?.contains(event.target)) setOpen(false);
    };

    document.addEventListener('mousedown', closeOnOutsideClick);
    return () => document.removeEventListener('mousedown', closeOnOutsideClick);
  }, [open]);

  const updateColor = (name, value) => {
    const nextColors = { ...colors, [name]: value };
    setColors(nextColors);
    applyColors(nextColors);
    window.localStorage.setItem('portfolio-colors', JSON.stringify(nextColors));
  };

  const resetColors = () => {
    setColors(defaults);
    applyColors(defaults);
    window.localStorage.removeItem('portfolio-colors');
  };

  return (
    <div
      ref={pickerRef}
      onClick={(event) => {
        if (event.target === event.currentTarget) setOpen((isOpen) => !isOpen);
      }}
      className={inline ? 'relative mt-3' : 'fixed bottom-6 right-6 z-50'}
    >
      {open && (
        <div data-color-panel className={`${inline ? 'absolute left-0 top-full mt-3' : 'mb-3'} z-10 w-64 rounded-xl border border-foreground bg-surface p-4 text-sm shadow-xl`}>
          <p className='mb-3 font-semibold text-foreground'>Customize colors</p>
          <label className='mb-3 flex items-center justify-between gap-3 text-muted'>
            Accent
            <input
              aria-label='Accent color'
              type='color'
              value={colors.primary}
              onChange={(event) => updateColor('primary', event.target.value)}
              className='h-8 w-12 cursor-pointer rounded border-0 bg-transparent p-0'
            />
          </label>
          <label className='flex items-center justify-between gap-3 text-muted'>
            Background
            <input
              aria-label='Background color'
              type='color'
              value={colors.background}
              onChange={(event) => updateColor('background', event.target.value)}
              className='h-8 w-12 cursor-pointer rounded border-0 bg-transparent p-0'
            />
          </label>
          <button
            type='button'
            onClick={resetColors}
            className='mt-4 flex items-center gap-2 text-xs text-muted transition-colors hover:text-accent'
          >
            <RotateCcw size={13} /> Reset palette
          </button>
        </div>
      )}
      <button
        type='button'
        aria-label='Toggle color picker'
        aria-expanded={open}
        title='Customize accent and background colors'
        onClick={() => setOpen((isOpen) => !isOpen)}
        className={inline ? 'flex items-center gap-2 rounded-full border border-accent px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-background' : 'flex h-12 w-12 items-center justify-center rounded-full bg-accent text-background shadow-lg transition-transform hover:scale-105'}
      >
        <Palette size={21} />
        {inline && <span>Change theme colors</span>}
      </button>
    </div>
  );
}
