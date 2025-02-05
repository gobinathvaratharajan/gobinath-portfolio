'use client';
import Link from 'next/link';
import Navigation from './navigation';

const Header = () => {
  return (
    <header className='container relative z-50 flex max-w-3xl flex-col'>
      <div className='top-0 z-10 pt-6'>
        <div className='flex gap-4'>
          <div className='flex'>
            <div>
              <Link href='/' className='font-serif text-2xl font-bold'>
                GV
              </Link>
            </div>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
