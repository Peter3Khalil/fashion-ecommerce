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
>(({ name, image, price, review, className }) => {
  return (
    <Card className={cn('w-[250px] border', className)}>
      <CardHeader>
        <CardTitle className="flex">
          <Image
            src={image}
            alt={name}
            width={150}
            height={150}
            className="mx-auto h-auto w-full rounded-2xl object-contain md:w-auto"
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-lg font-bold capitalize">{name}</div>
      </CardContent>
      <CardFooter>
        <div className="block">
          <Star value={review} withReview={true} />
          <div className="flex items-center gap-2">
            <div className="text-lg font-bold">${price.afterPrice}</div>
            {price.discount && (
              <>
                <div className="font-bold text-slate-400 line-through">
                  ${price.discount.beforPrice}
                </div>
                <Badge className="" variant="discount">
                  {price.discount.discountPercent}%
                </Badge>
              </>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
});

Product.displayName = 'Product';

export default Product;
