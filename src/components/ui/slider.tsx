/* eslint-disable no-unused-vars */

import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

import { cn } from '@/lib/utils';

interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  range?: boolean;
  value?: number[]; // Controlled value
  onValueChange?: (value: number[]) => void; // Callback to pass value change
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      className,
      range = false,
      value = range ? [20, 80] : [50], // Controlled value (default fallback)
      onValueChange,
      ...props
    },
    ref,
  ) => {
    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          'relative mb-3 flex w-full touch-none select-none items-center',
          className,
        )}
        value={value} // Use controlled value
        onValueChange={onValueChange} // Trigger the callback on change
        {...props}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        {range ? (
          <>
            {/* First thumb for the lower bound of the range */}
            <SliderPrimitive.Thumb className="relative block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              <div className="absolute top-6 text-xs">{value[0]}</div>
            </SliderPrimitive.Thumb>

            {/* Second thumb for the upper bound of the range */}
            <SliderPrimitive.Thumb className="relative block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              <div className="absolute top-6 text-xs">{value[1]}</div>
            </SliderPrimitive.Thumb>
          </>
        ) : (
          <SliderPrimitive.Thumb className="relative block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            <div className="absolute top-6 text-xs">{value[0]}</div>
          </SliderPrimitive.Thumb>
        )}
      </SliderPrimitive.Root>
    );
  },
);

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
