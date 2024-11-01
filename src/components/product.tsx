import Price from '@/components/price';
import Star from '@/components/stars';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn, Rating } from '@/lib/utils';
import type { Product, Review } from '@/types/type';
import Image from 'next/image';
import React from 'react';

const Product = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & Product
>(({ name, price, review, className, photos, discount }, ref) => {
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
            src={photos[0]}
            alt={name}
            width={150}
            height={150}
            className="mx-auto h-auto w-full rounded-xl object-contain"
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="text-start">
        <div className="text-lg font-bold capitalize">{name}</div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2">
        <Star value={Rating(review as Review[])} withReview={true} />
        <Price price={price} discount={discount ?? 0} />
      </CardFooter>
    </Card>
  );
});

Product.displayName = 'Product';

export default Product;
