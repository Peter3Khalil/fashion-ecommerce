'use client';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { SearchIcon } from '@/components/shared/icons';
import React, { useState } from 'react';

const SearchBox = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <form
      role="search"
      className={cn(
        'hidden h-10 flex-1 items-center rounded-full border bg-secondary lg:flex',
        {
          'ring-2 ring-ring ring-offset-2': isFocused,
        },
      )}
    >
      <SearchIcon size={24} className="ml-4 text-muted-foreground" />
      <Input
        type="search"
        aria-label="Search for products"
        className="rounded-[inherit] border-none bg-inherit focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Search for products..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            console.log(e.currentTarget.value);
          }
        }}
      />
    </form>
  );
};

export default SearchBox;
