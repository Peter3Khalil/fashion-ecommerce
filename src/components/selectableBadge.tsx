/* eslint-disable no-unused-vars */

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
      className={`w-fit cursor-pointer select-none rounded-full px-4 py-2 text-center transition-colors ${
        selected ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
      } ${spanProps.className ?? ''}`} // Append custom classes
    >
      {label}
    </span>
  );
};

export { SelectableBadge };
