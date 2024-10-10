'use client';

import Footer from '@/components/footer';
import Header from '@/components/header';
import Product from '@/components/product';
import { SelectableBadge } from '@/components/selectableBadge';
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Slider } from '@/components/ui/slider';
import { SubmitHandler, useForm } from 'react-hook-form';

const Store = () => {
  const form = useForm({
    defaultValues: {
      categories: ['tshirt', 'shirt', 'hoodie', 'jeans', 'short'],
      price: [15, 200],
      colors: [
        'bg-green-500',
        'bg-red-500',
        'bg-yellow-500',
        'bg-orange-500',
        'bg-blue-500',
        'bg-purple-500',
        'bg-pink-500',
        'bg-white border', // Add border for white to make it visible
      ],
      sizes: ['small', 'medium', 'large', 'x-large'],
      dressStyle: ['casual', 'formal', 'party', 'gym'],
    },
  });

  const onSubmit: SubmitHandler<{
    categories: string[];
    price: number[];
    colors: string[];
    sizes: string[];
    dressStyle: string[];
  }> = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

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
          {/* Filters Sidebar */}
          <aside className="hidden border p-4 lg:block">
            <Accordion type="single" className="">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Categories</AccordionTrigger>
                    <AccordionContent>
                      <FormField
                        control={form.control}
                        name="categories"
                        render={({ field }) => (
                          <>
                            {(
                              form.control._defaultValues.categories as string[]
                            ).map((item) => (
                              <FormItem
                                key={item}
                                className="flex flex-row items-center"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value.includes(item)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        field.onChange([...field.value, item]);
                                      } else {
                                        field.onChange(
                                          field.value.filter(
                                            (value) => value !== item,
                                          ),
                                        );
                                      }
                                    }}
                                    className="m-2 flex h-5 w-5 items-center justify-center"
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {item}
                                </FormLabel>
                              </FormItem>
                            ))}
                          </>
                        )}
                      />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Price</AccordionTrigger>
                    <AccordionContent>
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem className="mt-2 flex flex-row items-start">
                            <Slider
                              value={field.value}
                              max={200} // Adjust max value according to your needs
                              step={1}
                              range={true}
                              onValueChange={(e) => field.onChange(e)}
                            />
                          </FormItem>
                        )}
                      />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Color</AccordionTrigger>
                    <AccordionContent>
                      <FormField
                        control={form.control}
                        name="colors"
                        render={({ field }) => (
                          <FormItem className="grid grid-cols-4 gap-3">
                            {(
                              form.control._defaultValues.colors as string[]
                            ).map((color) => (
                              <Checkbox
                                key={color}
                                value={color}
                                checked={field.value.includes(color as string)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    field.onChange([...field.value, color]);
                                  } else {
                                    field.onChange(
                                      field.value.filter(
                                        (value) => value !== color,
                                      ),
                                    );
                                  }
                                }}
                                className={`${color} h-9 w-9 data-[state=checked]:text-black data-[state=checked]:${color}`}
                              />
                            ))}
                          </FormItem>
                        )}
                      />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Sizes</AccordionTrigger>
                    <AccordionContent>
                      <FormField
                        control={form.control}
                        name="sizes"
                        render={({ field }) => (
                          <FormItem className="grid grid-cols-2 gap-3">
                            {(
                              form.control._defaultValues.sizes as string[]
                            ).map((color: string) => (
                              <>
                                <SelectableBadge
                                  label={color}
                                  onChange={(checked) => {
                                    if (checked) {
                                      field.onChange([...field.value, color]);
                                    } else {
                                      field.onChange(
                                        field.value.filter(
                                          (value) => value !== color,
                                        ),
                                      );
                                    }
                                  }}
                                />
                              </>
                            ))}
                          </FormItem>
                        )}
                      />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>DressStyle</AccordionTrigger>
                    <AccordionContent>
                      <FormField
                        control={form.control}
                        name="dressStyle"
                        render={({ field }) => (
                          <FormItem className="grid grid-cols-2 gap-3">
                            {(
                              form.control._defaultValues.dressStyle as string[]
                            ).map((color: string) => (
                              <>
                                <SelectableBadge
                                  label={color}
                                  onChange={(checked) => {
                                    if (checked) {
                                      field.onChange([...field.value, color]);
                                    } else {
                                      field.onChange(
                                        field.value.filter(
                                          (value) => value !== color,
                                        ),
                                      );
                                    }
                                  }}
                                />
                              </>
                            ))}
                          </FormItem>
                        )}
                      />
                    </AccordionContent>
                  </AccordionItem>

                  <Button className="mt-4 w-full rounded-full" type="submit">
                    Apply Filters
                  </Button>
                </form>
              </Form>
            </Accordion>
          </aside>

          {/* Product Grid */}
          <main>
            <h2 className="mb-4 text-2xl font-bold">Casual</h2>

            <div className="grid grid-cols-2 gap-16 md:grid-cols-3 lg:grid-cols-4">
              {/* Example Product Cards */}
              {[...Array(4)].map((_, index) => (
                <Product
                  key={index}
                  image="/images/hero.webp"
                  name="Test"
                  price={{
                    afterPrice: 30,
                    discount: {
                      beforPrice: 54,
                      discountPercent: 15,
                    },
                  }}
                  review={3.5}
                />
              ))}
            </div>

            {/* Pagination */}
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
