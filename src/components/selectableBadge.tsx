import { cn } from '@/lib/utils';
import { useState } from 'react';

interface Properties extends React.HTMLAttributes<HTMLSpanElement> {
  label: React.ReactNode;
  checked: boolean;
  onToggleBadge: (selected: boolean) => void;
}

const SelectableBadge = ({
  label,
  onToggleBadge,
  checked,
  ...spanProps
}: Properties) => {
  const [selected, setSelected] = useState(checked);

  const toggleBadge = () => {
    const newState = !selected;
    setSelected(newState);
    onToggleBadge(newState);
  };

  return (
    <span
      onClick={toggleBadge}
      {...spanProps} // Spread all standard span properties
      className={cn(
        'w-fit cursor-pointer select-none rounded-full px-4 py-2 text-center transition-colors duration-300 ease-in-out',
        {
          'bg-black text-white': selected,
          'bg-gray-200 text-gray-700': !selected,
        },
        spanProps.className,
      )} // Append custom classes
    >
      {label}
    </span>
  );
};

export { SelectableBadge };
