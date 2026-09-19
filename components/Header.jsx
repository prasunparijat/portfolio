import Link from 'next/link';
import { Button } from './ui/button';

// components
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='relative z-50 pb-8 pt-6 text-foreground xl:pb-10 xl:pt-8'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link href='/' className='flex shrink-0 items-center gap-3 whitespace-nowrap'>
          <span className='flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-sm font-bold text-background'>
            PP
          </span>
          <h1 className='whitespace-nowrap text-4xl font-bold'>
            Prasun<span className='text-accent'>.</span>P
          </h1>
        </Link>
        {/* desktop nav */}
        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          <Link href='/contact'>
            <Button>Contact</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className='xl:hidden'>
          <MobileNav />
        </div>
      </div>
      <div className='pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-60 shadow-[0_0_12px_var(--accent)]' />
    </header>
  );
};

export default Header;
