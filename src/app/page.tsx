'use client';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Stars from '@/components/stars';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { useState } from 'react';
import { MdVerified } from 'react-icons/md';

const PRODUCTS = [
  {
    image: '/images/hero.webp',
    name: 'test',
    price: {
      afterPrice: 30,
      discount: {
        beforePrice: 54,
        discountPercent: 15,
      },
    },
    review: 5,
  },

  {
    image: '/images/hero.webp',
    name: 'test',
    price: {
      afterPrice: 30,
      discount: {
        beforePrice: 54,
        discountPercent: 15,
      },
    },
    review: 5,
  },

  {
    image: '/images/hero.webp',
    name: 'test',
    price: {
      afterPrice: 30,
      discount: {
        beforePrice: 54,
        discountPercent: 15,
      },
    },
    review: 5,
  },

  {
    image: '/images/hero.webp',
    name: 'test',
    price: {
      afterPrice: 30,
      discount: {
        beforePrice: 54,
        discountPercent: 15,
      },
    },
    review: 5,
  },
  // ... other products
];

interface Product {
  image: string;
  name: string;
  price: {
    afterPrice: number;
    discount?: {
      beforePrice: number;
      discountPercent: number;
    };
  };
  review: number;
}

const ProductCard = ({ product }: { product: Product }) => (
  <Card className="w-[250px] border">
    <CardHeader>
      <CardTitle className="flex">
        <Image
          src={product.image}
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
        <Stars value={product.review} withReview={true} />
        <div className="flex items-center gap-2">
          <div className="text-lg font-bold">${product.price.afterPrice}</div>
          {product.price.discount && (
            <>
              <div className="font-bold text-slate-400 line-through">
                ${product.price.discount.beforePrice}
              </div>
              <Badge className="" variant="discount">
                {product.price.discount.discountPercent}%
              </Badge>
            </>
          )}
        </div>
      </div>
    </CardFooter>
  </Card>
);

const SectionTitle = ({ title }: { title: string }) => (
  <center>
    <div className="text-3xl font-bold uppercase">{title}</div>
  </center>
);

const Home = () => {
  const [products] = useState(PRODUCTS);

  return (
    <div className="min-h-svh overflow-y-auto overflow-x-hidden pt-16">
      <Header />
      <main>
        <section className="flex flex-col items-center gap-4 bg-accent px-4 pt-6 md:px-16 md:pt-16 lg:flex-row lg:px-24">
          <div className="flex flex-1 flex-col items-start gap-4">
            <h1 className="text-5xl font-bold leading-[1] text-foreground lg:text-6xl">
              Fashion for Every Woman
            </h1>
            <p className="text-md text-muted-foreground md:w-[90%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis aliquam repudiandae quidem dolore accusamus quae
              beatae.
            </p>
            <Button className="w-full rounded-full py-6 md:w-[200px]">
              Shop Now
            </Button>
            <div className="flex w-full justify-between gap-4 divide-x-2 divide-muted-foreground/30 md:w-[80%] md:justify-normal">
              {Array.from({ length: 3 }).map((_, index) => (
                <div className="flex flex-col px-4" key={index}>
                  <span className="text-3xl font-medium text-foreground">
                    100+
                  </span>
                  <span className="text-md text-muted-foreground">
                    Products
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="min-h-[500px] flex-1 md:h-auto">
            <div className="relative min-h-[500px] w-full">
              <Image
                src="/images/hero.webp"
                alt="Hero Image"
                width={900}
                height={1348}
                className="mx-auto h-auto w-full md:h-[600px] md:w-auto"
              />
            </div>
          </div>
        </section>
        <div className="mt-32"></div>
        <div className="px-4 md:px-[18px] lg:px-[108px]">
          <SectionTitle title="new arrivals" />
          <div className="mt-8 flex items-center gap-2 overflow-auto">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          <center>
            <Button
              type="button"
              variant={'outline'}
              className="mt-10 w-56 rounded-full"
            >
              View All
            </Button>
          </center>
        </div>
        <div className="mt-8">
          <hr className="m-24 mb-16 border border-black opacity-10" />
        </div>
        <div className="px-4 md:px-[18px] lg:px-[108px]">
          <SectionTitle title="top selling" />
          <div className="mt-8 flex items-center gap-2 overflow-auto">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
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
        <Carousel>
          <div className="flex flex-col items-center justify-between gap-4 px-4 pt-6 md:px-16 md:pt-16 lg:flex-row lg:px-24">
            <div className="mb-10 text-center text-2xl font-bold md:text-4xl">
              OUR HAPPY CUSTOMERS
            </div>
            <div className="flex gap-3 md:gap-7">
              <CarouselPrevious className="static" />
              <CarouselNext className="static" />
            </div>
          </div>
          <div className="relative overflow-hidden">
            <CarouselContent className="px-4 md:px-[18px] lg:px-[108px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="">
                    <Card className="w-full">
                      <CardHeader>
                        <Stars value={4.5} />
                      </CardHeader>
                      <CardContent className="flex items-center">
                        <div className="text-lg font-bold">Dr. TONY</div>
                        <MdVerified className="text-2xl text-green-700" />
                      </CardContent>
                      <CardHeader className="text-sm font-normal">
                        Im blown away by the quality and style of the clothes I
                        received from Shop.co. From casual wear to elegant
                        dresses, every piece Ive bought has exceeded my
                        expectations.
                      </CardHeader>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
