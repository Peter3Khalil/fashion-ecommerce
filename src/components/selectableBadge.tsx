/* eslint-disable no-unused-vars */

import { useState } from 'react';

type Properties = {
  label: React.ReactNode;
  onChange: (selected: boolean) => void; // Corrected prop type
};

const SelectableBadge = ({ label, onChange }: Properties) => {
  const [selected, setSelected] = useState(false);

  const toggleBadge = () => {
    const newState = !selected;
    setSelected(newState);
    onChange(newState); // Call onChange with the new state
  };

  return (
    <span
      onClick={toggleBadge} // Corrected to just reference the function
      className={`cursor-pointer select-none rounded-full px-4 py-2 text-center transition-colors ${
        selected ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
      }`}
    >
      {label}
    </span>
  );
};

export { SelectableBadge };
