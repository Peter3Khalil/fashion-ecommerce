import Star from '@/components/stars';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

type Products = {
  ContainerTitle?: string;
  products: {
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
  }[];
};

const Product = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & Products
>(({ ContainerTitle, products }) => {
  return (
    <div className="px-4 md:px-[18px] lg:px-[108px]">
      <center>
        <div className="text-3xl font-bold uppercase">{ContainerTitle}</div>
      </center>
      <div className="mt-8 flex items-center gap-2 overflow-auto">
        {products.map((d, f) => (
          <Card key={f} className="min-w-[250px] border">
            <CardHeader>
              <CardTitle className="flex">
                <Image
                  src={d.image}
                  alt={d.name}
                  width={150}
                  height={150}
                  className="mx-auto h-auto w-full rounded-2xl object-contain md:w-auto"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold capitalize">{d.name}</div>
            </CardContent>
            <CardFooter>
              <div className="block">
                <Star value={d.review} withReview={true} />
                <div className="flex items-center gap-2">
                  <div className="text-lg font-bold">${d.price.afterPrice}</div>
                  {d.price.discount && (
                    <>
                      <div className="font-bold text-slate-400 line-through">
                        ${d.price.discount.beforPrice}
                      </div>
                      <Badge className="" variant="discount">
                        {d.price.discount.discountPercent}%
                      </Badge>
                    </>
                  )}
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <center>
        <Button
          type="button"
          variant={'outline'}
          className="mb-20 mt-10 w-56 rounded-full"
        >
          View All
        </Button>
      </center>
    </div>
  );
});

Product.displayName = 'Footer';

export default Product;
