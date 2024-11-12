import { Badge } from '@/components/ui/badge';
import { DiscountCalc } from '@/lib/utils';
import { DiscountCalcType } from '@/types/type';
import React from 'react';

const Price: React.FC<DiscountCalcType> = ({ price, discount }) => {
  return (
    <div className="flex items-center gap-2 text-lg font-bold">
      <div className="text-black">${price}</div>
      {discount != 0 && (
        <>
          <div className="font-bold text-gray-400 line-through">
            ${DiscountCalc(price, discount)}
          </div>
          <Badge className="rounded-full px-2 py-1 text-xs">{discount}%</Badge>
        </>
      )}
    </div>
  );
};

export default Price;
