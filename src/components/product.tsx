import Star from '@/components/stars';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

type Products = {
  name: string;
  image: string;
  price: {
    discount?: {
      beforPrice: number;
      discountPercent: number;
    };
    afterPrice: number;
  };
  review: number;
};

const Product = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & Products
>(({ name, image, price, review, className }, ref) => {
  return (
    <Card
      ref={ref}
      className={cn(
        'w-[140px] rounded-xl border bg-white p-4 shadow-lg min-[425px]:w-[165px] md:w-[200px] lg:w-[250px]',
        className,
      )}
    >
      <CardHeader className="flex justify-center">
        <CardTitle className="flex items-center justify-center">
          <Image
            src={image}
            alt={name}
            width={150}
            height={150}
            className="mx-auto h-auto w-full rounded-xl object-contain"
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="text-lg font-bold capitalize">{name}</div>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-2">
        <Star value={review} withReview={true} />
        <div className="flex items-center gap-2 text-lg font-bold">
          <div className="text-black">${price.afterPrice}</div>
          {price.discount && (
            <>
              <div className="font-bold text-gray-400 line-through">
                ${price.discount.beforPrice}
              </div>
              <Badge className="rounded-full bg-red-500 px-2 py-1 text-xs text-white">
                {price.discount.discountPercent}%
              </Badge>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
});

Product.displayName = 'Product';

export default Product;
