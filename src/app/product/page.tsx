'use client';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Price from '@/components/price';
import { ProductCard } from '@/components/product';
import RatingProduct from '@/components/Rating';
import { SelectableBadge } from '@/components/selectableBadge';
import { Edit2Icon, MoreVertical, Trash2 } from '@/components/shared/icons';
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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Rating } from '@/lib/utils';
import { Product } from '@/types/type';
import { zodResolver } from '@hookform/resolvers/zod';
import { TabsTrigger } from '@radix-ui/react-tabs';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdVerified } from 'react-icons/md';
import { z } from 'zod';

const formSchema = z.object({
  color: z.string().min(1, { message: 'Please select a color' }),
  size: z.string().min(1, { message: 'Please select a size' }),
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
    photos: Array(6).fill('/images/hero.webp'),
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

  const [relatedProducts] = useState<Product[]>([
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
      photos: Array(6).fill('/images/hero.webp'),
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
      photos: Array(6).fill('/images/hero.webp'),
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
  ]);

  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState('review');
  const [selectedColor, setSelectedColor] = useState<string>(
    product.Key?.colors[0] ?? '',
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product.Key?.sizes[0] ?? '',
  );
  const [selectedImage, setSelectedImage] = useState(product.photos[0]);
  const [starsRating, setStarsRaiting] = useState(0);
  const [comment, setComment] = useState('');

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
    },
  });

  const onQuantityChange = (type: 'add' | 'sub') => {
    setQuantity((prev) => (type === 'add' ? prev + 1 : Math.max(prev - 1, 1)));
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    // Handle selected color
    // Handle selected size
  };
  const onReview = () => {
    console.log(starsRating, 'stars');
    console.log(comment, 'stars');
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
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="scrollbar-hide flex items-center space-x-2 overflow-x-auto md:max-h-[500px] md:flex-col md:space-x-0 md:space-y-2 md:overflow-y-auto">
              {product.photos.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  onClick={() => setSelectedImage(item)}
                  className="h-32 w-24 flex-shrink-0 cursor-pointer md:flex-shrink-0"
                >
                  <Image
                    src={item}
                    alt="Product Thumbnail"
                    width={96}
                    height={128}
                    className="h-full w-full rounded-md object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="w-full md:w-auto">
              <Image
                src={selectedImage}
                alt="Selected Product Image"
                width={400}
                height={500}
                className="h-[29rem] w-96 rounded-md object-contain"
              />
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
            <Stars value={Rating(product.review ?? [])} withReview />
            <Price
              price={product.price}
              discount={product.discount as number}
            />
            <p className="text-sm text-gray-600">{product.description}</p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <h2 className="text-lg font-semibold">Choose Options</h2>

                <FormField
                  control={form.control}
                  name="color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select Color</FormLabel>
                      <FormControl>
                        <div className="flex flex-wrap gap-2">
                          {product?.Key?.colors?.map((color) => (
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

                <FormField
                  control={form.control}
                  name="size"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select Size</FormLabel>
                      <FormControl>
                        <div className="flex flex-wrap gap-2">
                          {product.Key?.sizes?.map((size) => (
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

                <div className="flex flex-wrap items-center gap-8">
                  <div className="flex items-center gap-4 rounded-full bg-gray-100 p-2">
                    <Button
                      variant="ghost"
                      className="text-lg"
                      onClick={() => onQuantityChange('sub')}
                    >
                      -
                    </Button>
                    <span>{quantity}</span>
                    <Button
                      variant="ghost"
                      className="text-lg"
                      onClick={() => onQuantityChange('add')}
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

        <Tabs defaultValue="review" className="mt-12 transition-transform">
          <TabsList className="flex w-full bg-transparent">
            {['review', 'product-details', 'FAQ'].map((tab) => (
              <TabsTrigger
                value={tab}
                onClick={() => setSelected(tab)}
                key={tab}
                className={`basis-1/3 bg-transparent py-2 text-black dark:text-white ${tab === selected ? 'border-b border-black' : 'border-b'}`}
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent
            value="review"
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            <div className="col-span-2 my-5 flex items-center justify-between">
              <div className="flex items-center">
                <h2 className="text-lg font-semibold">Reviews</h2>
                <span className="ml-2 text-sm text-gray-500">
                  ({product.review?.length ?? 0})
                </span>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="default" className="rounded-full">
                    Write a review
                  </Button>
                </SheetTrigger>
                <SheetContent side={'bottom'}>
                  <SheetHeader>
                    <h1 className="text-lg font-semibold">Write a review</h1>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <RatingProduct onRatingSelect={setStarsRaiting} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Textarea
                        id="username"
                        placeholder="Type your commet here."
                        className="col-span-3"
                        onVolumeChange={(e) =>
                          setComment(e.currentTarget.textContent ?? '')
                        }
                      />
                    </div>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button onClick={() => onReview()}>Save changes</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
            {product.review?.map((review, index) => (
              <Card key={index} className="w-full border px-4 pb-4">
                <CardHeader className="flex flex-row items-center justify-between p-0">
                  <Stars value={review.rating} />
                  <DropdownMenu>
                    <DropdownMenuTrigger className="p-2" asChild>
                      <Button variant="link">
                        <MoreVertical className="h-[1rem] w-full" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-2">
                      <DropdownMenuItem>
                        <Edit2Icon className="h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent className="mb-2 flex items-center p-0">
                  <div className="text-lg font-bold">{review.name}</div>
                  <MdVerified className="text-2xl text-green-700" />
                </CardContent>
                <CardFooter className="mb-4 p-0 text-sm font-normal">
                  {review.review}
                </CardFooter>
                <CardDescription>
                  <span className="text-sm text-gray-500">
                    Posted on {review.CreatedAt}
                  </span>
                </CardDescription>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="product-details">product details</TabsContent>
          <TabsContent value="FAQ">
            <h1>FAQ</h1>
          </TabsContent>
        </Tabs>

        <center>
          <Button variant="default" className="mt-8 rounded-full">
            Load More
          </Button>
        </center>
        <center>
          <h1 className="mt-8 text-2xl font-semibold">Related Products</h1>
        </center>
        <div className="mt-8 flex items-center gap-2 overflow-auto">
          {relatedProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
