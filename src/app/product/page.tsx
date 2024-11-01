'use client';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Price from '@/components/price';
import { SelectableBadge } from '@/components/selectableBadge';
import Stars from '@/components/stars';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Rating } from '@/lib/utils';
import { Product, Review } from '@/types/type';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  color: z.string().nonempty({ message: 'Please select a color' }),
  size: z.string().nonempty({ message: 'Please select a size' }),
});

function ProductPage() {
  const [product] = useState<Product>({
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
  });

  const [Quantity, setQuantity] = useState(1);
  const onQuantity = (e: string | number) => {
    setQuantity((prev) => (e === 'add' ? prev + 1 : Math.max(prev - 1, 1)));
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      color: product.Key?.colors[0] || '',
      size: product.Key?.sizes[0] || '',
    },
  });

  const [selectedColor, setSelectedColor] = useState<string>(
    form.getValues('color'),
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    form.getValues('size'),
  );
  const [selectedImage, setSelectedImage] = useState(product.photos[0]);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log('Selected Color:', data.color);
    console.log('Selected Size:', data.size);
  };

  return (
    <>
      <div className="min-h-screen px-4 pt-16 md:px-8 lg:px-20">
        <Header />
        <Breadcrumb className="my-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Casual</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Product</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col gap-8 md:flex-row">
          {/* Images Section */}
          <div className="flex flex-col gap-4 md:flex-row">
            {/* Thumbnails */}
            <div className="scrollbar-hide flex items-center space-x-2 overflow-x-auto md:max-h-[450px] md:flex-col md:space-x-0 md:space-y-2 md:overflow-y-auto">
              {product.photos.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  onClick={() => setSelectedImage(item)}
                  className="h-28 w-20 flex-shrink-0 cursor-pointer md:flex-shrink-0"
                >
                  <Image
                    src={item}
                    alt="Product Thumbnail"
                    width={85}
                    height={120}
                    className="h-full w-full rounded-md object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex w-full items-center justify-center md:w-auto">
              <Image
                src={selectedImage}
                alt="Selected Product Image"
                width={400}
                height={500}
                className="h-auto max-w-full rounded-md object-contain"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1 space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
            <Stars value={Rating(product.review as Review[])} withReview />
            <Price price={product.price} discount={product.discount ?? 0} />
            <p className="text-sm text-gray-600">{product.description}</p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <h2 className="text-lg font-semibold">Choose Options</h2>

                {/* Color Selection */}
                <FormField
                  control={form.control}
                  name="color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select Color</FormLabel>
                      <FormControl>
                        <div className="flex flex-wrap gap-2">
                          {product.Key?.colors.map((color) => (
                            <SelectableBadge
                              key={color}
                              checked={selectedColor === color}
                              onToggleBadge={(isSelected) => {
                                setSelectedColor(isSelected ? color : '');
                                field.onChange(isSelected ? color : '');
                              }}
                              className={`h-8 w-8 rounded-full ${color} ${selectedColor === color ? 'ring-2 ring-black' : ''}`}
                              label={undefined}
                            />
                          ))}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Size Selection */}
                <FormField
                  control={form.control}
                  name="size"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select Size</FormLabel>
                      <FormControl>
                        <div className="flex flex-wrap gap-2">
                          {product.Key?.sizes.map((size) => (
                            <SelectableBadge
                              key={size}
                              label={
                                size.charAt(0).toUpperCase() + size.slice(1)
                              }
                              checked={selectedSize === size}
                              onToggleBadge={(isSelected) => {
                                setSelectedSize(isSelected ? size : '');
                                field.onChange(isSelected ? size : '');
                              }}
                              className={`px-4 py-2 ${selectedSize === size ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'} text-sm`}
                            />
                          ))}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Quantity and Add to Cart */}
                <div className="flex flex-wrap items-center gap-8">
                  <div className="flex items-center gap-4 rounded-full bg-gray-100 p-2">
                    <Button
                      variant="ghost"
                      className="text-lg"
                      onClick={() => onQuantity('sub')}
                    >
                      -
                    </Button>
                    <span>{Quantity}</span>
                    <Button
                      variant="ghost"
                      className="text-lg"
                      onClick={() => onQuantity('add')}
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    variant="default"
                    className="w-full rounded-full md:w-60"
                    type="submit"
                  >
                    Add to cart
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
