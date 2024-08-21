import SearchBox from '@/components/search-box';
import { Button } from '@/components/ui/button';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@/components/shared/icons';
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-10 flex h-16 w-full items-center justify-between border-b px-4 text-foreground md:gap-12 md:px-16 lg:px-24">
      <div className="flex items-center gap-4">
        <MenuIcon size={24} className="md:hidden" />
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
