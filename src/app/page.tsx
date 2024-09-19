import Header from '@/components/header';
import { StarIcon } from '@/components/shared/icons';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

const Home = () => {
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
        <section className="flex flex-col items-center justify-center">
          <center>
            <h1 className="mb-14 mt-48 text-5xl font-bold">NEW ARRIVALS</h1>
          </center>
          <div className="flex w-full gap-5 overflow-x-auto px-4 max-lg:pl-4 lg:grid lg:grid-cols-4 lg:px-[100px]">
            {Array.from({ length: 4 }).map((d, f) => (
              <Card
                key={f}
                className="min-w-[250px] max-lg:flex-shrink-0 lg:w-auto"
              >
                <CardHeader>
                  <CardTitle className="flex">
                    <Image
                      src="/images/hero.webp"
                      alt="Hero Image"
                      width={295}
                      height={298}
                      className="mx-auto h-auto w-full rounded-2xl object-contain md:w-auto"
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold">Product name</div>
                </CardContent>
                <CardFooter>
                  <div>
                    <div className="text-2xl font-bold">20$</div>
                    <div className="flex">
                      <StarIcon />
                      20K
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Button
            type="button"
            variant={'outline'}
            className="mb-16 mt-10 w-56 rounded-full"
          >
            View All
          </Button>
        </section>
        <hr className="m-24 mb-16 border border-black opacity-10" />
        <section className="flex flex-col items-center justify-center">
          <center>
            <h1 className="text-5xl font-bold">TOP SELLINGS</h1>
          </center>
          <div className="flex w-full gap-5 overflow-x-auto px-4 max-lg:pl-4 lg:grid lg:grid-cols-4 lg:px-[100px]">
            {Array.from({ length: 4 }).map((d, f) => (
              <Card
                key={f}
                className="min-w-[250px] max-lg:flex-shrink-0 lg:w-auto"
              >
                <CardHeader>
                  <CardTitle className="flex">
                    <Image
                      src="/images/hero.webp"
                      alt="Hero Image"
                      width={295}
                      height={298}
                      className="mx-auto h-auto w-full rounded-2xl object-contain md:w-auto"
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold">Product name</div>
                </CardContent>
                <CardFooter>
                  <div>
                    <div className="text-2xl font-bold">20$</div>
                    <div className="flex">
                      <StarIcon />
                      20K
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Button
            type="button"
            variant={'outline'}
            className="mb-20 mt-10 w-56 rounded-full"
          >
            View All
          </Button>
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
