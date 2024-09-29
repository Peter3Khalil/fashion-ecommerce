import SearchBox from '@/components/search-box';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@/components/shared/icons';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { FC } from 'react';

const Header: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <header
      className={cn(
        'fixed left-0 top-0 z-10 flex h-16 w-full items-center justify-between border-b bg-background px-4 text-foreground md:gap-12 lg:px-24',
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger className="md:hidden">
            <MenuIcon size={24} />
            <span className="sr-only">Open Menu</span>
          </SheetTrigger>
          <SheetContent side={'left'}>
            <nav className="mt-8">
              <ul className="flex flex-col text-lg">
                {['Home', 'Products', 'About', 'Contact'].map((item) => (
                  <li
                    key={item}
                    className="w-full rounded text-muted-foreground duration-300 hover:bg-accent hover:text-foreground"
                  >
                    <Link href="/" className="block w-full p-2">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" aria-label="Go to homepage">
          <div className="text-2xl font-bold">Logo</div>
        </Link>
      </div>
      <nav className="hidden md:block" aria-label="Main Navigation">
        <ul className="flex items-center gap-4 text-sm">
          {['Home', 'Products', 'About', 'Contact'].map((item) => (
            <li
              key={item}
              className="text-muted-foreground duration-300 hover:text-foreground"
            >
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <SearchBox />
      <div className="flex items-center">
        <Button
          variant={'ghost'}
          className="lg:hidden"
          size={'sm'}
          aria-label="Open Search"
        >
          <SearchIcon size={24} />
        </Button>
        <Button variant={'ghost'} size={'sm'} aria-label="View Shopping Cart">
          <ShoppingCartIcon size={24} />
        </Button>
        <Button variant={'ghost'} size={'sm'} aria-label="View User Account">
          <UserIcon size={24} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
