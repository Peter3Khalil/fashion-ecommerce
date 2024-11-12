import Price from '@/components/price';
import { default as Star, default as Stars } from '@/components/stars';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn, DiscountCalc, Rating } from '@/lib/utils';
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

export const ProductCard = ({ product }: { product: Product }) => (
  <Card className="w-[250px] border">
    <CardHeader>
      <CardTitle className="flex">
        <Image
          src={product.photos[0]}
          alt={product.name}
          width={150}
          height={150}
          className="mx-auto h-auto w-full rounded-2xl object-contain md:w-auto"
        />
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-lg font-bold capitalize">{product.name}</div>
    </CardContent>
    <CardFooter>
      <div className="block">
        <Stars value={Rating(product.review as Review[])} withReview={true} />
        <div className="flex items-center gap-2">
          <div className="text-lg font-bold">
            ${DiscountCalc(product.price, product.discount ?? 0)}
          </div>
          {product.discount && (
            <>
              <div className="font-bold text-slate-400 line-through">
                ${product.price}
              </div>
              <Badge className="" variant="discount">
                {product.discount}%
              </Badge>
            </>
          )}
        </div>
      </div>
    </CardFooter>
  </Card>
);

export const SectionTitle = ({ title }: { title: string }) => (
  <center>
    <div className="text-3xl font-bold uppercase">{title}</div>
  </center>
);

export default Product;
