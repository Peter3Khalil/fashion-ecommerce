'use client';

import Footer from '@/components/footer';
import Header from '@/components/header';
import Product from '@/components/product';
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
import { DefaultValues } from '@/types/type';
import { Key } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const defaultValues: DefaultValues = {
  price: [0, 500],
  colors: [],
  categories: 'tshirt',
  sizes: [],
  dressStyle: 'casual',
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
                        onValueChange={(value: any) => field.onChange(value)}
                        min={0}
                        max={500}
                        step={1}
                        className="mb-4 mt-2"
                      />
                    ) : (
                      (defaultValues[key as keyof DefaultValues] as any).map(
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
                                field.value.includes(item as never)
                              }
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([
                                    ...(field.value as any[]),
                                    item,
                                  ]);
                                } else {
                                  field.onChange(
                                    (field.value as any[]).filter(
                                      (value: any) => value !== item,
                                    ),
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
                                        (value: any) => value !== item,
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
                <Product
                  key={index}
                  photos={['/images/hero.webp']}
                  name="Test"
                  price={30}
                  review={3}
                  discount={0}
                />
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
