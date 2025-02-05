import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import ThemeToggle from './theme-toggle';
import { ChevronDown, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const MobileNavItem = ({ href, children }: any) => {
    return (
      <DropdownMenuItem asChild>
        <Link href={href}>{children}</Link>
      </DropdownMenuItem>
    );
  };

  const NavItem = ({ href, children }: any) => {
    const isActive = usePathname() === href;

    return (
      <li>
        <Link
          href={href}
          className={cn(
            'relative block px-3 py-2 transition',
            isActive ? 'text-teal-500' : 'hover:text-teal-500'
          )}
        >
          {children}
        </Link>
      </li>
    );
  };

  const MobileNavigation = ({ className }: any) => {
    return (
      <span className={className}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost'>
              Menu
              <ChevronDown className='mr-2 h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='start' className='w-64 space-y-2 p-4'>
            <div className='flex items-center justify-between'>
              <span className='text-gray-500'>Navigation</span>
              <Button variant='ghost' size='icon' className='p-1'>
                <X className='h-5 w-5' />
              </Button>
            </div>
            <MobileNavItem href='/about'>About</MobileNavItem>
            <MobileNavItem href='/posts'>Articles</MobileNavItem>
            <MobileNavItem href='/projects'>Projects</MobileNavItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </span>
    );
  };

  const DesktopNavigation = ({ className }: any) => {
    return (
      <span className={className}>
        <nav>
          <ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg dark:bg-zinc-800 dark:text-zinc-200'>
            <NavItem href='/about'>About</NavItem>
            <NavItem href='/posts'>Articles</NavItem>
            <NavItem href='/projects'>Projects</NavItem>
          </ul>
        </nav>
      </span>
    );
  };

  return (
    <>
      <div className='flex flex-1 justify-end backdrop-blur-sm md:justify-center'>
        <MobileNavigation className='md:hidden' />
        <DesktopNavigation className='hidden md:block' />
      </div>
      <ThemeToggle />
    </>
  );
};

export default Navigation;
