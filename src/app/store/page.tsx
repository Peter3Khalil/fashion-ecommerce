'use client';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { ProductCard } from '@/components/product';
import { SelectableBadge } from '@/components/selectableBadge';
import { Filter } from '@/components/shared/icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormField, FormItem } from '@/components/ui/form';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';
import {
  Categories,
  Colors,
  DressStyle,
  PriceRange,
  Sizes,
} from '@/types/type';
import Link from 'next/link';
import { Key } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
interface DefaultValues {
  categories: Categories['categories'][number][]; // multiple category options
  price: PriceRange['price']; // price range as a tuple
  colors: Colors['colors'][number][]; // multiple color options
  sizes: Sizes['sizes'][number][]; // multiple size options
  dressStyle: DressStyle['dressStyle'][number][]; // multiple dress style options
}

const defaultValues: DefaultValues = {
  price: [0, 500],
  colors: [
    'bg-green-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-orange-500',
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-white border',
  ],
  categories: ['hoodie', 'jeans', 'shirt', 'short', 'tshirt'],
  sizes: ['large', 'medium', 'small', 'x-large'],
  dressStyle: ['casual', 'formal', 'gym', 'party'],
};

const useStoreForm = () => {
  const form = useForm<typeof defaultValues>({ defaultValues });
  const onSubmit: SubmitHandler<typeof defaultValues> = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };
  return { form, onSubmit };
};
const FilterAccordion = ({
  form,
  onSubmit,
}: {
  form: ReturnType<typeof useForm<typeof defaultValues>>;
  onSubmit: SubmitHandler<typeof defaultValues>;
}) => (
  <Accordion type="single">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {Object.keys(defaultValues).map((key, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </AccordionTrigger>
            <AccordionContent>
              <FormField
                control={form.control}
                name={key as keyof DefaultValues}
                render={({ field }) => (
                  <FormItem className="flex flex-wrap gap-3">
                    {key === 'price' ? (
                      <Slider
                        range
                        value={field.value as number[]}
                        onVolumeChange={(
                          event: React.ChangeEvent<HTMLInputElement>,
                        ) => field.onChange(event)}
                        min={0}
                        max={500}
                        step={1}
                        className="mb-4 mt-2"
                      />
                    ) : (
                      (
                        defaultValues[key as keyof DefaultValues] as string[]
                      ).map(
                        (
                          item: string | number | readonly string[],
                          idx: Key | null | undefined,
                        ) =>
                          key === 'colors' ? (
                            <Checkbox
                              key={idx}
                              value={item}
                              checked={
                                Array.isArray(field.value) &&
                                (field.value as string[]).includes(
                                  item as string,
                                )
                              }
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([
                                    ...(field.value as string[]),
                                    item,
                                  ]);
                                } else {
                                  field.onChange(
                                    Array.isArray(field.value)
                                      ? field.value.filter(
                                          (
                                            value:
                                              | string
                                              | number
                                              | readonly string[],
                                          ) => value !== item,
                                        )
                                      : [],
                                  );
                                }
                              }}
                              className={`${item} h-9 w-9 data-[state=checked]:text-black data-[state=checked]:${item}`}
                            />
                          ) : (
                            <SelectableBadge
                              key={idx}
                              label={item}
                              checked={
                                Array.isArray(field.value) &&
                                field.value.includes(item as never)
                              }
                              onToggleBadge={(selected) => {
                                if (selected) {
                                  field.onChange(
                                    Array.isArray(field.value)
                                      ? [...field.value, item]
                                      : [item],
                                  );
                                } else {
                                  field.onChange(
                                    Array.isArray(field.value) &&
                                      field.value.filter(
                                        (
                                          value:
                                            | string
                                            | number
                                            | readonly string[],
                                        ) => value !== item,
                                      ),
                                  );
                                }
                              }}
                            />
                          ),
                      )
                    )}
                  </FormItem>
                )}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
        <Button className="mt-4 w-full rounded-full" type="submit">
          Apply Filters
        </Button>
      </form>
    </Form>
  </Accordion>
);

const Store = () => {
  const { form, onSubmit } = useStoreForm();

  return (
    <>
      <div className="min-h-screen overflow-y-auto overflow-x-hidden px-4 pt-16 md:px-[18px] lg:px-[108px]">
        <Header />
        <Breadcrumb className="m-2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Casual</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-[250px_1fr]">
          <aside className="hidden border p-4 lg:block">
            <FilterAccordion form={form} onSubmit={onSubmit} />
          </aside>
          <main>
            <div className="flex justify-between">
              <h2 className="mb-4 text-2xl font-bold">Casual</h2>
              <div className="block lg:hidden">
                <Sheet>
                  <SheetTrigger>
                    <Filter />
                  </SheetTrigger>
                  <SheetContent side={'bottom'}>
                    <SheetHeader>
                      <SheetTitle>Filter</SheetTitle>
                    </SheetHeader>
                    <FilterAccordion form={form} onSubmit={onSubmit} />
                  </SheetContent>
                </Sheet>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-16 md:grid-cols-3">
              {[...Array(4)].map((_, index) => (
                <Link href="/product" key={index}>
                  <ProductCard
                    key={index}
                    product={{
                      name: 'Hoodie',
                      price: 200,
                      review: [
                        {
                          rating: 5,
                          review: 'Great product',
                          CreatedAt: '',
                          name: 'John Doe',
                        },
                        {
                          rating: 4,
                          review: 'Good product',
                          CreatedAt: '',
                          name: 'John Doe',
                        },
                      ],
                      photos: ['/images/hero.webp'],
                      description: 'Lorem ipsum dolor sit amet, consectetur.',
                      Key: {
                        categories: 'hoodie',
                        price: [100, 200],
                        colors: ['bg-green-500'],
                        sizes: ['small'],
                        dressStyle: 'casual',
                      },
                      discount: 10,
                    }}
                  />
                </Link>
              ))}
            </div>
            <div className="mt-6 flex justify-between">
              <Button>Previous</Button>
              <Button>Next</Button>
            </div>
          </main>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Store;
