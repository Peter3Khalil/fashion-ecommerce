'use client';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { ProductCard, SectionTitle } from '@/components/product';
import Stars from '@/components/stars';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Product } from '@/types/type';
import Image from 'next/image';
import { useState } from 'react';
import { MdVerified } from 'react-icons/md';

const PRODUCTS: Product[] = [
  {
    name: 'Test Product',
    price: 20,
    discount: 10,
    description: 'This is a sample description for the product.',
    Key: {
      categories: 'tshirt',
      colors: ['bg-blue-500', 'bg-red-500', 'bg-green-500'],
      dressStyle: 'casual',
      price: [10, 100],
      sizes: ['small', 'medium', 'large', 'x-large'],
    },
    photos: [
      '/images/hero.webp',
      '/images/hero.webp',
      '/images/hero.webp',
      '/images/hero.webp',
      '/images/hero.webp',
      '/images/hero.webp',
    ],
    review: [
      {
        CreatedAt: '2021-09-01',
        name: 'User1',
        rating: 4,
        review: 'Good product',
      },
      {
        CreatedAt: '2021-09-01',
        name: 'User2',
        rating: 3,
        review: 'Average product',
      },
      {
        CreatedAt: '2021-09-01',
        name: 'User3',
        rating: 5,
        review: 'Excellent product',
      },
      {
        CreatedAt: '2021-09-01',
        name: 'User4',
        rating: 5,
        review: 'Highly recommend',
      },
    ],
  },
  {
    name: 'Test Product',
    price: 20,
    discount: 10,
    description: 'This is a sample description for the product.',
    Key: {
      categories: 'tshirt',
      colors: ['bg-blue-500', 'bg-red-500', 'bg-green-500'],
      dressStyle: 'casual',
      price: [10, 100],
      sizes: ['small', 'medium', 'large', 'x-large'],
    },
    photos: [
      '/images/hero.webp',
      '/images/hero.webp',
      '/images/hero.webp',
      '/images/hero.webp',
      '/images/hero.webp',
      '/images/hero.webp',
    ],
    review: [
      {
        CreatedAt: '2021-09-01',
        name: 'User1',
        rating: 4,
        review: 'Good product',
      },
      {
        CreatedAt: '2021-09-01',
        name: 'User2',
        rating: 3,
        review: 'Average product',
      },
      {
        CreatedAt: '2021-09-01',
        name: 'User3',
        rating: 5,
        review: 'Excellent product',
      },
      {
        CreatedAt: '2021-09-01',
        name: 'User4',
        rating: 5,
        review: 'Highly recommend',
      },
    ],
  },
  {
    name: 'Test Product',
    price: 20,
    discount: 10,
    description: 'This is a sample description for the product.',
    Key: {
      categories: 'tshirt',
      colors: ['bg-blue-500', 'bg-red-500', 'bg-green-500'],
      dressStyle: 'casual',
      price: [10, 100],
      sizes: ['small', 'medium', 'large', 'x-large'],
    },
    photos: [
      '/images/hero.webp',
      '/images/hero.webp',
      '/images/hero.webp',
      '/images/hero.webp',
      '/images/hero.webp',
      '/images/hero.webp',
    ],
    review: [
      {
        CreatedAt: '2021-09-01',
        name: 'User1',
        rating: 4,
        review: 'Good product',
      },
      {
        CreatedAt: '2021-09-01',
        name: 'User2',
        rating: 3,
        review: 'Average product',
      },
      {
        CreatedAt: '2021-09-01',
        name: 'User3',
        rating: 5,
        review: 'Excellent product',
      },
      {
        CreatedAt: '2021-09-01',
        name: 'User4',
        rating: 5,
        review: 'Highly recommend',
      },
    ],
  },
  {
    name: 'Test Product',
    price: 20,
    discount: 10,
    description: 'This is a sample description for the product.',
    Key: {
      categories: 'tshirt',
      colors: ['bg-blue-500', 'bg-red-500', 'bg-green-500'],
      dressStyle: 'casual',
      price: [10, 100],
      sizes: ['small', 'medium', 'large', 'x-large'],
    },
    photos: [
      '/images/hero.webp',
      '/images/hero.webp',
      '/images/hero.webp',
      '/images/hero.webp',
      '/images/hero.webp',
      '/images/hero.webp',
    ],
    review: [
      {
        CreatedAt: '2021-09-01',
        name: 'User1',
        rating: 4,
        review: 'Good product',
      },
      {
        CreatedAt: '2021-09-01',
        name: 'User2',
        rating: 3,
        review: 'Average product',
      },
      {
        CreatedAt: '2021-09-01',
        name: 'User3',
        rating: 5,
        review: 'Excellent product',
      },
      {
        CreatedAt: '2021-09-01',
        name: 'User4',
        rating: 5,
        review: 'Highly recommend',
      },
    ],
  },
];

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
                priority={false}
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
